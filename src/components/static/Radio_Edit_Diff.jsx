import React from "react";

export function Radio_Edit_Diff() {
  return (
    <div className="level-item has-text-centered">
      <div>
        <input className="noDisplay difficulty" name="difficulty" />
        <p className="heading m-3">difficulty</p>
        <div>
          <div
            className="pretty p-icon p-toggle p-plain p-smooth mx-4 is-size-5"
            onclick="axiosEditOne('TABLE_NAME', 'TABLE_ID'
        , 'difficulty' , 'easy' )"
          >
            <input type="radio" name="difficulty" value="easy" />
            <div className="state p-success-o p-on">
              <i className="icon icon icon-lowDiff"></i> <label></label>
            </div>
            <div className="state p-off">
              <i className="icon icon icon-lowDiff hvr-icon"></i>
              <label></label>
            </div>
          </div>
          <div
            className="pretty p-icon p-toggle p-plain p-smooth mx-4 is-size-5"
            onclick="axiosEditOne('TABLE_NAME', 'TABLE_ID'
        , 'difficulty' , 'medium' )"
          >
            <input type="radio" name="difficulty" value="medium" />
            <div className="state p-success-o p-on">
              <i className="icon icon icon-medDiff"></i> <label></label>
            </div>
            <div className="state p-off">
              <i className="icon icon icon-medDiff hvr-icon"></i>
              <label></label>
            </div>
          </div>
          <div
            className="pretty p-icon p-toggle p-plain p-smooth mx-4 is-size-5 "
            onclick="axiosEditOne('TABLE_NAME', 'TABLE_ID'
        , 'difficulty' , 'hard' )"
          >
            <input type="radio" name="difficulty" value="hard" />
            <div className="state p-success-o p-on">
              <i className="icon icon icon-highDiff"></i> <label></label>
            </div>
            <div className="state p-off">
              <i className="icon icon icon-highDiff hvr-icon"></i>
              <label></label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
