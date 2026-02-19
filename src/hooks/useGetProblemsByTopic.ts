import { getProblemByTopic } from "@/apis/problemsApi";
import { useQuery } from "@tanstack/react-query";

export const useGetProblemsByTopic = (topic: string) => {
  return useQuery({
    queryKey: ["problems", topic],
    queryFn: () => getProblemByTopic(topic),
  });
};
