import React from "react";

function Input() {
  
  return (
    <section className="container-fluid">
      <form className="form-inline m-5">
        <div className="form-group mx-sm-6 mb-2">
          <label className="col-form-label mr-3">
            Enter Todo
          </label>
          <input
            type="text"
            className="form-control"
            id="input"
            placeholder="Enter ToDo"
          />
        </div>
        <button type="submit" className="btn btn-primary ml-3 mb-2">
          Add ToDo
        </button>
      </form>
    </section>
  );
}
export default Input;
