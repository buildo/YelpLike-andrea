
import { Card, Stack, Title, Body, Label } from "@buildo/bento-design-system";
import { useTranslation } from "react-i18next";

export interface PreviewProps {
  name: string;
  imageUrl: string;
  rating: number;
  address: string;
}

function RestaurantPreview({ name, imageUrl, rating, address }: PreviewProps) {
  const { t } = useTranslation();
  return (
    <Card elevation="small" borderRadius={8} paddingX={24} paddingY={40}>
      <Stack space={8}>
        <img src={imageUrl} width="70%" height="100%" />
        <Title size="medium">{name}</Title>
        <Body size="medium">
          {address}
          <Label size="small" color="default">
            {t('Card.Rating', { rating })}
          </Label>
        </Body>
      </Stack>
    </Card>
  );
}

export default RestaurantPreview;
