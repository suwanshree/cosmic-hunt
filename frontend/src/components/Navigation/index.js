import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div className="loggedInNav">
        <NavLink exact to="/products">
          Host
        </NavLink>
        <ProfileButton user={sessionUser} />;
      </div>
    );
  } else {
    sessionLinks = (
      <>
        <NavLink exact to="/products">
          Demo
        </NavLink>
        <LoginFormModal />
        <SignupFormModal />
      </>
    );
  }

  return (
    <div className="navContainer">
      <ul className="nav">
        <li className="navItems">
          <div>
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink exact to="/products">
              Products
            </NavLink>
          </div>
          <div>{isLoaded && sessionLinks}</div>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
