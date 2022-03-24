import React from "react";

export function ErrorLayout(props) {
  return (
    <section className="hero is-fullheight">
      <div className="hero-head"></div>
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="column is-6 is-offset-3">
            <h1 className="title">{props.title}</h1>
            <h2 className="subtitle">{props.subtitle}</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
