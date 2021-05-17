import Axios from "axios";
import handleRequest from "./handle-request";

async function getTasks(projectId) {
  return handleRequest(
    Axios.get(`/api/${projectId}/tasks`, {
      params: { projectId },
    })
  );
}

async function updateTask(taskId, updateData) {
  const config = { headers: { "Content-Type": "application/json" } };

  return handleRequest(Axios.post(`/api/task/${taskId}`, updateData, config));
}

async function creatTask(taskData) {
  return handleRequest(Axios.post("/api/task/creat", taskData));
}

async function deleteTask(taskId, projectId) {
  return handleRequest(Axios.delete(`/api/task/${projectId}/${taskId}`));
}

export { getTasks, updateTask, creatTask, deleteTask };
