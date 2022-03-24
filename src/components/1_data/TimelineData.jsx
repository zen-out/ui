import React from "react";

export function TimelineData(props) {
  return (
    <div className="timeline is-centered">
      <header className="timeline-header">
        <span className="tag is-medium is-success">Start</span>
      </header>
      <data></data>
      <header className="timeline-header">
        <span className="tag is-medium is-success">End</span>
      </header>
    </div>
  );
}
