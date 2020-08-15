// import React from "react";
import React, { Component } from "react";
import Images from "../assets/images/Mohan-muruge.jpg";

// function FormInputs({ handleSubmitMessage }) {
//   return (
//     <form className="form" onSubmit={handleSubmitMessage}>
//       <h3 className="form__threeComments">3 Comments</h3>

//       <div className="form__mohead-inputDiv">
//         <div className="form__mohead">
//           <img
//             className="form__mohead-img"
//             src={Images}
//             alt="Muhan Muruge Icon"
//           />
//         </div>

//         <div className="form__textarea-btnDiv">
//           <div className="form__conver-textarea">
//             <div className="form__lable-inputDiv">
//               <label className="form__label" htmlFor="name">
//                 JOIN THE CONVERSATION
//               </label>
//               <input
//                 className="form__input"
//                 type="text"
//                 name="name"
//                 placeholder="name"
//               />
//             </div>
//             <div className="form__textareaDiv">
//               <textarea
//                 className="form__textarea"
//                 name="message"
//                 cols="30"
//                 rows="5"
//                 placeholder="message"
//               ></textarea>
//             </div>
//           </div>
//           <div className="form__btnDiv">
//             <button className="form__btn" type="submit">
//               {" "}
//               COMMENT
//             </button>
//           </div>
//         </div>
//       </div>
//     </form>
//   );
// }
// export default FormInputs;

//==============================================================//
//==============================================================//

class FormInputs extends Component {
  render() {
    let timeStamp = this.props.comments.timestamp;
    var toDate = new Date(timeStamp).getDate();
    var toMonth = new Date(timeStamp).getMonth() + 1;
    var toYear = new Date(timeStamp).getFullYear();
    var originalDate = toMonth + "/" + toDate + "/" + toYear;

    const newComments =
      this.props.comments.comments &&
      this.props.comments.comments.map(function (comment, index) {
        return (
          <div className="comments__input-div" key={index}>
            <img src={Images} alt="icon" className="comments__input-div-icon" />
            <div className="comments__input-div-info">
              <div className="comments__flex">
                <h3 className="comments__input-div-heading">{comment.name}</h3>
                <h4 className="comments__input-div-date">{originalDate}</h4>
              </div>
              <p className="comments__input-div-paragraph">{comment.comment}</p>
            </div>
          </div>
        );
      });

    return (
      <div className="comments">
        <form action="" className="comments__form">
          <h2 className="comments__heading">3 COMMENTS</h2>
          <h4 className="comments__input-heading">JOIN THE CONVERSATION</h4>
          <div className="comments__nav">
            <img
              src={Images}
              alt="comments  circle"
              className="comments__input-avatar"
            />
            <textarea
              name="comments-text-area"
              cols="40"
              rows="5"
              className="comments__input-text"
            ></textarea>
            <button type="comments__input-submit">COMMENT</button>
          </div>
        </form>
        {newComments}
      </div>
    );
  }
}
export default FormInputs;
