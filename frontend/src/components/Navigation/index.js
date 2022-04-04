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
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
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
          </div>
          <div>{isLoaded && sessionLinks}</div>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
