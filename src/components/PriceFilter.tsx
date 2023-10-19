import { CheckboxField, Stack, Title } from "@buildo/bento-design-system";
import { useTranslation } from "react-i18next";

type PriceFilterProps = {
  price: boolean[];
  setPrice: (arg: boolean[]) => void;
};

function PriceFilter({ price, setPrice }: PriceFilterProps) {
  const { t } = useTranslation();

  return (
    <Stack space={8} align="left">
      <Title size="small">{t("priceRangefilter")}</Title>
      {[...Array(4).keys()].map((_, position) => {
        return (
          <CheckboxField
            key={"checkbox-" + position}
            label={"$".repeat(position + 1)}
            value={price[position]}
            onChange={() => {
              setPrice(
                price.map((item, index) => (index === position ? !item : item))
              );
            }}
          />
        );
      })}
    </Stack>
  );
}

export default PriceFilter;
