import React from "react";

export function Header(props) {
  return (
    <nav class="navbar">
      <div class="navbar-brand">{props.brand}</div>
      <div id="navbarMenu" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">{props.title}</a>
          <div class="navbar-item has-dropdown is-hoverable">
            <article></article>
          </div>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <button class="button is-rounded is-primary">Add task</button>
          </div>
          <div class="navbar-item">
            <button class="button is-rounded">Add problem</button>
          </div>
          <div class="divider is-vertical"></div>
          <div class="navbar-item">
            <i class="icon icon-public"></i>
          </div>
          <div class="navbar-item">
            <nav></nav>
          </div>
        </div>
      </div>
    </nav>
  );
}
