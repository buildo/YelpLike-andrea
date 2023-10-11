import { z } from "zod";

export const apisecret = z
  .string()
  .length(128, { message: "Must be exactly 128 characters long" });

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

export const filterParams = z.object({
  range: z.number(),
});
export type FiltersParams = z.infer<typeof filterParams>;
