import React from "react";

function CommentsInfo({ id, name, description, timestamp }) {
  const formattedTime = new Date(timestamp).toLocaleDateString();

  return (
    <div id={id}>
      <div className="circleDiv">
        <div className="greyCircle"></div>
      </div>
      <div className="userComments">
        <div className="nameDate">
          <p className="userName">{name}</p>
          <p className="userTime">{formattedTime}</p>
        </div>
        <div className="userText">{description}</div>
      </div>
    </div>
  );
}

export default CommentsInfo;
