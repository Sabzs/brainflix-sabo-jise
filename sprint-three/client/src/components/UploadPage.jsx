import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo/logo-brainflix.svg";
import Images from "../assets/images/Mohan-muruge.jpg";
import VideoPreview from "../assets/images/video-preview.jpg";
import axios from "axios";

const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://brainflix-sabzs.herokuapp.com"
    : "http://localhost:8080";

class UploadPage extends Component {
  state = {
    title: "",
    channel: "",
    descirption: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { title, channel, description } = event.target;

    axios
      .post(`${API_URL}/videos`, {
        title: title.value,
        channel: channel.value,
        description: description.value,
        image: "https://i.imgur.com/ibLw5q5.jpg",
      })
      .then((res) => {
        console.log(res);
        this.setState({
          videos: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    this.setState({ title: "", channel: "", description: "" });
  };

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
        <form className="form" onSubmit={this.handleSubmit}>
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
                    name="title"
                    placeholder="Add a title to your video"
                    value={this.state.title}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form__label-inputDiv">
                  <label className="form__label" htmlFor="name">
                    CHANNEL NAME
                  </label>
                  <input
                    className="form__input-text"
                    type="text"
                    name="channel"
                    placeholder="Your channel name"
                    value={this.state.channel}
                    onChange={this.handleChange}
                  />
                </div>

                <label className="form__label" htmlFor="name">
                  ADD A VIDEO DESCRITION
                </label>
                <div className="form__texareaDiv">
                  <textarea
                    className="form__texArea"
                    name="description"
                    cols="30"
                    rows="5"
                    placeholder="Add a description of your video"
                    type="text"
                    value={this.state.description}
                    onChange={this.handleChange}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="form__publishDiv">
            <button className="form__publish-btn" type="submit" value="submit">
              {" "}
              PUBLISH
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
