import React, { Component } from "react";
// import CurrentVideo from "../assets/images/video-list-0.jpg";
// import playIcon from "../assets/icons/svg/icon-play.svg";
// import Scrubber from "../assets/icons/svg/icon-scrubber-control.svg";
// import fullscreenIcon from "../assets/icons/svg/icon-fullscreen.svg";
// import volumeIcon from "../assets/icons/svg/icon-volume.svg";

// export default class HeroVideo extends Component {
//   render() {
//     return (
//       <section className="currentVideo">
//         <img
//           className="currentVideo__video"
//           src={CurrentVideo}
//           alt="Hero Video"
//         />

//         <div className="currentVideo__controls">
//           <div className="currentVideo__play">
//             <img
//               className="currentVideo__icon"
//               src={playIcon}
//               alt="Play Icons"
//             />
//           </div>

//           <div className="currentVideo__progress-bar">
//             <div className="currentVideo__progress-timeline">
//               <img
//                 className="currentVideo__progress-scrubber"
//                 src={Scrubber}
//                 alt="scrubber control"
//               />
//             </div>
//             <div className="currentVideo__progress-text">0:00 / 0:47</div>
//           </div>

//           <div className="currentVideo__icon-group">
//             <img
//               className="currentVideo__icon"
//               src={fullscreenIcon}
//               alt="Expand Icon"
//             />
//             <img
//               className="currentVideo__icon"
//               src={volumeIcon}
//               alt="Volume Icon"
//             />
//           </div>
//         </div>
//       </section>
//     );
//   }
// }

//================================================================//
//================================================================//
class HeroVideo extends Component {
  render() {
    return (
      <div>
        <video
          className="heroImg"
          poster={this.props.heroVideo.image && this.props.heroVideo.image}
          controls
        ></video>
      </div>
    );
  }
}

export default HeroVideo;
