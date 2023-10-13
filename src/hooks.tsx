import { useQuery } from "@tanstack/react-query";
import { getRestaurantList } from "./api";
import { fromJsonToProp } from "./utils";

function useFetchQuery(range: number) {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["retrieve-list", range],
    queryFn: async () => {
      const prom: JSON = await getRestaurantList(range);
      return fromJsonToProp(prom);
    },
  });
  return { data, isLoading, isError };
}

export default useFetchQuery;
