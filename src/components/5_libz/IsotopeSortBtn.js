import React from "react";

export function IsotopeSortBtn(props) {
  return (
    <span className="vertical">
      <button
        data-sort-value="{props.filter}"
        className="button shadow mb-1 is-inverted {props.is_color} effect-2"
      >
        <i className="icon {props.icon_name}"></i>
      </button>
      <span className="help">{props.label_text}</span>
    </span>
  );
}
