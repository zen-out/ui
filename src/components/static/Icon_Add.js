import React from "react";

export function Icon_Add() {
  return (
    <span className="has-text-link is-clickable is-inverted icon">
      {" "}
      <i
        className="icon icon-add"
        onclick="openModal('TABLE_NAME' ,'TABLE_ID' )"
      >
        {" "}
      </i>
    </span>
  );
}
