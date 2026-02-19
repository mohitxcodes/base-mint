import api from "@/lib/axios";
import type { Problem } from "@/types/problems";

export const getAllProblems = async (): Promise<Problem[]> => {
  const response = await api.get("/problems");
  console.log(response.data);
  return response.data;
};
