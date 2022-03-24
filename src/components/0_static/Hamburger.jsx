import React from "react";

export function Hamburger(props) {
  return (
    <nav className="hamb">
      <input
        type="checkbox"
        className="hamb-open"
        name="hamb-open"
        id="hamb-open"
      />
      <label className="hamb-open-button button is-outlined" for="hamb-open">
        <span className="hamb-lines hamb-line-1"></span>
        <span className="hamb-lines hamb-line-2"></span>
        <span className="hamb-lines hamb-line-3"></span>
      </label>
      <span
        onclick="axiosEditOne('TABLE_NAME', 'TABLE_ID', 'importance', 'high')"
        className=" hamb-item button is-primary
  is-outlined"
      >
        <i className="icon icon-highImp"></i>
      </span>
      <span
        onclick="axiosDelete('TABLE_NAME', 'TABLE_ID')"
        className="hamb-item button is-info is-outlined"
      >
        <i className="icon icon-delete"></i>
      </span>
      <span
        onclick="openEditModal('TABLE_NAME', 'TABLE_ID')"
        className="hamb-item button is-warning is-outlined"
      >
        <i className="icon icon-edit"></i>
      </span>
      <span
        onclick="openModal('TABLE_NAME')"
        className="hamb-item button is-link is-outlined"
      >
        <i className="icon icon-add"></i>
      </span>
      <span
        onclick="axiosEditOne('TABLE_NAME', 'TABLE_ID', 'status', 'done')"
        className="hamb-item button is-warning is-outlined"
      >
        <i className="fas fa-check-circle"></i>
      </span>
      <span
        onclick="openFocusModal('TABLE_NAME', 'TABLE_ID')"
        className="hamb-item button is-danger is-outlined"
      >
        <i className="icon icon-doing"></i>
      </span>
    </nav>
  );
}
