import React from "react";

export function Hourglass_Tags(props) {
  return (
    <div>
      <div className="tags">
        {" "}
        {props.status}{" "}
        <div className="tag is-rounded is-primary is-light">
          <span className="has-text-weight-bold">status</span>&nbsp;{" "}
          <span className="has-text-weight-normal">{props.status}</span>
        </div>
        {props.importance}{" "}
        <div className="tag is-rounded is-info is-light">
          <span className="has-text-weight-bold">importance</span>&nbsp;{" "}
          <span className="has-text-weight-normal">{props.importance}</span>
        </div>{" "}
        {props.usefulness}{" "}
        <div className="tag is-rounded is-success is-light">
          <span className="has-text-weight-bold">usefulness</span>&nbsp;
          <span className="has-text-weight-normal">{props.usefulness}</span>
        </div>{" "}
        {props.difficulty}{" "}
        <div className="tag is-rounded is-danger is-light">
          <span className="has-text-weight-bold">difficulty</span>&nbsp;
          <span className="has-text-weight-normal">{props.difficulty}</span>
        </div>{" "}
        {props.created}{" "}
        <div className="tag is-rounded is-light">
          <span className="has-text-weight-bold">created</span>&nbsp;{" "}
          <span className="has-text-weight-normal">{props.format_created}</span>
        </div>{" "}
        {props.public}{" "}
        <div className="tag is-rounded is-link is-light">
          <span className="has-text-weight-bold">is</span>&nbsp;
          <span className="has-text-weight-normal">{props.public}</span>{" "}
        </div>
      </div>
    </div>
  );
}
