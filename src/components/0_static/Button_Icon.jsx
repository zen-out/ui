import React from "react";

export default function Button_Icon(props) {
  let className = `button shadow mb-1 is-inverted {props.is_color} effect-2`;
  let icon = `icon {props.icon_name}`;
  return (
    <span className="vertical">
      {" "}
      <button className={className}>
        {" "}
        <i className={icon}></i>
      </button>
      <span className="help">{props.label_text}</span>
    </span>
  );
}
