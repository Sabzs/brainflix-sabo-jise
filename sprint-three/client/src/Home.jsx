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
    sidebarVideos: [],
    mainVideo: {},
    videoId: "",
  };

  componentDidMount() {
    axios
      .get(`https://project-2-api.herokuapp.com/videos/?api_key=${API_KEY}`)
      .then((response) => {
        console.log(response.data);
        this.setState({
          sidebarVideos: response.data,
          videoId: response.data.id,
        });

        axios
          .get(
            `https://project-2-api.herokuapp.com/videos/1af0jruup5gu/?api_key=${API_KEY}`
          )
          .then((response) => {
            console.log(response.data);
            this.setState({ mainVideo: response.data });
          });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(prevState);
    // console.log(this.props);
    if (
      this.props.match.params.id !== undefined &&
      this.props.match.params.id !== prevState.mainVideo.id
    ) {
      let id = this.props.match.params.id;
      axios
        .get(
          `https://project-2-api.herokuapp.com/videos/${id}?api_key=${API_KEY}`
        )
        .then((response) => {
          // console.log(response.data);
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
            <div className="videoItems">
              <div className="video-list__headerDiv">
                <h4 className="video-list__header">Next Video</h4>
              </div>
              <VideoList
                nextVideo={this.state.sidebarVideos}
                mainVideo={this.state.mainVideo}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
