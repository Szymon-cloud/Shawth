import Login from "./components/Login";
import Register from "./components/Register";
import { useState } from "react";

export default function App() {
  const [curentForm, setCurentForm] = useState("login");
  const toggleForm = (formName: string) => {
    setCurentForm(formName);
  };

  return (
    <>
      {curentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
    </>
  );
}
