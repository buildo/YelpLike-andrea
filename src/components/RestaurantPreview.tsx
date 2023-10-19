import {
  Card,
  Stack,
  Title,
  Body,
  Label,
  Box,
} from "@buildo/bento-design-system";
import { useTranslation } from "react-i18next";
import { PreviewProp } from "../models";

function RestaurantPreview(props: PreviewProp) {
  const { t } = useTranslation();
  const rating = props.rating;
  const imagePrev =
    props.imageUrl === ""
      ? "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Barbieri_-_ViaSophia25668.jpg/1200px-Barbieri_-_ViaSophia25668.jpg"
      : props.imageUrl;

  return (
    <Card elevation="small" borderRadius={8} paddingX={24} paddingY={40}>
      <Stack space={8}>
        <Box height="full" justifyContent="center" alignItems="center">
          <img src={imagePrev} width="70%" height="100px" />
        </Box>

        <Title size="small">{props.name}</Title>
        <Body size="small">
          {props.address}
          <Label size="small" color="default">
            {t("Card.Rating", { rating })}
          </Label>
        </Body>
      </Stack>
    </Card>
  );
}

export default RestaurantPreview;
