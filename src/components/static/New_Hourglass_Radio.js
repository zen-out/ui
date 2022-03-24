import React from "react";

export function New_Hourglass_Radio() {
  return (
    <nav className="level">
      <div className="level-item has-text-centered">
        <div>
          <p className="heading m-3">difficulty</p>
          <div>
            <div className="pretty p-icon p-toggle p-plain p-smooth mx-4 is-size-5">
              <input type="radio" name="difficulty" value="easy" />
              <div className="state p-success-o p-on">
                <i className="icon icon icon-lowDiff"></i> <label></label>
              </div>
              <div className="state p-off">
                <i className="icon icon icon-lowDiff hvr-icon"></i>
                <label></label>
              </div>
            </div>
            <div className="pretty p-icon p-toggle p-plain p-smooth mx-4 is-size-5">
              <input type="radio" name="difficulty" value="medium" />
              <div className="state p-success-o p-on">
                <i className="icon icon icon-medDiff"></i> <label></label>
              </div>
              <div className="state p-off">
                <i className="icon icon icon-medDiff hvr-icon"></i>
                <label></label>
              </div>
            </div>
            <div className="pretty p-icon p-toggle p-plain p-smooth mx-4 is-size-5">
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
      <div className="level-item has-text-centered">
        <div>
          <p className="heading m-3">importance</p>
          <div>
            <div className="pretty p-icon p-toggle p-plain p-smooth mx-4 is-size-5">
              <input type="radio" name="importance" value="high" />
              <div className="state p-on p-warning-o">
                <i className="icon icon-highImp hvr-icon"></i> <label></label>
              </div>
              <div className="state p-off">
                <i className="icon icon-highImp hvr-icon"></i> <label></label>
              </div>
            </div>
            <div className="pretty p-icon p-toggle p-plain p-smooth mx-4 is-size-5">
              <input type="radio" name="importance" value="medium" />
              <div className="state p-warning-o p-on">
                <i className="icon icon-medImp hvr-icon"></i> <label></label>
              </div>
              <div className="state p-off">
                <i className="icon icon-medImp hvr-icon"></i>
                <label></label>
              </div>
            </div>
            <div className="pretty p-icon p-toggle p-plain p-smooth mx-4 is-size-5">
              <input type="radio" name="importance" value="low" />
              <div className="state p-warning-o p-on">
                <i className="icon icon-highImp hvr-icon"></i>
                <label></label>
              </div>
              <div className="state p-off">
                <i className="icon icon-lowImp hvr-icon"></i> <label></label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading m-3">privacy</p>
          <div>
            <div className="pretty p-icon p-toggle p-plain p-smooth mx-4 is-size-5">
              <input type="radio" name="public" value="public" />
              <div className="state p-danger-o p-on">
                <i className="icon icon-public hvr-icon"></i>
                <label></label>
              </div>
              <div className="state p-off">
                <i className="icon icon-public hvr-icon"></i> <label></label>
              </div>
            </div>
            <div className="pretty p-icon p-toggle p-plain p-smooth mx-4 is-size-5">
              <input type="radio" name="public" value="private" />
              <div className="state p-danger-o p-on">
                <i className="icon icon icon-private hvr-icon"></i>
                <label></label>
              </div>
              <div className="state p-off">
                <i className="icon icon icon-private hvr-icon"></i>
                <label></label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <input className="noDisplay" name="status" />
          <p className="heading m-3">status</p>
          <div>
            <div className="pretty p-icon p-toggle p-plain p-smooth mx-4 is-size-5">
              <input type="radio" name="status" value="to do" />
              <div className="state p-info-o p-on">
                <i className="icon icon icon-todo hvr-icon"></i> <label></label>
              </div>
              <div className="state p-off">
                <i className="icon icon icon-todo hvr-icon"></i> <label></label>
              </div>
            </div>
            <div className="pretty p-icon p-toggle p-plain p-smooth mx-4 is-size-5">
              <input type="radio" name="status" value="doing" />
              <div className="state p-info-o p-on">
                <i className="icon icon icon-doing hvr-icon"></i>
                <label></label>
              </div>
              <div className="state p-off">
                <i className="icon icon icon-doing hvr-icon"></i>
                <label></label>
              </div>
            </div>
            <div className="pretty p-icon p-toggle p-plain p-smooth mx-4 is-size-5">
              <input type="radio" name="status" value="done" />
              <div className="state p-info-o p-on">
                <i className="icon icon-done"></i>
                <label></label>
              </div>
              <div className="state p-off">
                <i className="icon icon-done hvr-icon"></i> <label></label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="level-item has-text-centered usefulness">
        <div>
          <p className="heading m-3">usefulness</p>
          <div>
            <div className="pretty p-icon p-toggle p-plain p-smooth mx-4 is-size-5">
              <input type="radio" name="usefulness" value="high" />
              <div className="state p-info-o p-on">
                <i className="icon icon icon-highUse hvr-icon"></i>
                <label></label>
              </div>
              <div className="state p-off">
                <i className="icon icon icon-highUse hvr-icon"></i>
                <label></label>
              </div>
            </div>
            <div className="pretty p-icon p-toggle p-plain p-smooth mx-4 is-size-5">
              <input type="radio" name="usefulness" value="medium" />
              <div className="state p-info-o p-on">
                <i className="icon icon icon-medUse hvr-icon"></i>
                <label></label>
              </div>
              <div className="state p-off">
                <i className="icon icon icon-medUse hvr-icon"></i>
                <label></label>
              </div>
            </div>
            <div className="pretty p-icon p-toggle p-plain p-smooth mx-4 is-size-5">
              <input type="radio" name="usefulness" value="low" />
              <div className="state p-info-o p-on">
                <i className="icon icon icon-lowUse hvr-icon"></i>
                <label></label>
              </div>
              <div className="state p-off">
                <i className="icon icon icon-lowUse hvr-icon"></i>
                <label></label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
