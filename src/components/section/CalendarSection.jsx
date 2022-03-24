import React from "react";

export function CalendarSection(props) {
  return (
    <div className="columns">
      <aside className="column is-1 aside hero is-fullheight">
        <div>
          <div className="has-text-centered"></div>
          <div className="main">
            <i className="icon icon-diff"></i>

            <i className="icon icon-diff"></i>
          </div>
        </div>
      </aside>
      <div className="column is-5 messages hero is-full-height">
        <div className="inbox-messages">
          <div className="card">
            <div className="card-content">
              <div className="msg-header">
                <span className="msg-from">
                  <small>From: {props.msg.from}</small>
                </span>
                <span className="msg-timestamp"></span>
                <span className="msg-attachment">
                  <i className="fa fa-paperclip"></i>
                </span>
              </div>
              <div className="msg-subject">
                <span className="msg-subject">
                  <strong id="fake-subject-1">subject</strong>
                </span>
              </div>
              <div className="msg-snippet">
                <p id="fake-snippet-1">snippet{props.msg.snippet}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="column is-6 message hero is-fullheight">
        <div className="box message-preview">
          <div className="top">
            <div className="avatar">
              <img src="https://placehold.it/128x128" />
            </div>
            <div className="address">
              <div className="name">John Smith</div>
              <div className="email">someone@gmail.com</div>
            </div>
            <hr />
            <div className="content"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
