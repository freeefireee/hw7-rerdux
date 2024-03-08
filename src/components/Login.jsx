import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login as loginAction } from "../actions/userActions";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import './login.css';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    dispatch(loginAction(username));
    navigate("/");
  };

  const isButtonDisabled = !username || !password;

  return (
    <div className="login-block">
      <div className="block-login">
        <div className="login-sign">
          <h2><FontAwesomeIcon icon={faUser} /> Login in</h2>
          <h4><Link className="siign" to="/signup">Sign Up</Link></h4>
        </div>
        <form>
          <label>
            Username:
            <input
              type="text"
              placeholder="UserName..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              placeholder="Password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button
            type="button"
            className="button-30"
            role="button"
            onClick={handleLogin}
            disabled={isButtonDisabled}
          >
            Login
          </button>
          <div className="chekbox">
            <h3>Remember Me</h3>
            <input type="checkbox" className="chek" name="" id="" />
          </div>
          <br />
          <Link className="sign" to="/signup">
            Don't have an account? Sign up here.
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
