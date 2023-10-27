// import { useTranslation } from "react-i18next";
// import { Box, Stack, Title, Label, Body } from "@buildo/bento-design-system";
import { useGetRestaurantDetails } from "../hooks";
import { Feedback } from "@buildo/bento-design-system";
interface RestID {
  id: string;
}

function RestaurantDetail({ id }: RestID) {
  const { isLoading, isError, data } = useGetRestaurantDetails(id);
  console.log(data);
  console.log(data);
  console.log(isLoading);
  console.log(isError);

  if (id == "0" || isError) {
    return (
      <Feedback
        size="medium"
        title="Error!"
        description="Something went wrong!"
        status="negative"
      />
    );
  }

  return "gianni";

  //   const rating = props.rating;
  //   const { t } = useTranslation();
  //   return (
  //     <Box height="full" padding={24}>
  //       <Stack space={16} align="left">
  //         <img
  //           src={props.imageUrl}
  //           style={{ height: "200px", width: "100%", objectFit: "scale-down" }}
  //         />
  //         <Title size="medium">{props.name}</Title>
  //         <Body size="medium">
  //           {props.address}

  //           <Label size="small" color="default">
  //             {t("Card.Rating", { rating })}
  //           </Label>
  //         </Body>
  //       </Stack>
  //     </Box>
  //   );
}

export default RestaurantDetail;
