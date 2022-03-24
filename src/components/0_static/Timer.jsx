import React from "react";

export default function Timer(props) {
  return (
    <div className="tag is-rounded is-info is-light">
      <span className="has-text-weight-bold">{props.seconds}</span>&nbsp;
      <span className="has-text-weight-normal">
        <i className="icon icon-pause"></i>
      </span>
    </div>
  );
}
