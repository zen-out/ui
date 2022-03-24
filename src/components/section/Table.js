import React from "react";

export function Table(props) {
  return (
    <div>
      <table className="table">
        <thead>
          <th>{props.column}</th>
        </thead>
        <tbody>
          <tr>
            <td>{props.syntax}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
