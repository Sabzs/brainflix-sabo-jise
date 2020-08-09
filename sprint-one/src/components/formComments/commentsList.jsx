import React from "react";
import FormItems from "./commentsItems";

function Comments(props) {
  // commentsInfor.sort = (a, b) => {
  //         return b.timestamp - a.timestamp;
  //     })
  return (
    <div>
      {props.commentsInfo.map((comment) => (
        <FormItems
          key={comment.id}
          id={comment.id}
          name={comment.name}
          description={comment.description}
          timestamp={comment.timestamp}
        />
      ))}
    </div>
  );
}

export default Comments;
