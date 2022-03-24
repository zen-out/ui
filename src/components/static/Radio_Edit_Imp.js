import React from "react";

export function Radio_Edit_Imp() {
  return (
    <div className="level-item has-text-centered">
      <div>
        <p className="heading m-3">importance</p>
        <div>
          <div
            className="pretty p-icon p-toggle p-plain p-smooth mx-4 is-size-5"
            onclick="axiosEditOne('TABLE_NAME', 'TABLE_ID' , 'importance' , 'high' )"
          >
            <input type="radio" name="importance" value="high" />
            <div className="state p-on p-warning-o">
              <i className="icon icon-highImp hvr-icon"></i> <label></label>
            </div>
            <div className="state p-off">
              <i className="icon icon-highImp hvr-icon"></i> <label></label>
            </div>
          </div>
          <div
            className="pretty p-icon p-toggle p-plain p-smooth mx-4 is-size-5"
            onclick="axiosEditOne('TABLE_NAME', 'TABLE_ID' , 'importance' , 'medium' )"
          >
            <input type="radio" name="importance" value="medium" />
            <div className="state p-warning-o p-on">
              <i className="icon icon-medImp hvr-icon"></i> <label></label>
            </div>
            <div className="state p-off">
              <i className="icon icon-medImp hvr-icon"></i>
              <label></label>
            </div>
          </div>
          <div
            className="pretty p-icon p-toggle p-plain p-smooth mx-4 is-size-5"
            onclick="axiosEditOne('TABLE_NAME', 'TABLE_ID' , 'importance' , 'low' )"
          >
            <input type="radio" name="importance" value="low" />
            <div className="state p-warning-o p-on">
              <i className="icon icon-highImp hvr-icon"></i>
              <label></label>
            </div>
            <div className="state p-off">
              <i className="icon icon-highImp hvr-icon"></i> <label></label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
