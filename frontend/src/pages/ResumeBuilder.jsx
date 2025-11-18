import React, { useState } from "react";

const ResumeBuilder = () => {
  const [resumeData, setResumeData] = useState({
    _id: "",
    title: "",
    personal_info: {},
    professinal_summary: "",
    experience: [],
    eduction: [],
    project: [],
    skills: [],
    template: "classic",
    accent_color: "#3B82F6",
    public: false,
  });

  return <div></div>;
};

export default ResumeBuilder;
