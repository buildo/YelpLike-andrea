import { useQuery } from "@tanstack/react-query";
import { getRestaurantList, getRestaurantDetails } from "./api";
import { fromJsonToPropPreview, fromJsonToPropDetails } from "./utils";
import { PreviewList, DetailsPropApi } from "./models";

export function useGetRestaurantList(filtersParams: {
  prices: string[];
  location: string;
  radius: number;
}) {
  return useQuery(
    [
      "restaurantList",
      filtersParams.location,
      filtersParams.radius,
      filtersParams.prices,
    ],
    async (): Promise<PreviewList> => {
      const prom: JSON = await getRestaurantList(filtersParams);
      return fromJsonToPropPreview(prom);
    }
  );
}

export function useGetRestaurantDetails(id: string) {
  return useQuery(
    ["restaurantDetails", id],
    async (): Promise<DetailsPropApi> => {
      const prom: JSON = await getRestaurantDetails(id);
      return fromJsonToPropDetails(prom);
    }
  );
}
