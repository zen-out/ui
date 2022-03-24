import React from "react";

export function Edit_Hourglass_Radio(props) {
  return (
    <nav className="level">
      <div className="level-item has-text-centered">
        <div>
          className
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
                className
                <i className="icon icon icon-lowDiff"></i> <label></label>
                className
              </div>
              <div className="state p-off">
                className
                <i className="icon icon icon-lowDiff hvr-icon"></i>className
                <label></label>className
              </div>
            </div>
            <div
              className="pretty p-icon p-toggle p-plain p-smooth mx-4 is-size-5"
              onclick="axiosEditOne('TABLE_NAME', 'TABLE_ID'
        , 'difficulty' , 'medium' )"
            >
              <input type="radio" name="difficulty" value="medium" />
              <div className="state p-success-o p-on">
                className
                <i className="icon icon icon-medDiff"></i> <label></label>
                className
              </div>
              <div className="state p-off">
                className
                <i className="icon icon icon-medDiff hvr-icon"></i>className
                <label></label>className
              </div>
            </div>
            <div
              className="pretty p-icon p-toggle p-plain p-smooth mx-4 is-size-5 "
              onclick="axiosEditOne('TABLE_NAME', 'TABLE_ID'
        , 'difficulty' , 'hard' )"
            >
              <input type="radio" name="difficulty" value="hard" />
              <div className="state p-success-o p-on">
                className
                <i className="icon icon icon-highDiff"></i> <label></label>
                className
              </div>
              <div className="state p-off">
                className
                <i className="icon icon icon-highDiff hvr-icon"></i>className
                <label></label>className
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading m-3">importance</p>
          <div>
            <div
              className="pretty p-icon p-toggle p-plain p-smooth mx-4 is-size-5"
              onclick="axiosEditOne('TABLE_NAME', 'TABLE_ID' , 'importance' , 'high' )"
            >
              className
              <input type="radio" name="importance" value="high" />
              <div className="state p-on p-warning-o">
                className
                <i className="icon icon-highImp hvr-icon"></i> <label></label>
                className
              </div>
              <div className="state p-off">
                className
                <i className="icon icon-highImp hvr-icon"></i> <label></label>
                className
              </div>
            </div>
            <div
              className="pretty p-icon p-toggle p-plain p-smooth mx-4 is-size-5"
              onclick="axiosEditOne('TABLE_NAME', 'TABLE_ID' , 'importance' , 'medium' )"
            >
              className
              <input type="radio" name="importance" value="medium" />
              <div className="state p-warning-o p-on">
                className
                <i className="icon icon-medImp hvr-icon"></i> <label></label>
                className
              </div>
              <div className="state p-off">
                className
                <i className="icon icon-medImp hvr-icon"></i>
                <label></label>className
              </div>
            </div>
            <div
              className="pretty p-icon p-toggle p-plain p-smooth mx-4 is-size-5"
              onclick="axiosEditOne('TABLE_NAME', 'TABLE_ID' , 'importance' , 'low' )"
            >
              className
              <input type="radio" name="importance" value="low" />
              <div className="state p-warning-o p-on">
                className
                <i className="icon icon-highImp hvr-icon"></i>
                <label></label>className
              </div>
              <div className="state p-off">
                className
                <i className="icon icon-highImp hvr-icon"></i> <label></label>
                className
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading m-3">privacy</p>
          <div>
            <div
              className="pretty p-icon p-toggle p-plain p-smooth mx-4 is-size-5"
              onclick="axiosEditOne('TABLE_NAME', 'TABLE_ID'
        , 'public' , 'public' )"
            >
              <input type="radio" name="public" value="public" />
              <div className=" state p-danger-o p-on">
                <i className="icon icon-public hvr-icon"></i>
                <label></label>
              </div>
              <div className="state p-off">
                <i className="icon icon-public hvr-icon"></i> <label></label>
              </div>
            </div>
            <div
              className="pretty p-icon p-toggle p-plain p-smooth mx-4 is-size-5"
              onclick="axiosEditOne('TABLE_NAME', 'TABLE_ID'
        , 'public' , 'private' )"
            >
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
            <div
              className="pretty p-icon p-toggle p-plain p-smooth mx-4 is-size-5"
              onclick="axiosEditOne('TABLE_NAME', 'TABLE_ID'
        , 'status' , 'to do' )"
            >
              <input type="radio" name="status" value="to do" />
              <div className="state p-info-o p-on">
                <i className="icon icon icon-todo hvr-icon"></i> <label></label>
              </div>
              <div className="state p-off">
                <i className="icon icon icon-todo hvr-icon"></i> <label></label>
              </div>
            </div>
            <div
              onclick="axiosEditOne('TABLE_NAME', 'TABLE_ID' , 'status' , 'doing' )"
              className="pretty p-icon p-toggle p-plain p-smooth mx-4 is-size-5"
            >
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
            <div
              className="pretty p-icon p-toggle p-plain p-smooth mx-4 is-size-5"
              onclick="axiosEditOne('TABLE_NAME', 'TABLE_ID'
        , 'status' , 'done' )"
            >
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
                <i className="icon icon icon-medUse hvr-icon"></i>
                <label></label>
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
