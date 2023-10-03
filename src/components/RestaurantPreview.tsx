import {
  Card,
  Stack,
  Title,
  Body,
  Label,
  Button,
} from "@buildo/bento-design-system";
import { useTranslation } from "react-i18next";
import { PreviewProp } from "../models";
import { useNavigate } from "react-router-dom";

function RestaurantPreview(props: PreviewProp) {
  const { t } = useTranslation();
  const rating = props.rating;
  const imagePrev =
    props.imageUrl === ""
      ? "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Barbieri_-_ViaSophia25668.jpg/1200px-Barbieri_-_ViaSophia25668.jpg"
      : props.imageUrl;

  const navigate = useNavigate();
  return (
    <Card elevation="small" borderRadius={8} padding={16} paddingTop={24}>
      <Stack space={8} align={"center"}>
        <img src={imagePrev} width="70%" height="100%" />
        <Title size="medium">{props.name}</Title>
        <Body size="medium">
          {props.address}

          <Label size="small" color="default">
            {t("Card.Rating", { rating })}
          </Label>
        </Body>
        <Button
          onPress={() => navigate("//restaurat-detail")}
          kind="transparent"
          label={t("Card.ButtonLabel")}
          hierarchy="primary"
        ></Button>
      </Stack>
    </Card>
  );
}

export default RestaurantPreview;
