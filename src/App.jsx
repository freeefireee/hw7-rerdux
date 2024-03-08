import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useDispatch } from "react-redux";
import logout from "./actions/userActions";
import './app.css';

const App = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Home /> : <Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/logout"
          element={
            isLoggedIn ? (
              <div>
                <h2>Logging out...</h2>
                {handleLogout()}
              </div>
            ) : (
              <div>
                <h2>Error: You are not logged in.</h2>
                <Link to="/login">Login</Link>
              </div>
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

