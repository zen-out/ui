import React from "react";
import { Hourglass_Tags } from "../0_static";
import { Checkbox_Status_Done } from "../0_static";

export function SocialCard(props) {
  return (
    <div className="card">
      <div className="header">
        <div className="media">
          <div className="media-content">
            <div className="media-left">
              <Checkbox_Status_Done />
            </div>
            <p className="title is-4">{props.table_name}</p>
            <p className="subtitle is-6">{props.end}</p>
          </div>
        </div>
      </div>
      <div className="card-content">
        <p>
          <strong>{props.public}</strong>
        </p>
        <article></article>
        <br />
        <Hourglass_Tags />
        <time datetime="{props.created}">{props.created}</time>
      </div>
    </div>
  );
}
