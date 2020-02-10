import React from "react";

function TableRow(props) {
  return (
    <tr>
      <th scope="row">{props.id}</th>
      <td>
        <input
          type="checkbox"
          checked={props.checked}
        />
      </td>
      <td>
        <h3>{props.text}</h3>
      </td>
      <td>
        <button type="button" className="btn btn-success">
          Edit
        </button>
      </td>
      <td>
        <button type="button" className="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  );
}
export default TableRow;
