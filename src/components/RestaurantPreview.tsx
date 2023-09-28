import "@buildo/bento-design-system/index.css";
import "@buildo/bento-design-system/defaultTheme.css";
import { Card, Stack, Title, Body, Label } from "@buildo/bento-design-system";

export interface PreviewProps {
  name: string;
  image_url: string;
  rating: number;
  address: string;
}

function RestaurantPreview({ name, image_url, rating, address }: PreviewProps) {
  return (
    <Card elevation="small" borderRadius={8} paddingX={24} paddingY={40}>
      <Stack space={8}>
        <img src={image_url} width="70%" height="100%" />
        <Title size="medium">{name}</Title>
        <Body size="medium">
          {address}
          <Label size="small" color="default">
            {`Rating: ${rating} ★`}
          </Label>
        </Body>
      </Stack>
    </Card>
  );
}

export default RestaurantPreview;
