import React from "react";
import "./reset.css";
import "./global.css";
import Form from "./components/Form/Form";
import "./App.css";
import Button from "./components/Buttons/Buttons";

function App() {
  return (
    <main className="main">
      <section className="registration">
        <div className="container">
          <h1 className="title">Создание аккаунта</h1>
          <p className="text">
            Введите свои данные, чтобы создать аккаунт в сервисе
          </p>
          <Form />
          <div className="box">
            <p className="box__description">Уже есть аккаунт ?</p>
            <Button btn="go" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
