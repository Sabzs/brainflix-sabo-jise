import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo/logo-brainflix.png";
import Images from "../../assets/images/Mohan-muruge.jpg";

class UploadPage extends React.Component {
  render() {
    return (
      <div>
        <header className="videoUpload__headerDiv">
          <div className="videoUpload__logoDiv">
            <Link to="/">
              <img
                className="videoUpload__logo"
                src={Logo}
                alt="brainflix logo"
              />
            </Link>
          </div>

          <div className="videoUpload__searchUpload">
            <div className="videoUpload__searchDiv">
              <input
                className="videoUpload__searchInput"
                type="search"
                placeholder="Search"
              />
            </div>
            <div className="videoUpload__upload-mohead">
              <div className="videoUpload__btnDiv">
                <button className="videoUpload__btn" type="upload">
                  UPLOAD
                </button>
              </div>

              <div className="videoUpload__moheadDiv">
                <img
                  className="videoUpload__mohead-img"
                  src={Images}
                  alt="Muhan Muruge Icon"
                />
              </div>
            </div>
          </div>
        </header>{" "}
        <form
          className="videoUpload__uploadFormDiv"
          // onSubmit={handleSubmitMessage}
        >
          <h3 className="videoUpload__threeComments">3 Comments</h3>{" "}
          <div className="videoUpload__mohead-inputDiv">
            {" "}
            <div className="videoUpload__mohead">
              {" "}
              <img
                className="videoUpload__mohead-img"
                src={Images}
                alt="Muhan Muruge Icon"
              />
            </div>
            <div className="videoUpload__textarea-btnDiv">
              <div className="videoUpload__conver-textarea">
                <div className="videoUpload__lable-inputDiv">
                  <label className="videoUpload__label" htmlFor="name">
                    JOIN THE CONVERSATION
                  </label>
                  <input
                    className="videoUpload__input"
                    type="text"
                    name="name"
                    placeholder="name"
                  />
                </div>
                <div className="videoUpload__textareaDiv">
                  <textarea
                    className="videoUpload__textarea"
                    name="message"
                    cols="30"
                    rows="5"
                    placeholder="message"
                  ></textarea>
                </div>
              </div>
              <div className="videoUpload__btnDiv">
                <button className="videoUpload__btn" type="submit">
                  {" "}
                  COMMENT
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      //
    );
  }
}

export default UploadPage;
