import React from "react";

export function Metis(props) {
  return (
    <li>
      <a>{props.column}</a>
      <ul className="animate__animated animate__shake">
        <li>
          <a> {props.syntax}</a>
        </li>
        <li>
          <a>
            <span
              className="is-flex is-justify-content-space-between is-flex-direction-row is-flex-wrap-nowrap "
              style="width: 100%; padding-right: 3rem;"
            >
              <i className="icon icon-add"></i>

              <i className="icon icon-edit"></i>
              <i className="icon icon-delete"></i>
              <i className="icon icon-seconds"></i>
            </span>
          </a>
        </li>
      </ul>
    </li>
  );
}
