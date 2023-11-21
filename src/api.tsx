import { apiSecret } from "./models";

const apiKey = import.meta.env.VITE_API_KEY;

export const getRestaurantList = async ({
  prices,
  location,
  radius,
}: {
  prices: string[];
  location: string;
  radius: number;
}) => {
  const priceParamsString: string = prices.join("&");
  const radiusParamsString: string =
    radius == 0 ? "900" : radius.toString() + "000";
  const uri = `/api/search?sort_by=best_match&location=${location}&radius=${radiusParamsString}&${priceParamsString}`;
  const apik = apiSecret.safeParse(apiKey);

  if (apik.success) {
    return (
      await fetch(uri, {
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + apiKey,
        },
      })
    ).json();
  } else {
    throw apik.error;
  }
};

export const getRestaurantDetails = async (id: string) => {
  const uri = `/api/${id}`;
  const apik = apiSecret.safeParse(apiKey);

  if (apik.success) {
    return (
      await fetch(uri, {
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + apiKey,
        },
      })
    ).json();
  } else {
    throw apik.error;
  }
};
