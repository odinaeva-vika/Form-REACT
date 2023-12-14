import React from "react";
import "./Buttons.css";

function Button({ btn, disabled }) {
  if (btn === "submit") {
    return (
      <button className="btn" type="submit" disabled={disabled}>
        Продолжить
      </button>
    );
  }

  if (btn === "go") {
    return (
      <a className="btn__go" href="#">
        Войти
      </a>
    );
  }
}

export default Button;
