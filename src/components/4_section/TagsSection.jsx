import React from "react";

export function TagsSection(props) {
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-3">
          <nav></nav>
        </div>
        <div className="column is-9">
          <div className="content is-medium">
            <h3 className="title is-3">{props.title}</h3>
            <aside></aside>
            <h3 className="title is-3">{props.subtitle}</h3>
            <section></section>
          </div>
        </div>
      </div>
    </div>
  );
}
