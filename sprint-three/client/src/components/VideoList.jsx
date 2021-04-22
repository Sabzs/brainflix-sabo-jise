import React from "react";
import { Link } from "react-router-dom";

function VideoList({ nextVideo, mainVideo }) {
  return (
    <div className="video-list">
      <div className="video-list__headerDiv">
        <h4 className="video-list__header">Next Video</h4>
      </div>
      {nextVideo
        .filter((video) => {
          return mainVideo.id !== video.id;
        })
        .map((video) => {
          return (
            <Link
              className="video-list__list"
              key={video.id}
              to={`/video/${video.id}`}
            >
              <div className="video-list__imgDiv">
                <img src={video.image} alt="main video" />
              </div>
              <div className="video-list__video-info">
                <p className="video-list__title">{video.title}</p>
                <p className="video-list__channel">{video.channel}</p>
              </div>
            </Link>
          );
        })}
    </div>
  );
}

export default VideoList;
