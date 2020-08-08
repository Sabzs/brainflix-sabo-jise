import React from "react";
import Images from "../assets/images/Mohan-muruge.jpg";

function InputText() {
  return (
    <div>
      <div className="mohead">
        <img className="mohead-img" src={Images} alt="Muhan Muruge Icon" />
      </div>
      <div className="inputBtn-Div">
        <div>
          <label htmlFor="name">JOIN THE CONVERSATION</label>
          <input type="search" placeholder="search" />
        </div>
        <div>
          <button type="upload">COMMENT</button>
        </div>
      </div>
    </div>
  );
}
export default InputText;
