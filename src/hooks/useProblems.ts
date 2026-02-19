import { useQuery } from "@tanstack/react-query";
import { getAllProblems } from "@/apis/problems-api";

const useProblems = () => {
  return useQuery({
    queryKey: ["problems"],
    queryFn: getAllProblems,
  });
};

export default useProblems;
