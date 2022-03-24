import React from "react";

export function KanbanColumnData(props) {
  return (
    <div className="muuri_section_wrapper " style="width: calc(100%/3);">
      <div className="muuri_section_container">
        <div className="header_wrapper">
          <i className="icon {props.icon_name}"></i>
          <p>{props.label_text}</p>
        </div>
        <div className="content_master_wrapper">
          <div className="content_wrapper">
            <data></data>
          </div>
        </div>
      </div>
    </div>
  );
}
