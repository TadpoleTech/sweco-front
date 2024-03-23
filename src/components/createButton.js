import React from "react";
import { GoPlus } from "react-icons/go";
import "../styles/createButton.css";

function CreateButton(props) {
  return (
    <button
      className="create-post"
      onClick={() => {
        window.location.href = "/create-post";
      }}
    >
      <GoPlus size={60} />
    </button>
  );
}

export default CreateButton;
