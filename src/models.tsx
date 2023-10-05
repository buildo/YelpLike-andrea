import { z } from "zod";

// export const preview = z.object({
//   id: z.string(),
//   alias: z.string(),
//   name: z.string(),
//   image_url: z.string(),
//   is_closed: z.boolean(),
//   url: z.string(),
//   review_count: z.number(),
//   categories: z.array(z.object({ alias: z.string(), title: z.string() })),
//   rating: z.number(),
//   coordinates: z.object({ latitude: z.number(), longitude: z.number() }),
//   transactions: z.array(z.unknown()),
//   location: z.object({
//     address1: z.string(),
//     address2: z.string(),
//     address3: z.null(),
//     city: z.string(),
//     zip_code: z.string(),
//     country: z.string(),
//     state: z.string(),
//     display_address: z.array(z.string()),
//   }),
//   phone: z.string(),
//   display_phone: z.string(),
//   distance: z.number(),
// });

//export type Preview = z.infer<typeof preview>;

export const previewProp = z
  .object({
    alias: z.string(),
    name: z.string(),
    rating: z.number(),
    image_url: z.string(),
    location: z.object({
      city: z.string(),
    }),
  })
  .transform(({ image_url, location, ...rest }) => ({
    imageUrl: image_url,
    address: location.city,
    ...rest,
  }));

export type PreviewProp = z.infer<typeof previewProp>;

export const previewList = z.object({
  businesses: previewProp.array(),
});

export type PreviewList = z.infer<typeof previewList>;
