import "@buildo/bento-design-system/index.css";
import "@buildo/bento-design-system/defaultTheme.css";
import { defaultMessages } from "@buildo/bento-design-system/defaultMessages/en";
import React from "react";
import {
  BentoProvider,
  Headline,
  Box,
  ContentWithSidebar,
  Body,
  Tiles,
  Switch,
  Inline,
} from "@buildo/bento-design-system";
import RestaurantPreview from "./components/RestaurantPreview";
import rest_detail from "./mock-data/rest_detail.json";

function App() {
  const name = rest_detail.name;
  const image_url = rest_detail.image_url;
  const rating = rest_detail.rating;
  const address = rest_detail.location.address1;
  const [isEng, setEng] = React.useState(false);

  return (
    <BentoProvider defaultMessages={defaultMessages}>
      <Headline size="large" align="center">
        YelpLike
      </Headline>
      <Inline space={8}>
        <Switch
          switchPosition="trailing"
          label="ITA"
          name="lang-toggle"
          value={isEng}
          onChange={setEng}
        />
        <Body size={"large"} color={"primary"}>
          ENG
        </Body>
      </Inline>

      <Box>
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
          <Box
            height="full"
            display="flex"
            justifyContent="center"
            alignItems="center"
            padding={16}
          >
            <Body size="large">
              <Tiles space={16} columns={3} alignY={"bottom"}>
                <RestaurantPreview
                  name={name}
                  image_url={image_url}
                  rating={rating}
                  address={address}
                />
                <RestaurantPreview
                  name={name}
                  image_url={image_url}
                  rating={rating}
                  address={address}
                />
                <RestaurantPreview
                  name={name}
                  image_url={image_url}
                  rating={rating}
                  address={address}
                />
                <RestaurantPreview
                  name={name}
                  image_url={image_url}
                  rating={rating}
                  address={address}
                />
                <RestaurantPreview
                  name={name}
                  image_url={image_url}
                  rating={rating}
                  address={address}
                />
                <RestaurantPreview
                  name={name}
                  image_url={image_url}
                  rating={rating}
                  address={address}
                />
                <RestaurantPreview
                  name={name}
                  image_url={image_url}
                  rating={rating}
                  address={address}
                />
                <RestaurantPreview
                  name={name}
                  image_url={image_url}
                  rating={rating}
                  address={address}
                />
                <RestaurantPreview
                  name={name}
                  image_url={image_url}
                  rating={rating}
                  address={address}
                />
                <RestaurantPreview
                  name={name}
                  image_url={image_url}
                  rating={rating}
                  address={address}
                />
                <RestaurantPreview
                  name={name}
                  image_url={image_url}
                  rating={rating}
                  address={address}
                />
                <RestaurantPreview
                  name={name}
                  image_url={image_url}
                  rating={rating}
                  address={address}
                />
              </Tiles>
            </Body>
          </Box>
        </ContentWithSidebar>
      </Box>
    </BentoProvider>
  );
}

export default App;
