import React from "react";

export function Message(props) {
  return (
    <div className="message {props.is_color}">
      <div className="message-body">
        <span className="has-text-weight-bold">{props.column}:</span>
        {props.syntax}
        <br />
        <span className="has-text-weight-bold">{props.column}:</span>
        {props.syntax}
        <br />
        <span className="has-text-weight-bold">{props.column}:</span>
        {props.syntax}
        <br />
      </div>
    </div>
  );
}
