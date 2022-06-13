import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import NewProductFormModal from "../NewProductFormModal";
import DemoUser from "../DemoUser";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div className="loggedInNav">
        <NewProductFormModal user={sessionUser} />
        <ProfileButton user={sessionUser} />
      </div>
    );
  } else {
    sessionLinks = (
      <>
        <DemoUser />
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
              <i className="fa-solid fa-house-chimney"></i>
            </NavLink>
            <NavLink exact to="/products">
              <i className="fa-solid fa-rocket"></i> Products
            </NavLink>
          </div>
          <div>{isLoaded && sessionLinks}</div>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
