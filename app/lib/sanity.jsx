import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: `${process.env.NEXT_PUBLIC_PROJECT_ID}`,
  dataset: "production",
  apiVersion: "2022-03-07",
  useCdn: true,
});

const imgBuilder = ImageUrlBuilder(client);

export function urlFor(source) {
  return imgBuilder.image(source);
}
