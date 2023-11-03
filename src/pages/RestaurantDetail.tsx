//import { useTranslation } from "react-i18next";
import {
  Box,
  Stack,
  Title,
  AreaLoader,
  Tiles,
  List,
} from "@buildo/bento-design-system";
import { useGetRestaurantDetails } from "../hooks";
import { Feedback } from "@buildo/bento-design-system";
import { useEffect } from "react";
interface RestID {
  id: string;
}

function RestaurantDetail({ id }: RestID) {
  const { isLoading, isError, data, refetch } = useGetRestaurantDetails(id);

  useEffect(() => {
    refetch();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (isLoading) {
    return <AreaLoader message="Loading..."></AreaLoader>;
  }

  if (isError) {
    return (
      <Feedback
        size="medium"
        title="Error!"
        description="Something went wrong!"
        status="negative"
      />
    );
  }

  if (id == "0" || isError) {
    return (
      <Feedback
        size="medium"
        title="Error!"
        description="Something went wrong!"
        status="negative"
      />
    );
  }

  console.log(data);

  const photos = data?.photos.map((photo) => {
    return (
      <img
        src={photo}
        alt="restaurant"
        style={{ width: "100%", height: "100%" }}
      />
    );
  });

  const address = data?.address.join(", ");

  return (
    <Box height="full" padding={24}>
      <Tiles space={12} columns={2}>
        <Stack space={16} align="left">
          <Title size="large">{data?.name}</Title>
          <List
            size="medium"
            dividers
            items={[
              {
                kind: "single-line",
                label: `Rating : ${data?.rating}  ⭐ `,
              },
              {
                kind: "single-line",
                label: `Address : ${address}`,
              },
              {
                kind: "single-line",
                label: `Price : ${data?.price}`,
              },
            ]}
          />
        </Stack>
        <Stack space={16} align="left">
          {photos}
        </Stack>
      </Tiles>
    </Box>
  );
}

export default RestaurantDetail;
