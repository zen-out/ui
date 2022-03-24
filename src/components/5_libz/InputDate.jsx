import React from "react";

export function InputDate(props) {
  return (
    <div className="field has-addons" id="TABLE_NAME_TABLE_ID">
      <div className="control is-info">
        <input
          type="text"
          name="start"
          className="input cleave"
          placeholder="DD-MM-YYYY"
        />
        <span className="focus-border"></span>
      </div>
      <div className="control">
        <a className="button is-static">to</a>
      </div>
      <div className="control is-info">
        <input
          type="text"
          name="end"
          className="input cleave"
          placeholder="DD-MM-YYYY"
        />
        <span className="focus-border"></span>
      </div>
    </div>
  );
}
