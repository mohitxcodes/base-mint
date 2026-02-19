import api from "@/lib/axios";
import type { IProblem } from "@/types/problems";

export const getAllProblems = async (): Promise<IProblem[]> => {
  const response = await api.get("/problems");
  return response.data;
};

export const getProblemById = async (id: string): Promise<IProblem> => {
  const response = await api.get(`/problems/${id}`);
  return response.data;
};

export const getProblemByTopic = async (topic: string): Promise<IProblem[]> => {
  const response = await api.get(`/problems?topic=${topic}`);
  return response.data;
};
