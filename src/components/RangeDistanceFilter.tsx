import { SliderField } from "@buildo/bento-design-system";
import { useTranslation } from "react-i18next";
type RangeFilterProps = {
  distance: number;
  setDistance: (arg: number) => void;
};

function RangeDistanceFilter({ distance, setDistance }: RangeFilterProps) {
  const { t } = useTranslation();
  return (
    <SliderField
      type="single"
      label={t("RangeDistance.Label")}
      value={distance}
      onChange={setDistance}
      minValue={0}
      maxValue={10}
      step={1}
    />
  );
}
export default RangeDistanceFilter;
