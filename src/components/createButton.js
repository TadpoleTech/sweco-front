import React from "react";
import { GoPlus } from "react-icons/go";
import "../styles/createButton.css";

function CreateButton(props) {
  return (
      <button className="create-board" onClick={() => {console.log("asdf")}}>
        <GoPlus size={60} />
      </button>
  );
}

export default CreateButton;
