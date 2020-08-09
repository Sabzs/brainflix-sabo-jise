import React from "react";
import Images from "../assets/images/Mohan-muruge.jpg";

function FormInputs({ handleSubmitMessage }) {
  return (
    <form onSubmit={handleSubmitMessage}>
      <div className="mohead">
        <img className="mohead-img" src={Images} alt="Muhan Muruge Icon" />
      </div>
      <div className="inputBtn-Div">
        <div>
          <label htmlFor="name">JOIN THE CONVERSATION</label>
          <input type="text" name="name" placeholder="name" />
        </div>
        <div>
          <textarea
            name="message"
            cols="30"
            rows="5"
            placeholder="message"
          ></textarea>
        </div>
        <div>
          <button type="submit"> COMMENT</button>
        </div>
      </div>
    </form>
  );
}
export default FormInputs;
