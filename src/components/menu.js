import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import "../styles/menu.css";

function Menu(props) {
  let burger;
  if (props.isOpen) {
    burger =  <RxHamburgerMenu size={30} className="open"/>
  } else {
    burger =  <RxHamburgerMenu size={30} className="closed"/>
  }

  function onMenuClick() {
    props.updateMenu(!props.isOpen);
  }

  return (
    <div className="hamburger-menu">
      <button onClick={onMenuClick}>
        {burger}
      </button>
    </div>
  );
}

export default Menu;
