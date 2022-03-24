import React from "react";
import { Hourglass_Tags } from "../0_static";
import { Checkbox_Status_Done } from "../0_static";
import { Hourglass_Dropdown } from "../0_static";

export function ChecklistCard(props) {
  return (
    <div className="list-item is-flex flex-direction-row flex-wrap-nowrap has-visible-pointer-controls">
      <div className="list-item-image pl-3">
        <Checkbox_Status_Done />
      </div>
      <div className="list-item-content">
        <div className="list-item-title">{props.table_name}</div>
        <div className="list-item-description">
          <span className="has-text-weight-bold">{props.column}:</span>
          {props.syntax}
          <br />
          <span className="has-text-weight-bold">{props.column}:</span>
          {props.syntax}
          <br />
          <br />
          <Hourglass_Tags />
        </div>
      </div>
      <div className="list-item-controls">
        <div className="buttons">
          <Hourglass_Dropdown />
        </div>
      </div>
    </div>
  );
}
