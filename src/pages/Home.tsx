import {
  Box,
  ContentWithSidebar,
  Body,
  Inline,
  Tiles,
} from "@buildo/bento-design-system";
import RestaurantPreview from "../components/RestaurantPreview";
import { PreviewList } from "../models";

function Home({ businesses }: PreviewList) {
  const cards = businesses.map((element) => {
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
        justifyContent="center"
        alignItems="center"
      >
        <Body size="large">filters</Body>
      </Box>

      <Inline collapseBelow={"desktop"} space={16}>
        <Tiles space={16} columns={3} alignY={"bottom"}>
          {cards}
        </Tiles>
      </Inline>
    </ContentWithSidebar>
  );
}

export default Home;
