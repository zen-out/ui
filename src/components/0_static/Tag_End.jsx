import React from "react";

export function Tag_End(props) {
  return (
    <div className="tag is-rounded is-link is-light">
      <span className="has-text-weight-bold">end</span>&nbsp;
      <span className="has-text-weight-normal">{props.end}</span>
    </div>
  );
}
