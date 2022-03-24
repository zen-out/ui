import React from "react";

export function DropdownArticle(props) {
  return (
    <div className="dropdown shadow is-hoverable shadow-rounded">
      <div className="dropdown-trigger">
        <button className="button" aria-haspopup="true">
          <span>{props.table_name}</span>
          <span className="icon is-small">
            <i className="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div className="dropdown-menu" role="menu">
        <div className="dropdown-content">
          {/* Each */}
          <hr className="dropdown-divider" />
          <a className="dropdown-item">
            <span className="has-text-weight-bold">{props.column}:</span>
            {props.syntax}
          </a>
          {/* Each */}
          {/* Each */}
          <hr className="dropdown-divider" />
          <a className="dropdown-item">
            <span className="has-text-weight-bold">{props.column}:</span>
            {props.syntax}
          </a>
          {/* Each */}
        </div>
      </div>
    </div>
  );
}
