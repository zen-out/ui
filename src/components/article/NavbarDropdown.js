import React from "react";

export function NavbarDropdown(props) {
  return (
    <div className="navbar-dropdown">
      <a className="navbar-item" href="{props.href}">
        <span className="has-text-weight-bold">{props.column}:</span>
        {props.syntax}
        <br />
        <span className="has-text-weight-bold">{props.column}:</span>
        {props.syntax}
        <br />
        <span className="has-text-weight-bold">{props.column}:</span>
        {props.syntax}
        <br />
      </a>
    </div>
  );
}
