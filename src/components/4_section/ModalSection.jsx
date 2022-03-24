import React from "react";

export function ModalSection(props) {
  return (
    <div id="modal-card2" className="modal modal-fx-3dSlit">
      <div className="modal-background"></div>
      <div className="modal-content is-tiny">
        <div className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <img
                src="https://source.unsplash.com/hLyd1LukQ7E"
                alt="butterfly"
              />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img
                    src="http://www.radfaces.com/images/avatars/linda-barret.jpg"
                    alt="linda barret avatar"
                  />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">Jane Doe</p>
                <p className="subtitle is-6">@jane_doe</p>
              </div>
            </div>
            <div className="content">
              content
              <a>@bulmaio</a>.<a href="#">#css</a>
              <a href="#">#responsive</a>
              <br />
              <time datetime="2018-02-02">12:45 AM - 20 May 2018</time>
            </div>
          </div>
        </div>
      </div>
      <button className="modal-close is-large" aria-label="close"></button>
    </div>
  );
}
