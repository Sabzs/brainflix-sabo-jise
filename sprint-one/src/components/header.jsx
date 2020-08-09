import React from "react";
import Logo from "../assets/logo/logo-brainflix.svg";
import Images from "../assets/images/Mohan-muruge.jpg";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header__logoDiv">
          <img className="header__logo" src={Logo} alt="brainflix logo" />
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
              <button className="header__btn" type="upload">
                UPLOAD
              </button>
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
}

export default Header;
