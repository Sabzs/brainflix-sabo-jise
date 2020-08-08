import React, { Component } from "react";

export default class Aside extends Component {
  render() {
    return (
      <div className="categories">
        <h4>Categories</h4>
        <ul className="categories__list">
          <li>
            <a href="./">Category 1</a>
          </li>
          <li>
            <a href="./">Category 2</a>
          </li>
          <li>
            <a href="./">Category 3</a>
          </li>
          <li>
            <a href="./">Category 4</a>
          </li>
          <li>
            <a href="./">Category 5</a>
          </li>
          <li>
            <a href="./">Category 6</a>
          </li>
        </ul>
      </div>
    );
  }
}
