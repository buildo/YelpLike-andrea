import {
  Box,
  ContentWithSidebar,
  Stack,
  Divider,
  Button,
  Feedback,
  AreaLoader,
  Inset,
  Tiles,
} from "@buildo/bento-design-system";
import RestaurantPreview from "../components/RestaurantPreview";
import PriceFilter from "../components/PriceFilter";
import LocationFilter from "../components/LocationFilter";
import RangeDistanceFilter from "../components/RangeDistanceFilter";
import { useTranslation } from "react-i18next";
import React from "react";
import useGetRestaurantList from "../hooks";

function Home() {
  const { t } = useTranslation();
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

  const [filters, setFilters] = React.useState({
    prices: [false, false, false, false],
    location: "",
    range: 0,
  });

  const setPricesFilter = (prices: boolean[]) =>
    setFilters({
      ...filters,
      prices,
    });

  const setRangeFilter = (range: number) =>
    setFilters({
      ...filters,
      range,
    });

  const setLocationFilter = (location: string) =>
    setFilters({
      ...filters,
      location,
    });

  const cards = data?.businesses.map((element) => {
    return <RestaurantPreview key={"home-" + element.alias} {...element} />;
  });
  return (
    <ContentWithSidebar
      sidebarPosition="left"
      sidebarWidth="1/5"
      sidebarBackground="backgroundOverlay"
    >
      <Box height="full" padding={24}>
        <Stack space={16} align="left">
          <PriceFilter price={filters.prices} setPrice={setPricesFilter} />
          <Divider />
          <LocationFilter
            location={filters.location}
            setLocation={setLocationFilter}
          />
          <Divider />
          <Box width="full">
            <RangeDistanceFilter
              distance={filters.range}
              setDistance={setRangeFilter}
            />
          </Box>
          <Divider />
          <Button
            kind="solid"
            hierarchy="primary"
            label={t("SearchButton")}
            onPress={() => window.alert("" + filters.location)}
          />
        </Stack>
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
