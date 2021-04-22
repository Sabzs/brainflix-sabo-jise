import React from "react";
import Images from "../assets/images/Mohan-muruge.jpg";

function FormInputs(props) {
  let timeStamp = props.comments.timestamp;
  var toDate = new Date(timeStamp).getDate();
  var toMonth = new Date(timeStamp).getMonth() + 1;
  var toYear = new Date(timeStamp).getFullYear();
  var originalDate = toMonth + "/" + toDate + "/" + toYear;

  const newComments =
    props.comments.comments &&
    props.comments.comments.map(function (comment, index) {
      return (
        <div className="comments" key={index}>
          <div className="comments__circleDiv">
            <div className="comments__greyCircle"></div>
          </div>
          <div className="comments__userComments">
            <div className="comments__nameDate">
              <p className="comments__userName">{comment.name}</p>
              <p className="comments__userDate">{originalDate}</p>
            </div>
            <div className="comments__userText">{comment.comment}</div>
          </div>
        </div>
      );
    });

  return (
    <>
      <form className="form">
        <h3 className="form__threeComments">3 Comments</h3>

        <div className="form__mohead-inputDiv">
          <div className="form__mohead">
            <img
              className="form__mohead-img"
              src={Images}
              alt="Muhan Muruge Icon"
            />
          </div>

          <div className="form__textarea-btnDiv">
            <div className="form__conver-textarea">
              <div className="form__label-inputDiv">
                <label className="form__label" htmlFor="name">
                  JOIN THE CONVERSATION
                </label>
                <input
                  className="form__input"
                  type="text"
                  name="name"
                  placeholder="name"
                />
              </div>
              <div className="form__textareaDiv">
                <textarea
                  className="form__textarea"
                  name="message"
                  cols="30"
                  rows="5"
                  placeholder="message"
                ></textarea>
              </div>
            </div>
            <div className="form__btnDiv">
              <button className="form__btn" type="submit">
                {" "}
                COMMENT
              </button>
            </div>
          </div>
        </div>
      </form>
      {newComments}
    </>
  );
}

export default FormInputs;
