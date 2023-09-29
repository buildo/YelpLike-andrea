import { Box, Tiles } from "@buildo/bento-design-system";
import RestaurantPreview from "../components/RestaurantPreview";
import rest_detail from "../mock-data/rest_detail.json";

function Home() {
  const name = rest_detail.name;
  const imageUrl = rest_detail.image_url;
  const rating = rest_detail.rating;
  const address = rest_detail.location.address1;

  const mockCards = [...Array(16).keys()].map((element) => {
    return (
      <RestaurantPreview
        key={element}
        name={name}
        imageUrl={imageUrl}
        rating={rating}
        address={address}
      />
    );
  });
  return (
    <Box
      height="full"
      display="flex"
      justifyContent="center"
      alignItems="center"
      padding={16}
    >
      <Tiles space={16} columns={3} alignY={"bottom"}>
        {mockCards}
      </Tiles>
    </Box>
  );
}

export default Home;
