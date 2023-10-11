import { apisecret } from "../models";

const apiKey = import.meta.env.VITE_API_KEY;

export const getRestaurantList = async (range: number) => {
  const uri = `/api/search?sort_by=best_match&limit=${range}&location=Milano`;
  const apik = apisecret.safeParse(apiKey);

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
