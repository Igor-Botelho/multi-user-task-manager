import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  creatTask,
  deleteTask,
  getTasks,
  updateTask,
} from "../../api/tasks.service";
import taskMap from "../../utils/task-map";
import ListCheckbox from "../List-checkbox/ListCheckbox";
import AddTask from "../Task/Add-task";
import EditTask from "../Task/Edit-task";
import "./card.css";

export default function Card({ projectId, projectName }) {
  const dispatch = useDispatch();

  const [completedTasks, setCompletedTasks] = useState([]);
  const [noCompletedTasks, setNoCompletedTasks] = useState([]);
  const [inputs, setInputs] = useState({});
  const [statusEdit, setStatusEdit] = useState("todo-edit-text-off");
  const [indexEditeProjet, setIndexEditeProjet] = useState();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    dispatch(async () => getTasks(projectId)).then((tasks) => {
      const { completed, notCompleted } = taskMap(tasks);

      setCompletedTasks(completed);
      setNoCompletedTasks(notCompleted);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectId]);

  const handleInputChangeTodoDo = (event) => {
    const taskIndex = event.target.name;

    const taks = noCompletedTasks[taskIndex];

    updateDispach(taks._id, taks.completed);
  };

  const handleInputChangeDone = (event) => {
    const taskIndex = event.target.name;

    const taks = completedTasks[taskIndex];

    updateDispach(taks._id, taks.completed);
  };

  const onHandleInputChange = (event) => {
    event.persist();

    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  const onHandleNewTask = (event) => {
    document.getElementById("card-task-form").reset();

    dispatch(async () =>
      creatTask({ ...inputs, projectId }).then((tasks) => {
        const { completed, notCompleted } = taskMap(tasks);
        setInputs({});
        setCompletedTasks(completed);
        setNoCompletedTasks(notCompleted);
      })
    );
  };

  const updateDispach = (taskId, taskStatus) => {
    dispatch(async () => updateTask(taskId, { completed: !taskStatus })).then(
      (tasks) => {
        const { completed, notCompleted } = taskMap(tasks);

        setCompletedTasks(completed);
        setNoCompletedTasks(notCompleted);
      }
    );
  };

  const onHandleDelete = (index) => {
    const taks = noCompletedTasks[index];

    dispatch(async () =>
      deleteTask(taks._id, projectId).then((tasks) => {
        const { completed, notCompleted } = taskMap(tasks);

        setCompletedTasks(completed);
        setNoCompletedTasks(notCompleted);
      })
    );
  };

  return (
    <div class="card-container">
      <div className="card-header">
        <h4 className="card-title">{projectName}</h4>
      </div>
      <h2 className="card-status">To Do</h2>
      <hr></hr>
      <ListCheckbox
        intens={noCompletedTasks}
        onChangeFn={handleInputChangeTodoDo}
        fnDelete={onHandleDelete}
        fnEdit={(_id) => {
          setStatusEdit("todo-edit-text-on");
          setIndexEditeProjet(_id);
        }}
      />

      <EditTask
        statusEdit={statusEdit}
        onHandleInputChange={onHandleInputChange}
        setStatusEdit={setStatusEdit}
        updateTask={updateTask}
        setCompletedTasks={setCompletedTasks}
        setNoCompletedTasks={setNoCompletedTasks}
        noCompletedTasks={noCompletedTasks}
        indexEditeProjet={indexEditeProjet}
        inputs={inputs}
      />

      <br></br>
      <h2 className="card-status">Done</h2>
      <hr></hr>

      <ListCheckbox
        intens={completedTasks}
        onChangeFn={handleInputChangeDone}
        fnDelete={onHandleDelete}
      />

      <AddTask
        onHandleInputChange={onHandleInputChange}
        onHandleNewTask={onHandleNewTask}
      />
    </div>
  );
}

Card.propTypes = {
  projectId: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
};
