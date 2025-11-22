import User from "../models/User.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const generateToken = (userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  return token;
};

// constroller for user registeration
// POST : /api/users/register
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // check if user already exists

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // create new user
    const hashedPasssword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashedPasssword,
    });

    // return success message
    const token = generateToken(newUser._id);
    newUser.password = undefined;
    return res
      .status(201)
      .json({ message: "User created successfully", token, user: newUser });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// constroller for user login
// POST : /api/users/login
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid user or password" });
    }

    // check if password is correct

    if (!user.comparePassword(password)) {
      return res.status(400).json({ message: "Invalid user or password" });
    }

    // return success message
    const token = generateToken(user._id);
    user.password = undefined;

    return res
      .status(200)
      .json({ message: "Login successfully", token, user: user });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
