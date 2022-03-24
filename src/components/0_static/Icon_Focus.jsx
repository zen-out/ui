import React from "react";

export function Icon_Focus() {
  return (
    <span className="has-text-info is-clickable icon">
      {" "}
      <i
        className="icon icon-todo m-2 mx-4"
        onclick="openFocusModal('TABLE_NAME' ,'TABLE_ID' )"
      >
        {" "}
      </i>
    </span>
  );
}
