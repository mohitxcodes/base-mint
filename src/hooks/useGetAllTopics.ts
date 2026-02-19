import { useQuery } from "@tanstack/react-query";
import { getAllTopics } from "@/apis/topicsApi";

export const useGetAllTopics = () => {
  return useQuery({
    queryKey: ["topics"],
    queryFn: getAllTopics,
  });
};
