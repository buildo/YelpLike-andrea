import {
  Box,
  Stack,
  Title,
  AreaLoader,
  Columns,
  List,
  Feedback,
} from "@buildo/bento-design-system";
import { useGetRestaurantDetails } from "../hooks";
import { useParams } from "react-router-dom";

function RestaurantDetail() {
  const { id } = useParams();
  const { isLoading, isError, data } = useGetRestaurantDetails(id!);

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

  const photos = data?.photos.map((photo) => {
    return (
      <img
        key={photo}
        src={photo}
        alt="restaurant"
        style={{ width: "100%", height: "100%" }}
      />
    );
  });

  const address = data?.address.join(", ");

  return (
    <Box height="full" padding={24}>
      <Columns space={12}>
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
      </Columns>
    </Box>
  );
}

export default RestaurantDetail;
