import { useQuery } from "@tanstack/react-query";
import { getRestaurantList } from "./api";
import { fromJsonToProp } from "./utils";

function useGetRestaurantList(range: number) {
  return useQuery({
    queryKey: ["retrieve-list", range],
    queryFn: async () => {
      const prom: JSON = await getRestaurantList(range);
      return fromJsonToProp(prom);
    },
  });
}

export default useGetRestaurantList;
