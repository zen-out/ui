import React from "react";

export function ProgressCard(props) {
  return (
    <div className="tile">
      <div className="box">
        <div className="level">
          <div className="level-left-item">
            <p className="title is-2 has-text-weight-bold">
              {props.percentage}
            </p>
          </div>
          <div className="level-right-item">
            <p className="subtitle is-6 has-text-weight-light">{props.end}</p>
          </div>
        </div>
        <div className="level">
          <div className="level-left-item">
            <p className="subtitle is-6">{props.table_name}</p>
          </div>
        </div>
        <div className="level">
          <div className="level-item">
            {/* Start Tag */}
            <div className="tag is-rounded is-light">
              <span className="has-text-weight-bold">created</span>&nbsp;
              <span className="has-text-weight-normal">{props.start}</span>
            </div>
            {/* Start Tag */}
            {/* Deadline Tag */}
            <div className="tag is-rounded is-link is-light">
              <span className="has-text-weight-bold">end</span>&nbsp;
              <span className="has-text-weight-normal">{props.end}</span>
            </div>
            {/* Deadline */}
          </div>
        </div>
      </div>
    </div>
  );
}
