import React from "react";

export function AuthLayout(props) {
  return (
    <section className="hero is-fullheight is-default is-bold">
      <div className="hero-head"></div>
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="columns is-vcentered">
            <div className="column is-5">
              <blockquote>{props.quote_text}</blockquote>
            </div>
            <div className="column is-6 is-offset-1">
              <div className="card">
                <div className="card-content">
                  <h1 className="title is-2">{props.title}</h1>
                  <h2 className="subtitle is-4">{props.subtitle}</h2>
                  <aside></aside>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-foot">
        <div className="container">
          <aside></aside>
        </div>
      </div>
    </section>
  );
}
