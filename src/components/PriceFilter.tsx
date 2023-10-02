import { CheckboxField, Stack, Title } from "@buildo/bento-design-system";
import React from "react";
import { useTranslation } from "react-i18next";

function PriceFilter() {
  const [priceRange, setpriceRange] = React.useState<boolean[]>(
    new Array(4).fill(false)
  );
  const { t } = useTranslation();

  return (
    <Stack space={8} align="left">
      <Title size="small">{t("priceRangefilter")}</Title>
      {[...Array(4).keys()].map((_, position) => {
        return (
          <CheckboxField
            label={"$".repeat(position + 1)}
            value={priceRange[position]}
            onChange={() => {
              setpriceRange(
                priceRange.map((item, index) =>
                  index === position ? !item : item
                )
              );
            }}
          />
        );
      })}
    </Stack>
  );
}

export default PriceFilter;
