import React from "react";
import { Hourglass_Tags } from "../static";
import {
  Card,
  CardBuilder,
  ChecklistCard,
  DropdownArticle,
  Isotope,
  Message,
  Metis,
  Muuri,
  NavbarDropdown,
  ProgressCard,
  Select,
  SocialCard,
  TimelineItem,
} from "../article";
function Tag_End(props) {
  return (
    <div className="tag is-rounded is-link is-light">
      <span className="has-text-weight-bold">end</span>&nbsp;
      <span className="has-text-weight-normal">{props.end}</span>
    </div>
  );
}

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
        <Hourglass_Tags
          status={props.status}
          importance={props.importance}
          usefulness={props.usefulness}
          difficulty={props.difficulty}
          created={props.created}
          public={props.public}
        />
        <p className="is-size-6 has-text-weight-light scroll-card">
          <data></data>
        </p>
        <Tag_End end="March 27 2022" />
      </div>
    </div>
  );
}
