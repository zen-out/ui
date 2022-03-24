import React from "react";

export function TagInput(props) {
  return (
    <div className="control effect-1">
      <label className="label" for="keywords">
        tags
      </label>
      <div className="tagsfield field input is-grouped is-grouped-multiline is-danger">
        <div>
          <input id="keywords" type="hidden" className="input" />
          <span className="focus-border"></span>
          <span placeholder="{props.placeholder_text}" contenteditable></span>
        </div>
      </div>
      <p className="help is-danger">{props.label_text}</p>
    </div>
  );
}
