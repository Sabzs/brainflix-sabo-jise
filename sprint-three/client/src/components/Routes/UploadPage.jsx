import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo/logo-brainflix.svg";
import Images from "../../assets/images/Mohan-muruge.jpg";
import VideoPreview from "../../assets/images/video-preview.jpg";

class UploadPage extends React.Component {
  render() {
    return (
      <div className="upload">
        <header className="header">
          <div className="header__logoDiv">
            <Link to="/Home">
              <img className="header__logo" src={Logo} alt="brainflix logo" />
            </Link>
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
                <Link to="/uploadpage">
                  <button className="header__btn" type="upload">
                    UPLOAD
                  </button>
                </Link>
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
        </header>{" "}
        <form className="form">
          <h3 className="form__upload-header">Upload Video</h3>{" "}
          <div className="form__preview-converDiv">
            <div className="form__lable-previewDiv">
              <label className="form__label" htmlFor="name">
                VIDEO THUMBNAIL
              </label>
              <div className="form__previewDiv">
                <img
                  className="form__previewImg"
                  src={VideoPreview}
                  alt="video preview"
                />
              </div>
            </div>{" "}
            <div className="form__publish-section">
              <div className="form__conver-textarea">
                <div className="form__label-inputDiv">
                  <label className="form__label" htmlFor="name">
                    TITLE YOUR VIDEO
                  </label>
                  <input
                    className="form__input-text"
                    type="text"
                    name="name"
                    placeholder="Add a title to your video"
                  />
                </div>
                <label className="form__label" htmlFor="name">
                  ADD A VIDEO DESCRITION
                </label>
                <div className="form__texareaDiv">
                  <textarea
                    className="form__texArea"
                    name="message"
                    cols="30"
                    rows="5"
                    placeholder="Add a description of your video"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="form__publishDiv">
            <button className="form__publish-btn" type="submit">
              {" "}
              <p>PUBLISH</p>
            </button>
            <div className="form__cancel-btn">
              <Link to={"/"}>CANCEL</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default UploadPage;
