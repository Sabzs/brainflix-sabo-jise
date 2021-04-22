import React from "react";
import playIcon from "../assets/icons/svg/icon-play.svg";
import Scrubber from "../assets/icons/svg/icon-scrubber-control.svg";
import fullscreenIcon from "../assets/icons/svg/icon-fullscreen.svg";
import volumeIcon from "../assets/icons/svg/icon-volume.svg";

function NextVideo(props) {
  return (
    <section className="heroVideo">
      <div className="heroVideo__hero-video-wrapper">
        <img
          src={props.heroVideo.image && props.heroVideo.image}
          alt="video thumb"
        ></img>
      </div>

      <div className="heroVideo__controls">
        <div className="heroVideo__play">
          <img className="heroVideo__icon" src={playIcon} alt="Play Icons" />
        </div>

        <div className="heroVideo__progress-bar">
          <div className="heroVideo__progress-timeline">
            <img
              className="heroVideo__progress-scrubber"
              src={Scrubber}
              alt="scrubber control"
            />
          </div>
          <div className="heroVideo__progress-text">0:00 / 0:47</div>
        </div>

        <div className="heroVideo__icon-group">
          <img
            className="heroVideo__icon"
            src={fullscreenIcon}
            alt="Expand Icon"
          />
          <img className="heroVideo__icon" src={volumeIcon} alt="Volume Icon" />
        </div>
      </div>
    </section>
  );
}

export default NextVideo;
