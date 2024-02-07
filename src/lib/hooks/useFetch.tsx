import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useFetch = (name: string, url: string) => {
  return useQuery({
    queryKey: [name],
    queryFn: async () => {
      const response = await axios.get(url);

      return response.data;
    },
    refetchOnWindowFocus: false,
  });
};
