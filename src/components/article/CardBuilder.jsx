import React from "react";
import { Hourglass_Tags, Checkbox_Status_Done } from "../static";

export function CardBuilder(props) {
  return (
    <div className="card is-success is-inverted">
      <div className="header">
        <div className="media">
          <div className="media-left p-3">
            <Checkbox_Status_Done />
          </div>
          <div className="media-content">
            <p className="title is-4">{props.table_name}</p>
            <p className="subtitle is-6">{props.end}</p>
          </div>
        </div>
      </div>
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src="https://source.unsplash.com/random/1280x960"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="level is-mobile">
          <div className="level-left">
            <div className="level-item has-text-centered">
              <a href="">
                <i className="icon icon-diff"></i>
              </a>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <a href="">
                  <i className="icon icon-diff"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="content">
          <p>
            <span className="has-text-weight-bold">{props.column}:</span>
            {props.syntax}
            <br />

            <span className="has-text-weight-bold">{props.column}:</span>
            {props.syntax}
            <br />
          </p>
          <Hourglass_Tags
            status={props.status}
            importance={props.importance}
            usefulness={props.usefulness}
            difficulty={props.difficulty}
            created={props.created}
            public={props.public}
          />
          <br />
          <time datetime="{props.created}">{props.created}</time>
        </div>
      </div>
      <div className="card-footer">IMPORTinput</div>
    </div>
  );
}
