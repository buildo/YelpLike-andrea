import {
  Card,
  Stack,
  Title,
  Body,
  Label,
  Button,
} from "@buildo/bento-design-system";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { PreviewPropComponent } from "../models";

function RestaurantPreview(props: PreviewPropComponent) {
  const { t } = useTranslation();
  const rating = props.vars.rating;
  const imagePrev =
    props.vars.imageUrl === ""
      ? "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Barbieri_-_ViaSophia25668.jpg/1200px-Barbieri_-_ViaSophia25668.jpg"
      : props.vars.imageUrl;

  const navigate = useNavigate();
  return (
    <Card elevation="small" borderRadius={8} padding={16} paddingTop={24}>
      <Stack space={8} align={"center"}>
        <img
          src={imagePrev}
          style={{ height: "200px", width: "100%", objectFit: "scale-down" }}
        />
        <Title size="medium">{props.vars.name}</Title>
        <Body size="medium">
          {props.vars.address}

          <Label size="small" color="default">
            {t("Card.Rating", { rating })}
          </Label>
        </Body>
        <Button
          onPress={() => {
            return navigate(`/restaurat-detail/${props.vars.id}`);
          }}
          kind="transparent"
          label={t("Card.ButtonLabel")}
          hierarchy="primary"
        ></Button>
      </Stack>
    </Card>
  );
}

export default RestaurantPreview;
