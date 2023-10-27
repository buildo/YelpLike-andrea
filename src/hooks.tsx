import { useQuery } from "@tanstack/react-query";
import { getRestaurantList, getRestaurantDetails } from "./api";
import { fromJsonToProp } from "./utils";
import { PreviewList } from "./models";

export function useGetRestaurantList(filtersParams: {
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

export function useGetRestaurantDetails(id: string) {
  return useQuery(
    ["restaurantDetails"],
    async (): Promise<PreviewList> => {
      const prom: JSON = await getRestaurantDetails(id);
      return fromJsonToProp(prom);
    },
    { enabled: false }
  );
}
