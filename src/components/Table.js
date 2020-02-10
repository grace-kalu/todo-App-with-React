import React from "react";
import TableRow from "./tableRow";


function Table(props) {

  return (
    <div>
      <table className="table table-hover">
        <thead className="thead-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Check</th>
            <th scope="col">Todo</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map(item=>{
            return <TableRow
            key = {item.id}
            id = {item.id}
            text = {item.text}
            checked ={item.completed}/>
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
