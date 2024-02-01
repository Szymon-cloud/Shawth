import React from "react";
import "./LogReg.css";
import logo from "../../assets/vite.svg";
import { LightMode } from "@chakra-ui/react";

const LogReg: React.FC = () => {
  const login = () => {
    const x = document.getElementById("login") as HTMLFormElement;
    const y = document.getElementById("register") as HTMLFormElement;
    const z = document.getElementById("btn") as HTMLDivElement;

    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "5px";
  };

  const register = () => {
    const x = document.getElementById("login") as HTMLFormElement;
    const y = document.getElementById("register") as HTMLFormElement;
    const z = document.getElementById("btn") as HTMLDivElement;

    x.style.left = "-450px";
    y.style.left = "50px";
    z.style.left = "140px";
  };

  return (
    <LightMode>
      <div className="main">
        <div className="form-box">
          <div className="logo">
            <a href="/index.html">
              <img src={logo} alt="Logo" />
            </a>
          </div>
          <div className="button-box">
            <div id="btn"></div>
            <button type="button" className="toggle-btn" onClick={login}>
              Logowanie
            </button>
            <button type="button" className="toggle-btn" onClick={register}>
              Rejestracja
            </button>
          </div>
          <form id="login" className="input-group">
            <input
              type="text"
              className="input-filed"
              placeholder="Username"
              required
            />
            <input
              type="password"
              className="input-filed"
              placeholder="Enter Password"
              required
            />
            <input type="checkbox" className="check-box" />
            <span>Zapamiętaj hasło</span>
            <button type="submit" className="submit-btn">
              Zaloguj
            </button>
          </form>
          <form id="register" className="input-group">
            <input
              type="text"
              className="input-filed"
              placeholder="Username"
              required
            />
            <input
              type="email"
              className="input-filed"
              placeholder="Email"
              required
            />
            <input
              type="password"
              className="input-filed"
              placeholder="Enter Password"
              required
            />
            <input type="checkbox" className="check-box" />
            <span>
              Akceptuję{" "}
              <a className="regulamin" href="/regulamin.html">
                regulamin
              </a>{" "}
              &{" "}
              <a className="regulamin" href="/polityka.html">
                politykę prywatności
              </a>
            </span>
            <button type="submit" className="submit-btn">
              Rejestracja
            </button>
          </form>
        </div>
      </div>
    </LightMode>
  );
};

export default LogReg;
