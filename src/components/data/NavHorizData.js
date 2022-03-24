import React from "react";

export function NavHorizData(props) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">{props.title}</div>
      <div id="navbarMenu" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">Title</a>
          <div className="navbar-item has-dropdown is-hoverable">
            <article></article>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <button className="button is-rounded is-primary">Add task</button>
          </div>
          <div className="navbar-item">
            <button className="button is-rounded">Add problem</button>
          </div>
          <div className="divider is-vertical"></div>
          <div className="navbar-item">
            <i className="icon icon-public"></i>
          </div>
          <div className="navbar-item">
            <nav></nav>
          </div>
        </div>
      </div>
    </nav>
  );
}
