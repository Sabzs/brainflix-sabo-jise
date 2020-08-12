import React from "react";
import Logo from "../../assets/logo/logo-brainflix.svg";
import Images from "../../assets/images/Mohan-muruge.jpg";

// export default class NextVideo extends Component {
//   render() {
// this  component need to have state//

function Upload({ handleSubmitMessage }) {
  return (
    <div>
      <h1>This will be my upload page</h1>
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
      <form className="form" onSubmit={handleSubmitMessage}>
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
              <div className="form__lable-inputDiv">
                <label className="form__label" htmlFor="name">
                  JOIN THE CONVERSATION
                </label>
                <input
                  //display:none was set on this element in the Form section...you need to undo it for this section //
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
    </div>
  );
}

export default Upload;
