import {
  Box,
  ContentWithSidebar,
  Body,
  Tiles,
  AreaLoader,
  Feedback,
  Inset,
} from "@buildo/bento-design-system";
import RestaurantPreview from "../components/RestaurantPreview";
import rest_detail from "../mock-data/rest_detail.json";

function Home() {
  const { isLoading, isError, data } = useGetRestaurantList(10);

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

  const cards = data?.businesses.map((element) => {
    return <RestaurantPreview key={"home-" + element.alias} {...element} />;
  });
  return (
    <ContentWithSidebar
      sidebarPosition="left"
      sidebarWidth="1/5"
      sidebarBackground="backgroundOverlay"
    >
      <Box
        height="full"
        display="flex"
        justifyContent="flexStart"
        alignItems="flexStart"
        padding={24}
      >
        <Body size="large">
          <PriceFilter></PriceFilter>
        </Body>
      </Box>
      <Inset space={16}>
        <Tiles
          space={16}
          columns={{ wide: 3, desktop: 3, tablet: 2, mobile: 1 }}
          alignY="bottom"
        >
          {cards}
        </Tiles>
      </Inset>
    </ContentWithSidebar>
  );
}

export default Home;
