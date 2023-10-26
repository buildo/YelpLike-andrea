import { useQuery } from "@tanstack/react-query";
import { getRestaurantList } from "./api";
import { fromJsonToProp } from "./utils";
import { PreviewList } from "./models";

function useGetRestaurantList(filtersParams: {
  prices: boolean[];
  location: string;
  radius: number;
}) {
  return useQuery(
    ["restaurantList"],
    async (): Promise<PreviewList> => {
      const prom: JSON = await getRestaurantList(filtersParams);
      return fromJsonToProp(prom);
    },
    { enabled: false }
  );
}

export default useGetRestaurantList;
