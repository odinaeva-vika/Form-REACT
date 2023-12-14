import React from "react";
import Button from "../Buttons/Buttons";
import "./Form.css";
import { useState } from "react";
import inputs from "../../inputsList";
import Input from "../Input/Input";

function Form() {
  const [focusInput, setFocusInput] = useState(false);

  const handleFocus = (e) => {
    const inputName = e.target.name;
    setFocusInput((prevState) =>
      inputName !== prevState ? inputName : prevState
    );
  };

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    if (Object.values(formJson).some((value) => value === "")) {
      setError(true);
      return;
    } else if (formJson.password !== formJson.checkPassword) {
      setError(true);
      return;
    }
    setError(false);

    const person = JSON.stringify(formJson);
    alert(`Вы зарегистрировались: ${person}`);
  }

  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const handleCheckboxChange = (e) => {
    setIsCheckboxChecked(e.target.checked);
  };

  const [isError, setError] = useState(false);

  return (
    <form className="form" type="submit" onSubmit={handleSubmit}>
      <div className="form__box">
        {inputs.map((input) => (
          <Input
            key={input.id}
            name={input.name}
            type={input.type}
            placeholder={input.placeholder}
            onFocus={handleFocus}
            defaultValue=""
            className={`input ${focusInput === input.name ? "blue" : ""}`}
          />
        ))}
        {isError ? <p>Ошибка в форме!</p> : ""}
        <label>
          <input
            className="checkbox"
            type="checkbox"
            name="myCheckbox"
            checked={isCheckboxChecked}
            onChange={handleCheckboxChange}
          />
          Подтверждаю пароль
        </label>
      </div>
      <Button type="submit" btn="submit" disabled={!isCheckboxChecked} />
    </form>
  );
}

export default Form;
