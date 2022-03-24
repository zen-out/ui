import React from "react";

export function LevelNotify(props) {
  return (
    <div className="level-item has-text-centered hvr-bob">
      <div>
        <p className="heading">text</p>
        <i className="icon {props.icon_name} hvr-icon"></i>
      </div>
      <p className="heading">
        <article></article>
      </p>
    </div>
  );
}
