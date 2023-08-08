import imageUrlBuilder from '@sanity/image-url'
import { client } from "@/sanity/utils"

export const urlFor = (source: any) => {
  return imageUrlBuilder(client).image(source)
}