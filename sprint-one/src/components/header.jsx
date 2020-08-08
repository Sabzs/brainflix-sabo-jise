import React from "react";
import Logo from "../assets/logo/logo-brainflix.svg";
import Images from "../assets/images/Mohan-muruge.jpg";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <img className="header__logo" src={Logo} alt="brainflix logo" />
        <div className="header__searchUpload">
          <div className="header__searchDiv">
            <input
              className="header__searchInput"
              type="search"
              placeholder="search"
            />
          </div>
          <div className="header__btn-mohead">
            <div className="header__btnDiv">
              <button className="header__btn" type="upload">
                UPLOAD
              </button>
            </div>

            <div className="header__mohead">
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
