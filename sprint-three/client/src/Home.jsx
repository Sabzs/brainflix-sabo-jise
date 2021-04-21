import React, { Component } from "react";
import HeroVideo from "./components/HeroVideo";
import FormInputs from "./components/formInputs";
import Header from "./components/header";
import VideoList from "./components/VideoList";
import HeroVideoInfo from "./components/HeroVideoInfo";
import axios from "axios";
import "./style/app.css";
import { API_KEY } from "./env/env_variables";

class Home extends Component {
  state = {
    sideVideos: [],
    mainVideo: {},
    videoId: "",
  };

  componentDidMount() {
    axios
      .get("http://localhost:8080/videos/sidevideos")
      .then(async (response) => {
        this.setState({
          sideVideos: response.data,
        });
        const homeObject = await axios.get(
          // "http://localhost:8080/videos/sidevideos/1af0jruup5gu"
          `https://project-2-api.herokuapp.com/videos/1af0jruup5gu/?api_key=${API_KEY}`
        );
        console.log(homeObject.data);
        this.setState({ mainVideo: homeObject.data });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.match.params.id !== undefined &&
      this.props.match.params.id !== prevState.mainVideo.id
    ) {
      let id = this.props.match.params.id;
      axios
        .get(`http://localhost:8080/videos/mainvideo/${id}`)
        .then((response) => {
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
              <FormInputs comments={this.state.mainVideo} />
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
