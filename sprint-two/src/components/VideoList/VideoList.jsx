import React from "react";
import VideoItem from "./VideoItem";

function VideoList(props) {
  console.log("VideoList props", props.videos);

  return (
    <div className="video-list">
      {props.videos.map((video) => (
        <VideoItem key={video.id} videoData={video} />
      ))}
    </div>
  );
}

export default VideoList;
