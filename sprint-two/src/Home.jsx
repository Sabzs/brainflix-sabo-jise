// import React, { Component } from "react";
// import { v4 as uuidv4 } from "uuid";
// import Header from "./components/header";
// import HeroVideo from "./components/HeroVideo";
// import MainContent from "./components/MainContent";
// import Comments from "./components/formComments/commentsList";
// import VideoList from "./components/VideoList/VideoList";
// import "./style/app.css";
// import FormInputs from "./components/formInputs";
// import UploadPage from "./components/Routes/UploadPage";

//=================================================================================================//
//=================================================================================================//
import React, { Component } from "react";
import HeroVideo from "./components/HeroVideo";
import FormInputs from "./components/formInputs";
import Header from "./components/header";
// import { v4 as uuidv4 } from "uuid";
// import UploadPage from "./components/Routes/UploadPage";
// import VideoList from "./components/VideoList";
import MainContent from "./components/MainContent";
import axios from "axios";
import VideoItem from "./components/VideoList/VideoItems";
import "./style/app.css";

//==============================//
class Home extends Component {
  state = {
    sidebarVideos: [],
    mainVideo: {},
    videoId: "",
  };

  componentDidMount() {
    axios
      .get(
        `https://project-2-api.herokuapp.com/videos/?api_key=618161be-ffd6-4ab6-98bd-78e453c5f0e9`
      )
      .then((response) => {
        console.log(response.data);
        this.setState({
          sidebarVideos: response.data,
          videoId: response.data.id,
        });

        axios
          .get(
            `https://project-2-api.herokuapp.com/videos/1af0jruup5gu/?api_key=618161be-ffd6-4ab6-98bd-78e453c5f0e9`
          )
          .then((response) => {
            // console.log(response.data);
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
          `https://project-2-api.herokuapp.com/videos/${id}?api_key=618161be-ffd6-4ab6-98bd-78e453c5f0e9`
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
              <MainContent mainContent={this.state.mainVideo} />
              <FormInputs comments={this.state.mainVideo} />
            </div>
            <div className="videoItems">
              <div className="video-list__headerDiv">
                <h4 className="video-list__header">Next Video</h4>
              </div>
              <VideoItem
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

//=========================================//

// render() {
//   return (
//     <div className="App">
//       <Header>
//         <div>
//           <UploadPage />
//         </div>
//       </Header>
//       <HeroVideo />
//       <main>
//         <div className="formDiv">
//           <MainContent />
//           <div>
//             <FormInputs handleSubmitMessage={this.handleSubmitMessage} />
//             <Comments commentsInfo={this.state.commentsData} />
//           </div>
//         </div>
//         <div>
//           <div className="video-list__headerDiv">
//             <h4 className="video-list__header">Next Video</h4>
//           </div>
//           <VideoList videos={sidebarVideos} />
//         </div>
//       </main>
//     </div>
//   );
// }
