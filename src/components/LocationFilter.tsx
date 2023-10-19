import { TextField } from "@buildo/bento-design-system";
import { useTranslation } from "react-i18next";

type LocationProps = {
  location: string;
  setLocation: (arg: string) => void;
};

function LocationFilter({ location, setLocation }: LocationProps) {
  const { t } = useTranslation();

  return (
    <TextField
      name="name"
      label={t("Location.Label")}
      placeholder={t("Location.Placeholder")}
      value={location}
      onChange={setLocation}
    />
  );
}

export default LocationFilter;
