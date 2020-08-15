import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo/logo-brainflix.png";
import Images from "../../assets/images/Mohan-muruge.jpg";
// import VideoPreview from "../../assets/images/video-preview.jpg";

class UploadPage extends React.Component {
  render() {
    return (
      <div className="upload">
        <header className="upload__headerDiv">
          <div className="upload__logoDiv">
            <Link to="/">
              <img className="upload__logo" src={Logo} alt="brainflix logo" />
            </Link>
          </div>

          <div className="upload__searchUpload">
            <div className="upload__searchDiv">
              <input
                className="upload__searchInput"
                type="search"
                placeholder="Search"
              />
            </div>
            <div className="upload__upload-mohead">
              <div className="upload__btnDiv">
                <button className="upload__btn" type="upload">
                  UPLOAD
                </button>
              </div>

              <div className="upload__moheadDiv">
                <img
                  className="upload__mohead-img"
                  src={Images}
                  alt="Muhan Muruge Icon"
                />
              </div>
            </div>
          </div>
        </header>{" "}
        <form className="upload__formDiv">
          <h3 className="upload__upload-header">Upload Video</h3>{" "}
          {/* <div className="upload__previewDiv">
            <img
              className="upload__previewImg"
              src={VideoPreview}
              alt="video preview"
            />
          </div> */}
          <div className="upload__mohead-inputDiv">
            {" "}
            <div className="upload__textarea-btnDiv">
              <div className="upload__conver-textarea">
                <div className="upload__lable-inputDiv">
                  <label className="upload__label" htmlFor="name">
                    VIDEO THUMBNAIL
                  </label>
                  <input
                    className="upload__input"
                    type="text"
                    name="name"
                    placeholder="name"
                  />
                </div>
                <label className="upload__label" htmlFor="name">
                  ADD A VIDEO DESCRITION
                </label>
                <div className="upload__textareaDiv">
                  <textarea
                    className="upload__textarea"
                    name="message"
                    cols="30"
                    rows="5"
                    placeholder="message"
                  ></textarea>
                </div>
              </div>
              <div className="upload__btnDiv">
                <Link to={"/"} className="upload__button-cancel">
                  CANCEL
                </Link>
                <button className="upload__btn" type="submit">
                  {" "}
                  PUBLISH
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
