import React from "react";

export function Muuri(props) {
  return (
    <div className="muuri_card_wrapper" style="position: absolute;">
      <div className="muuri_card_content" style="position: relative;">
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
