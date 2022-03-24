import React from "react";

export function IsotopeFilterBtn(props) {
  let value = props.filter;
  let className = `button shadow mb-1 is-inverted ${props.is_color} effect-2`;
  let icon = `icon ${props.icon_name}`;
  return (
    <span className="vertical">
      {" "}
      <button data-filter-value={value} className={className}>
        {" "}
        <i className={icon}></i>
      </button>
      <span className="help">{props.label_text}</span>
    </span>
  );
}
