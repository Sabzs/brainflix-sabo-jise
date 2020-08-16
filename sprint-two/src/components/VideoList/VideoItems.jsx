import React from "react";
import { Link } from "react-router-dom";

function VideoItem({ nextVideo, mainVideo }) {
  const nextVid =
    nextVideo &&
    nextVideo.map(function (video) {
      return (
        <div className="video-list__videolist" key={video.id}>
          {video.id !== mainVideo ? (
            <div className="video-list__list">
              <div className="video-list__imgDiv">
                <Link to={`/video/${video.id}`}>
                  <img
                    className="video-list__img"
                    src={video.image}
                    alt="Images"
                  />
                </Link>
              </div>
              <div className="video-list__video-info">
                <Link to={`/video/${video.id}`}>
                  <p className="video-list__title">{video.title}</p>
                  <p className="video-list__channel">{video.channel}</p>
                </Link>
              </div>
            </div>
          ) : (
            <div className="hide" key={video.id}></div>
          )}
        </div>
      );
    });
  return <div className="video-list">{nextVid}</div>;
}
export default VideoItem;
