import React from "react";

export function Tag_Start(props) {
  return (
    <div className="tag is-rounded is-light">
      <span className="has-text-weight-bold">created</span>&nbsp;{" "}
      <span className="has-text-weight-normal">{props.created}</span>
    </div>
  );
}
