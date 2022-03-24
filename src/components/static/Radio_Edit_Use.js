import React from "react";

export function Radio_Edit_Use() {
  return (
    <div className="level-item has-text-centered usefulness">
      <div>
        <p className="heading m-3">usefulness</p>
        <div>
          <div
            className="pretty p-icon p-toggle p-plain p-smooth mx-4 is-size-5"
            onclick="axiosEditOne('TABLE_NAME', 'TABLE_ID'
        , 'usefulness' , 'high' )"
          >
            <input type="radio" name="usefulness" value="medium" />
            <div className="state p-info-o p-on">
              <i className="icon icon icon-highUse hvr-icon"></i>
              <label></label>
            </div>
            <div className="state p-off">
              <i className="icon icon icon-highUse hvr-icon"></i>
              <label></label>
            </div>
          </div>
          <div
            onclick="axiosEditOne('TABLE_NAME', 'TABLE_ID' , 'usefulness' , 'medium' )"
            className="pretty p-icon p-toggle p-plain p-smooth mx-4 is-size-5"
          >
            <input type="radio" name="usefulness" value="medium" />
            <div className="state p-info-o p-on">
              <i className="icon icon icon-medUse hvr-icon"></i> <label></label>
            </div>
            <div className="state p-off">
              <i className="icon icon icon-medUse hvr-icon"></i>
              <label></label>
            </div>
          </div>
          <div
            className="pretty p-icon p-toggle p-plain p-smooth mx-4 is-size-5"
            onclick="axiosEditOne('TABLE_NAME', 'TABLE_ID'
        , 'usefulness' , 'low' )"
          >
            <input type="radio" name="usefulness" value="low" />
            <div className="state p-info-o p-on">
              <i className="icon icon icon-lowUse hvr-icon"></i>
              <label></label>
            </div>
            <div className="state p-off">
              <i className="icon icon icon-lowUse hvr-icon"></i> <label></label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
