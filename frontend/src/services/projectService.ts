import API from "./api";
import type { Project } from "../types/project";

export const getAllProjects = async (): Promise<Project[]> => {
  const res = await API.get("/interns/project");
  return res.data;
};
