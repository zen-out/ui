import React from "react";

export function Select2(props) {
  return (
    <div className="field">
      <p className="control has-icons-left">
        <span className="select">
          <select className="select2">
            <data></data>
          </select>
        </span>
        <span className="icon is-small is-left">
          <i className="icon {props.icon_name}"></i>
        </span>
      </p>
    </div>
  );
}
