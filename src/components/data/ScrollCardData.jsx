import React from "react";
import { ChecklistCard } from "../article/ChecklistCard";
export function ScrollCardData(props) {
  return (
    <div className="card scroll-card">
      <header className="card-header">
        <p className="card-header-title">{props.table_name}</p>
        <a className="card-header-icon" aria-label="more options">
          <span className="icon">
            <i className="fa fa-angle-down" aria-hidden="true"></i>
          </span>
        </a>
      </header>
      <div className="card-table">
        <div className="list has-overflow-ellipsis has-visible-pointer-controls has-hoverable-list-items">
          {/* <ChecklistCard /> */}
          <ChecklistCard
            status={props.status}
            importance={props.importance}
            usefulness={props.usefulness}
            difficulty={props.difficulty}
            created={props.created}
            public={props.public}
            table_name={props.table_name}
            column={props.column}
            syntax={props.syntax}
          />
        </div>
        <div className="content">
          {/* <ChecklistCard /> */}
          {/* <ChecklistCard /> */}
        </div>
      </div>
    </div>
  );
}
