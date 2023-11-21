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
  TextField,
  SliderField,
  CheckboxGroupField,
} from "@buildo/bento-design-system";
import { useGetRestaurantList } from "../hooks";
import RestaurantPreview from "../components/RestaurantPreview";
import { useTranslation } from "react-i18next";
import { validators, useFormo, success } from "@buildo/formo";
import { useState } from "react";
import { PreviewPropComponent } from "../models";

function Home() {
  const { t } = useTranslation();
  const initialValues = {
    prices: ["price=1", "price=2", "price=3", "price=4"],
    location: "Milan",
    radius: 10,
  };

  const [activeFilters, setActiveFilters] = useState(initialValues);

  const { fieldProps, handleSubmit } = useFormo(
    {
      initialValues,
      fieldValidators: () => ({
        location: validators.minLength(2, "City name is too short"),
      }),
    },
    {
      onSubmit: async (values) => {
        setActiveFilters(values);
        return success(values);
      },
    }
  );

  const { isLoading, isError, data } = useGetRestaurantList(activeFilters);

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
    const prevPropsComponent: PreviewPropComponent = {
      vars: { ...element },
    };
    return (
      <RestaurantPreview
        key={"home-" + element.alias}
        {...prevPropsComponent}
      />
    );
  });
  return (
    <ContentWithSidebar
      sidebarPosition="left"
      sidebarWidth="1/5"
      sidebarBackground="backgroundOverlay"
    >
      <Box height="full" padding={24}>
        <Stack space={16} align="left">
          {/* price filters */}
          <Box width="full">
            <CheckboxGroupField
              label={t("priceRangefilter")}
              orientation="vertical"
              options={[
                { value: initialValues.prices[0], label: "€" },
                { value: initialValues.prices[1], label: "€€" },
                { value: initialValues.prices[2], label: "€€€" },
                { value: initialValues.prices[3], label: "€€€€" },
              ]}
              {...fieldProps("prices")}
            />
          </Box>

          <Divider />
          {/* location filters */}
          <TextField
            {...fieldProps("location")}
            label={t("Location.Label")}
            placeholder={t("Location.Placeholder")}
          />
          <Divider />
          {/* range filters */}
          <Box width="full">
            <SliderField
              type="single"
              label={t("RangeDistance.Label")}
              minValue={0}
              maxValue={10}
              step={1}
              {...fieldProps("radius")}
            />
          </Box>
          <Divider />
          <Button
            kind="solid"
            hierarchy="primary"
            label={t("SearchButton")}
            onPress={handleSubmit}
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
