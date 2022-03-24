import React from "react";
import { Tag_End } from "../0_static";
export function InfoCardData(props) {
  return (
    <div className="box">
      <div className="level">
        <div className="level-left-item">
          <div className="has-text-left">
            <p className="title is-4"> {props.table_name} </p>
          </div>
        </div>
        <div className="level-right-item has-text-right">
          <i className="icon icon-focus"></i>
        </div>
      </div>
      <div className="level">
        <div className="level-left-item has-text-left">
          <p className="subtitle is-5 has-text-weight-light">started</p>
          <p className="title is-5 has-text-weight-bold">{props.created}</p>
        </div>
        <div className="level-right-item has-text-right">
          <p className="subtitle is-5 has-text-weight-light">deadline</p>
          <p className="title is-5 has-text-weight-bold">{props.end}</p>
        </div>
      </div>
      <div className="content">
        <p className="is-size-6 has-text-weight-light scroll-card">
          <data></data>
        </p>
        <Tag_End end="March 27 2022" />
      </div>
    </div>
  );
}
