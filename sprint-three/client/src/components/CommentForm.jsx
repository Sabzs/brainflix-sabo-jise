import React, { Component } from "react";
import Images from "../assets/images/Mohan-muruge.jpg";

export class CommentForm extends Component {
  render() {
    return (
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
                  placeholder="name"
                  name="name"
                  // value={this.state.name}
                  // onChange={this.handleChange}
                />
              </div>
              <div className="form__textareaDiv">
                <textarea
                  className="form__textarea"
                  cols="30"
                  rows="5"
                  placeholder="message"
                  name="message"
                  // value={this.state.message}
                  // onChange={this.handleChange}
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
    );
  }
}

export default CommentForm;
