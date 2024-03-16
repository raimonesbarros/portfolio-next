import { api } from "../axios";

export const getProjects = async (path: string) => {
  const response = await api.get(path).then((response) => response.data);

  return response;
};
