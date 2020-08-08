import React from "react";
import Images from "../assets/images/Mohan-muruge.jpg";

function InputText() {
  return (
    <div>
      <div className="Mohead">
        <img className="Mohead-Img" src={Images} alt="Muhan Muruge Icon" />
      </div>
      <div>
        <label htmlFor="name">JOIN THE CONVERSATION</label>
        <input type="search" placeholder="search" />
      </div>
      <div>
        <button type="upload">COMMENT</button>
      </div>
    </div>
  );
}
export default InputText;
