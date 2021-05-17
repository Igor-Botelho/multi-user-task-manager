import PropTypes from "prop-types";
import React from "react";

export default function AddTask({ onHandleInputChange, onHandleNewTask }) {
  return (
    <div className="card-task-form">
      <form id="card-task-form">
        <input
          type="text"
          placeholder="add task"
          name="name"
          className="card-input"
          onChange={onHandleInputChange}
          required
        />

        <input
          type="text"
          placeholder="description"
          name="description"
          className="card-input"
          onChange={onHandleInputChange}
        />
      </form>

      <button className="" type="submit" onClick={onHandleNewTask}>
        add task
      </button>
    </div>
  );
}

AddTask.propTypes = {
  onHandleInputChange: PropTypes.func.isRequired,
  onHandleNewTask: PropTypes.func.isRequired,
};
