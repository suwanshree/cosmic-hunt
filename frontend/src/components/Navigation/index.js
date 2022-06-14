import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import NewProductFormModal from "../NewProductFormModal";
import { SearchContext } from "../../context/Search";
import DemoUser from "../DemoUser";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  const history = useHistory();
  const { setCurrentSearch } = useContext(SearchContext);

  const onSearch = async (e) => {
    e.preventDefault();
    history.push("/products");
  };

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
          <form className="search-bar" onSubmit={onSearch}>
            <input
              onChange={(e) => setCurrentSearch(e.target.value)}
              type="text"
              className="search-input"
              placeholder="Search Products..."
            />
            <button className="search-submit" type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
          <div>{isLoaded && sessionLinks}</div>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
