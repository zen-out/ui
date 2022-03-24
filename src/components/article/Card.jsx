import React from "react";
import { Checkbox_Status_Done } from "../static";
import { Icon_Add } from "../static";
import { Icon_Edit } from "../static";
import { New_Hourglass_Radio } from "../static";
import { Icon_Delete } from "../static";
export function Card(props) {
  return (
    <div className="card p-4">
      <div className="card-content">
        <p className="title is-4">
          <Checkbox_Status_Done />
          {props.table_name}
        </p>
        <div className="level is-mobile">
          <div className="level-left">
            <div className="level-item has-text-centered">
              <Icon_Add />
            </div>
            <div className="level-item has-text-centered">
              <Icon_Edit />
            </div>
            <div className="level-item has-text-centered">
              <Icon_Delete />
            </div>
          </div>
        </div>
        <div className="content">
          <span className="has-text-weight-bold">{props.column}:</span>
          {props.syntax}
          <br />
          <span className="has-text-weight-bold">{props.column}:</span>
          {props.syntax}
          <br />
          <span className="has-text-weight-bold">{props.column}:</span>
          {props.syntax}
          <br />
          <New_Hourglass_Radio /> <br />
        </div>
      </div>
    </div>
  );
}
