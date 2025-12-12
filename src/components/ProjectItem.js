import React from "react";
import "../styles/Projects.css";
import { useNavigate } from "react-router-dom";

function ProjectItem({ name, id }) {
  const navigate = useNavigate();
  return (
    <div
      className="projectItem"
      onClick={() => {
        navigate("/project/" + id);
      }}
    >
      <h1> {name} </h1>
    </div>
  );
}

export default ProjectItem;
