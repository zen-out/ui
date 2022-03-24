import React from "react";
import { Icon_Add, Icon_Edit, Icon_Delete, Icon_Focus } from "../static";

export function MetisData(props) {
  return (
    <span
      className="sidebar-nav is-danger is-inverted"
      data-tooltip="problem statement"
    >
      <ul className="metismenu is-inverted">
        <li>
          <a aria-expanded="false">
            <span
              className="is-flex is-align-items-center is-flex-direction-row is-flex-wrap-nowrap pb-3"
              style="width: 100%"
            >
              <span style="position: absolute; left: 5%; bottom: 15%; ">
                {props.title}
              </span>
              <span
                className="is-flex is-flex-direction-row is-flex-wrap-nowrap pb-3 is-justify-content-space-between pos-abs is-align-items-center"
                style="width: 30%; top: 2%; right: 5%"
              >
                <Icon_Add />

                <Icon_Edit />

                <Icon_Delete />
                <Icon_Focus />
              </span>
            </span>
          </a>
          <ul aria-expanded=" false">
            <data></data>
          </ul>
        </li>
      </ul>
    </span>
  );
}
