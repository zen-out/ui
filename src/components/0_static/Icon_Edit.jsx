import React from "react";

export function Icon_Edit() {
  return (
    <span className="has-text-success is-clickable icon">
      {" "}
      <i
        className="icon icon-edit"
        onclick="openEditModal('TABLE_NAME', 'TABLE_ID')"
      ></i>{" "}
    </span>
  );
}
