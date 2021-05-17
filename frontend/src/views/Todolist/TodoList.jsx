import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  creatProject,
  deleteProject,
  findProjects,
  updateProject,
} from "../../api/project.service";
import Cart from "../../components/Card/Card";
import Form from "../../components/Form/Form";
import Navbar from "../../components/Navbar/Navbar";
import "./todo.css";

function TodoList(params) {
  const dispatch = useDispatch();
  const [projects, setProjects] = useState([]);
  const [statusEdit, setStatusEdit] = useState("todo-edit-text-off");
  const [indexEditeProjet, setIndexEditeProjet] = useState();
  const [inputs, setInputs] = useState({});

  const userId = params.match.params.userId;
  const userName = params.match.params.userName;

  const onHandleSubimit = (inputs) => {
    dispatch(async () => creatProject({ ...inputs, userId })).then(
      (projects) => {
        document.getElementById("form-id").reset();

        setProjects(projects);
      }
    );
  };

  const onHandleDelete = (projectId) => {
    dispatch(async () =>
      deleteProject(projectId, userId).then((projects) => {
        setProjects(projects);
      })
    );
  };

  const onHandleEdite = () => {
    setStatusEdit("todo-edit-text-off");

    dispatch(async () =>
      updateProject(indexEditeProjet, userId, inputs).then((projects) => {
        setProjects(projects);
      })
    );
  };

  const onHandleInputChange = (event) => {
    event.persist();

    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    dispatch(async () => findProjects(userId)).then((data) => {
      setProjects(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="page-container">
      <div className="navbar-index">
        <Navbar userName={userName} />
      </div>
      <div className="todo-new-project">
        <Form
          title="Create a new project"
          buttonTitle="create"
          fields={[{ type: "text", placeholder: "Project name", name: "name" }]}
          subimitFn={onHandleSubimit}
        />
      </div>
      <div className="todo-container">
        <div className="cards-container">
          {projects.length > 0 ? (
            projects.map(({ _id, name }) => {
              return (
                <div className="todo-cards">
                  <Cart projectId={_id} projectName={name} />

                  <button
                    className="todo-delete-button"
                    type="submit"
                    onClick={() => onHandleDelete(_id)}
                  >
                    Delete Project
                  </button>

                  <button
                    className="todo-edit-button"
                    type="submit"
                    onClick={() => {
                      setStatusEdit("todo-edit-text-on");
                      setIndexEditeProjet(_id);
                    }}
                  >
                    Edit project
                  </button>
                </div>
              );
            })
          ) : (
            <div className="todo-empty">No Projects</div>
          )}
        </div>

        <div className={`${statusEdit} todo-confirm`}>
          <input
            type="text"
            placeholder="edit title project"
            name="name"
            className="form-edit"
            onChange={onHandleInputChange}
          />
          <br></br>
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
      </div>
    </div>
  );
}

export default TodoList;
