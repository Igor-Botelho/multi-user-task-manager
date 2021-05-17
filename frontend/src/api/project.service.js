import Axios from "axios";
import handleRequest from "./handle-request";

async function findProjects(userId) {
  return handleRequest(Axios.get(`/api/${userId}/projects`));
}

async function creatProject(projectData) {
  return handleRequest(Axios.post("/api/project", projectData));
}

async function deleteProject(projectId, userId) {
  return handleRequest(Axios.delete(`/api/${userId}/${projectId}`));
}

async function updateProject(projectId, userId, updateData) {
  return handleRequest(Axios.put(`/api/${userId}/${projectId}`, updateData));
}
export { findProjects, creatProject, deleteProject, updateProject };
