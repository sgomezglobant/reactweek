import React from "react";
import "./../styles/registerButton.scss";

const RegisterButton = ({to}) => (
  <a target="_blank" rel="noopener noreferrer" href={to} className="register-button">Registrate aquí</a>
)

export default RegisterButton;
