import React from "react";
import FormItems from "./commentsItems";

function Comments(props) {
  console.log("Form props", props.commentsInfo);

  return (
    <div className="form-items">
      {props.commentsInfo.map((comment) => (
        <FormItems key={comment.id} formData={comment} />
      ))}
    </div>
  );
}

export default Comments;
