import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import CartData from "./components/cart/example";
import Games from "./components/games/Games";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";

function App() {
  const [isLogin, setLogin] = useState(true);
  let login = localStorage.getItem("isLogin");
  function setLoginStatus() {
    console.log("first");
    setLogin(false);
    localStorage.setItem("isLogin", JSON.stringify(isLogin));
  }
  return (
    <div className="App">
      <nav>
        <h2>Event Booking App</h2>
        <div className="nav-links">
          <Link to="/games">Home</Link>
          <Link to="/cart">Cart</Link>
          {login ? (
            <Link to="/login" onClick={() => setLoginStatus()}>
              Logout
            </Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </nav>
      <Routes>
        <Route path="/signup" element={<SignupForm />}>
          Sign Up
        </Route>
        <Route path="/login" element={<LoginForm />}>
          Login
        </Route>
        <Route path="/games" element={<Games />} />
        <Route path="/cart" element={<CartData />} />
      </Routes>
    </div>
  );
}

export default App;
