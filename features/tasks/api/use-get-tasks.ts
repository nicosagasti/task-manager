//first hook
import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/hono";

export const useGetTasks = () => {
  const query = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const dataResponse = await client.api.tasks.$get();
      if (!dataResponse.ok) {
        throw new Error("An error occurred while fetching tasks");
      }

      const { data } = await dataResponse.json();
      return data;
    },
  });

  return query;
};
