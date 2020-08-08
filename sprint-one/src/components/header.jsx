import React from "react";
import Logo from "../assets/logo/logo-brainflix.svg";
import Images from "../assets/images/Mohan-muruge.jpg";

class Header extends React.Component {
  render() {
    return (
      <header>
        <img src={Logo} alt="brainflix logo" />
        <form>
          <input type="search" placeholder="search" />
          <button type="upload">UPLOAD</button>
          <div className="Mohead">
            <img className="Mohead-Img" src={Images} alt="Muhan Muruge Icon" />
          </div>
        </form>
      </header>
    );
  }
}

export default Header;

//================================
// <nav>
//   <a href="./">Home</a>
//   {' | '}
//   <a href="./">About</a>
//   {' | '}
//   <a href="./">Contact</a>
// </nav>
