import React from "react";
import { Link } from "react-router-dom";

// function VideoItem(props) {
//   return (
//     <div className="video-list__videolist">
//       <div className="video-list__list">
//         <div className="video-list__imgDiv">
//           <img
//             className="video-list__img"
//             src={props.videoData.image}
//             alt="Images"
//           />
//         </div>
//         <div className="video-list__video-info">
//           <p className="video-list__title">{props.videoData.title}</p>
//           <p className="video-list__channel">{props.videoData.channel}</p>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default VideoItem;

//=========================================================//
//refactor naming convention as above//
//==========================================================//

function NextVideo({ nextVideo, mainVideo }) {
  const nextVid =
    nextVideo &&
    nextVideo.map(function (video) {
      return (
        <div className="next__video-main-div" key={video.id}>
          {video.id !== mainVideo ? (
            <Link to={`/video/${video.id}`} className="next__video">
              <div className="next__list">
                <div className="next__imgDiv">
                  <img
                    className="next__video-img"
                    src={video.image}
                    alt="Images"
                  />
                </div>
                <div className="video-list__video-info">
                  <p className="video-list__title">{video.title}</p>
                  <p className="video-list__channel">{video.channel}</p>
                </div>
              </div>
            </Link>
          ) : (
            <div className="hide" key={video.id}></div>
          )}
        </div>
      );
    });
  return <div>{nextVid}</div>;
}

export default NextVideo;
