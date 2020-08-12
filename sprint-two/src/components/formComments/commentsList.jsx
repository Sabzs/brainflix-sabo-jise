import React from "react";
import FormItems from "./commentsItems";

function Comments(props) {
  console.log("Comments props", props.commentsInfo);

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
