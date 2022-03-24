import React from "react";

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
        <div className="content">
          <data></data>
        </div>
      </div>
    </div>
  );
}
