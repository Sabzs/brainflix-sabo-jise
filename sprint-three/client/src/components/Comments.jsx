import React from "react";
import CommentForm from "./CommentForm";

function Comments(props) {
  let timeStamp = props.comments.timestamp;
  var toDate = new Date(timeStamp).getDate();
  var toMonth = new Date(timeStamp).getMonth() + 1;
  var toYear = new Date(timeStamp).getFullYear();
  var originalDate = toMonth + "/" + toDate + "/" + toYear;

  const newComments =
    props.comments.comments &&
    props.comments.comments.map(function (comment, index) {
      return (
        <div className="comments" key={index}>
          <div className="comments__circleDiv">
            <div className="comments__greyCircle"></div>
          </div>
          <div className="comments__userComments">
            <div className="comments__nameDate">
              <p className="comments__userName">{comment.name}</p>
              <p className="comments__userDate">{originalDate}</p>
            </div>
            <div className="comments__userText">{comment.comment}</div>
          </div>
        </div>
      );
    });

  return (
    <>
      <CommentForm />
      {newComments}
    </>
  );
}

export default Comments;
