import React, { Component } from "react";
import hero from "../assets/images/video-list-0.jpg";
import playIcon from "../assets/icons/svg/icon-play.svg";
import Scrubber from "../assets/icons/svg/icon-scrubber-control.svg";
import fullscreenIcon from "../assets/icons/svg/icon-fullscreen.svg";
import volumeIcon from "../assets/icons/svg/icon-volume.svg";

export default class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <img className="hero__video" src={hero} alt="Hero Video" />

        <div className="hero__controls">
          <div className="hero__play">
            <img className="hero__icon" src={playIcon} alt="Play Icons" />
          </div>

          <div className="hero__progress-bar">
            <div className="hero__progress-timeline">
              <img
                className="hero__progress-scrubber"
                src={Scrubber}
                alt="scrubber control"
              />
            </div>
            <div className="hero__progress-text">0:00 / 0:42</div>
          </div>

          <div className="hero__icon-group">
            <img
              className="hero__icon"
              src={fullscreenIcon}
              alt="Expand Icon"
            />
            <img className="hero__icon" src={volumeIcon} alt="Volume Icon" />
          </div>
        </div>
      </section>
    );
  }
}
