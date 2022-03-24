import React from "react";

export function Level_Progress(props) {
  return (
    <div className="level-item has-text-centered hvr-bob">
      <div>
        <p className="heading">completed</p>
        <i className="icon icon-send hvr-icon"></i>
        <p className="heading">
          {/* Handlebars function to render the length of the specific number of tasks done */}
          {props.status}/{props.status}
        </p>
      </div>
    </div>
  );
}
