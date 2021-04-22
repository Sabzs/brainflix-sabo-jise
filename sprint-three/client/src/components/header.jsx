import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo/logo-brainflix.svg";
import Images from "../assets/images/Mohan-muruge.jpg";

function Header() {
  return (
    <header className="header">
      <div className="header__logoDiv">
        <Link to="/Home">
          <img src={Logo} alt="brainflix logo" />
        </Link>
      </div>

      <div className="header__searchUpload">
        <div className="header__searchDiv">
          <input
            className="header__searchInput"
            type="search"
            placeholder="Search"
          />
        </div>
        <div className="header__upload-mohead">
          <div className="header__btnDiv">
            <Link to="/uploadpage">
              <button className="header__btn" type="upload">
                UPLOAD
              </button>
            </Link>
          </div>

          <div className="header__moheadDiv">
            <img
              className="header__mohead-img"
              src={Images}
              alt="Muhan Muruge Icon"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
