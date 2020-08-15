// import React from "react";
// import FormItems from "./commentsItems";

// function Comments(props) {
//   console.log("Comments props", props.commentsInfo);

//   return (
//     <div>
//       {props.commentsInfo.map((comment) => (
//         <FormItems
//           key={comment.id}
//           id={comment.id}
//           name={comment.name}
//           description={comment.description}
//           timestamp={comment.timestamp}
//         />
//       ))}
//     </div>
//   );
// }

// export default Comments;

//refactoring from the original code above //

// function Comments(props) {
//   console.log("Comments props", props.commentsInfo);

//   return (
//     <div>
//       {props.commentsInfo.map((comment) => (
//         <FormItems
//           key={comment.id}
//           id={comment.id}
//           name={comment.name}
//           comment={comment.comment}
//           timestamp={comment.timestamp}
//         />
//       ))}
//     </div>
//   );

// }

// export default Comments;
