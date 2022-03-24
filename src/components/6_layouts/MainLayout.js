import React from "react";

export function MainLayout(props) {
  return (
    <div className="row" style="min-height: 100vh;">
      <div className="col one">
        <nav></nav>
      </div>
      <div className="cols eleven">
        <header></header>
        <section className="hero is-default is-bold">
          <div className="hero-head"></div>
          <div className="hero-body">
            <section></section>
          </div>

          <div className="hero-foot">
            <aside></aside>
          </div>
        </section>
      </div>
    </div>
  );
}
