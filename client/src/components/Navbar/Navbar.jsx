import React from 'react';
import { Link } from 'react-router-dom';
import * as CONSTS from '../../utils/consts';
import * as PATHS from '../../utils/paths';
import SearchBar from '../SearchBar';
import './Navbar.css';

const Navbar = (props) => {
  const { filterSnippets } = props;
  return (
    <nav>
      <Link to={PATHS.HOMEPAGE} className="nav__projectName">
        {CONSTS.CAPITALIZED_APP}
      </Link>

      {props.user && <SearchBar filterSnippets={filterSnippets} />}
      <div className="nav__authLinks">
        {props.user ? (
          <>
            <Link to={PATHS.PROTECTEDPAGE} className="authLink">
              Protected Page
            </Link>
            <button className="nav-logoutbtn" onClick={props.handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to={PATHS.SIGNUPPAGE} className="authLink">
              Signup
            </Link>
            <Link to={PATHS.LOGINPAGE} className="authLink">
              Log In
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
