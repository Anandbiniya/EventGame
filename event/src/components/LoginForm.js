import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./styles/login.css";

export default function LoginForm() {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setLogin] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send a request to the server to check the email and password
      const response = await axios.post("https://reqres.in/api/login", {
        email,
        password,
      });
      console.log(response);
      if (response.status === 200) {
        // Login successful if the server returns a 200 status code
        console.log("log in success");
        navigate("/games");
        setLogin(true);
        localStorage.setItem("isLogin", JSON.stringify(isLogin));
      } else {
        setError(response.data.error);
        console.log("err");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="mainbox">
      <form onSubmit={handleSubmit} className=".login-form">
        <label>
          Email:
          <input
            placeholder="eve.holt@reqres.in"
            className="login-form__input"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            placeholder="cityslicka"
            className="login-form__input"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <br />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit" className="login-form__button">
          Log In
        </button>
      </form>
      <div className="login-footer">
        <span>new User?</span>
        <Link to="/signup" style={{ display: "inline" }}>
          Singup
        </Link>
      </div>
    </div>
  );
}
