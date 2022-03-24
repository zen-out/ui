import React from "react";

export function TimelineItem(props) {
  let icon = `icon ${props.icon_name}`;
  return (
    <div className="timeline-item is-link">
      <div className="timeline-marker is-link is-icon">
        <i className={icon}></i>
      </div>
      <div className="timeline-content">
        <p className="heading">{props.created}</p>
        <p>{props.status}</p>
      </div>
    </div>
  );
}
