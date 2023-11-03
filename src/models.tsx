import { z } from "zod";

export const apiSecret = z
  .string()
  .length(128, { message: "Must be exactly 128 characters long" });

export const previewPropApi = z
  .object({
    id: z.string(),
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

export type PreviewPropApi = z.infer<typeof previewPropApi>;

export const previewList = z.object({
  businesses: previewPropApi.array(),
});

export type PreviewList = z.infer<typeof previewList>;

export const filterParams = z.object({
  prices: z.array(z.boolean()),
  location: z.string(),
  radius: z.number(),
});
export type FiltersParams = z.infer<typeof filterParams>;

export const previewPropComponent = z.object({
  vars: previewPropApi,
  setId: z.function().args(z.string()).returns(z.void()),
});
export type PreviewPropComponent = z.infer<typeof previewPropComponent>;

export const detailsPropApi = z
  .object({
    name: z.string(),
    rating: z.number(),
    photos: z.array(z.string()),
    location: z.object({
      display_address: z.array(z.string()),
    }),
    price: z.string(),
  })
  .transform(({ location, ...rest }) => ({
    address: location.display_address,
    ...rest,
  }));

export type DetailsPropApi = z.infer<typeof detailsPropApi>;
