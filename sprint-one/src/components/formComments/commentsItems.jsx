import React from "react";

class CommentsInfo extends React.Component {
  render() {
    return (
      <div>
        <div className="circleDiv">
          <div className="greyCircle"></div>
        </div>
        <div className="userComments">
          <div className="nameDate">
            <p className="userName">{this.props.formData.name}</p>
            <p className="userTime">{this.props.formData.timestamp}</p>
          </div>
          <div className="userText">{this.props.formData.description}</div>
        </div>
      </div>
    );
  }
}

export default CommentsInfo;
