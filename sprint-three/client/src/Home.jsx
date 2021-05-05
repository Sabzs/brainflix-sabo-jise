import React, { Component } from "react";
import HeroVideo from "./components/HeroVideo";
import Header from "./components/header";
import VideoList from "./components/VideoList";
import HeroVideoInfo from "./components/HeroVideoInfo";
import Comments from "./components/Comments";
import axios from "axios";
import "./style/app.css";

const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://brainflix-sabzs.herokuapp.com"
    : "http://localhost:8080";

class Home extends Component {
  state = {
    sideVideos: [],
    mainVideo: {},
    videoId: "",
  };

  componentDidMount() {
    axios.get(`${API_URL}/videos/sidevideos`).then(async (response) => {
      this.setState({
        sideVideos: response.data,
      });
      const homeObject = await axios.get(`${API_URL}/videos/sidevideos`);
      console.log(homeObject.data);
      this.setState({ mainVideo: homeObject.data[0] });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.match.params.id !== undefined &&
      this.props.match.params.id !== prevState.mainVideo.id
    ) {
      let id = this.props.match.params.id;
      axios.get(`${API_URL}/videos/mainvideo/${id}`).then((response) => {
        this.setState({
          mainVideo: response.data,
          videoId: response.data.id,
        });
      });
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div>
          <HeroVideo heroVideo={this.state.mainVideo} />
          <div className="main-container">
            <div className="formDiv">
              <HeroVideoInfo mainContent={this.state.mainVideo} />
              <Comments comments={this.state.mainVideo} />
            </div>
            <VideoList
              nextVideo={this.state.sideVideos}
              mainVideo={this.state.mainVideo}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
