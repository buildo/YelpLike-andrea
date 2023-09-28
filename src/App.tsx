import "@buildo/bento-design-system/index.css";
import "@buildo/bento-design-system/defaultTheme.css";
import { defaultMessages } from "@buildo/bento-design-system/defaultMessages/en";

import {
  BentoProvider,
  Headline,
  Box,
  ContentWithSidebar,
  Body,
  Tiles,
} from "@buildo/bento-design-system";
import RestaurantPreview from "./components/RestaurantPreview";
import rest_detail from "./mock-data/rest_detail.json";
import './i18n';
import { useTranslation } from "react-i18next";



function App() {
  const { t } = useTranslation();
  const name = rest_detail.name;
  const image_url = rest_detail.image_url;
  const rating = rest_detail.rating;
  const address = rest_detail.location.address1;

  const mockCards = [...Array(16)].map(() => {
    return <RestaurantPreview
      name={name}
      image_url={image_url}
      rating={rating}
      address={address}
    />
  })

  return (
    <BentoProvider defaultMessages={defaultMessages}>
      <Headline size="large" align="center">
        {t("title")}
      </Headline>

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
                {mockCards}
              </Tiles>
            </Body>
          </Box>
        </ContentWithSidebar>
      </Box>
    </BentoProvider>
  );
}

export default App;
