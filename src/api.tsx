import { apiSecret } from "./models";

const apiKey = import.meta.env.VITE_API_KEY;

export const getRestaurantList = async ({
  prices,
  location,
  radius,
}: {
  prices: boolean[];
  location: string;
  radius: number;
}) => {
  const priceParamsString: string = prices
    .map((price, index) => {
      if (price) {
        return `price=${index + 1}`;
      }
    })
    .filter((price) => price !== "")
    .join("&");
  const uri = `/api/search?sort_by=best_match&location=${location}&radius=${radius}000&${priceParamsString}`;
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
  const uri = `/business_id_or_alias/${id}`;
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
