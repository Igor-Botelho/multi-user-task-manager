import PropTypes from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import taskMap from "../../utils/task-map";

export default function EditTask({
  statusEdit,
  onHandleInputChange,
  setStatusEdit,
  updateTask,
  setCompletedTasks,
  setNoCompletedTasks,
  noCompletedTasks,
  indexEditeProjet,
  inputs,
}) {
  const dispatch = useDispatch();

  const onHandleEdite = () => {
    setStatusEdit("todo-edit-text-off");
    document.getElementById("card-task-edit-form").reset();

    const taks = noCompletedTasks[indexEditeProjet];

    dispatch(async () => updateTask(taks._id, inputs)).then((tasks) => {
      const { completed, notCompleted } = taskMap(tasks);

      setCompletedTasks(completed);
      setNoCompletedTasks(notCompleted);
    });
  };
  return (
    <div>
      <form id="card-task-edit-form">
        <div className={statusEdit}>
          <input
            type="text"
            placeholder="name"
            name="name"
            className="form-input"
            onChange={onHandleInputChange}
            required
          />

          <input
            type="text"
            placeholder="description"
            name="description"
            className="form-input"
            onChange={onHandleInputChange}
          />

          <button
            className="todo-edit-button-confirm"
            type="submit"
            onClick={onHandleEdite}
          >
            Confirm
          </button>

          <button
            className="todo-edit-button-cancel"
            type="submit"
            onClick={() => setStatusEdit("todo-edit-text-off")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

EditTask.propTypes = {
  statusEdit: PropTypes.string.isRequired,
  onHandleInputChange: PropTypes.func.isRequired,
  onHandleEdite: PropTypes.func.isRequired,
  setStatusEdit: PropTypes.func.isRequired,
};
