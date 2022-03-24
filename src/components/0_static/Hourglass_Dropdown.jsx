import React from "react";
import { Icon_Focus } from "./Icon_Focus";

import { Icon_Delete } from "./Icon_Delete";

import { Icon_Edit } from "./Icon_Edit";

import { Radio_Edit_Diff } from "./Radio_Edit_Diff";

import { Radio_Edit_Imp } from "./Radio_Edit_Imp";

import { Radio_Edit_Use } from "./Radio_Edit_Use";

export function Hourglass_Dropdown(props) {
  return (
    <div className="dropdown is-hoverable DROPDOWN_DIRECTION">
      <div className="dropdown-trigger">
        {" "}
        <button
          className="pb-5 button is-focused is-hidden-mobile"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
        >
          {" "}
          <i className="icon icon-showDropdown" aria-hidden="true"></i>
        </button>{" "}
      </div>
      <div className="dropdown-menu" role="menu">
        <div className="dropdown-content py-0">
          <div className="list has-overflow-ellipsis" style="width: 340px">
            {" "}
            <a className="list-item has-text-centered">
              <div className="list-item-content">
                <div className="list-item-title ">
                  <Icon_Focus />
                  <Icon_Delete />
                  <Icon_Edit />
                </div>
              </div>
            </a>{" "}
            <a className="list-item has-text-centered">
              <div className="list-item-content">
                <div className="list-item-title">
                  <Radio_Edit_Diff />
                </div>
              </div>
            </a>
            <a className="list-item has-text-centered">
              <div className="list-item-content">
                <div className="list-item-title">
                  <Radio_Edit_Imp />
                </div>
              </div>
            </a>
            <a className="list-item has-text-centered">
              <div className="list-item-content">
                <div className="list-item-title mb-2">
                  <Radio_Edit_Use />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
