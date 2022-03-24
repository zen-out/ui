import React from "react";

export function Checkbox_Status_Done() {
  return (
    <div
      className="pretty p-icon p-round p-smooth p-plain"
      onclick="axiosEditOne('TABLE_NAME', 'TABLE_ID', 'status', 'done')"
    >
      <input type="checkbox" name="markDone" />
      <div className="state p-info-o">
        <i className="icon icon-markDone"></i> <label></label>
      </div>
    </div>
  );
}
