import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import SignOut from "../Auth/signout";

const MainNavBar = ({ session }) => {
  console.log(session);
  const toUpperCasefunc = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <div style={{ paddingBottom: "60px" }}>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
        <div className="container">
          <NavLink to="/" className="navbar-brand">
            {session.getCurrentUser ? (
              <strong>
                {toUpperCasefunc(session.getCurrentUser.username)}
              </strong>
            ) : (
              <strong>Datting App</strong>
            )}
          </NavLink>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {session.getCurrentUser ? (
              <NavBarAuth session={session} />
            ) : (
              <UnAuthUser />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};
const UnAuthUser = () => {
  return (
    <ul
      className="navbar-nav ml-auto"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
    >
      <li className="nav-item">
        <NavLink to="/signin" className="nav-link ">
          SignIn
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/registeration" className="nav-link ">
          Registartion
        </NavLink>
      </li>
    </ul>
  );
};

const NavBarAuth = ({ session }) => {
  const countNotification = () => {
    if (session.getCurrentUser.recieverequest.length < 1) {
      return;
    }

    return session.getCurrentUser.recieverequest.length;
  };
  return (
    <React.Fragment>
      <ul
        className="navbar-nav ml-auto"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
      >
        <li className="nav-item">
          <NavLink to="/peopleListPage" className="nav-link">
            People
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/friendsPage" className="nav-link">
            Friends
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/notifications" className="nav-link">
            Notification{" "}
            <span className="badge badge-danger">{countNotification()}</span>
          </NavLink>
        </li>
      </ul>
      <SignOut session={session} />
    </React.Fragment>
  );
};

export default MainNavBar;
