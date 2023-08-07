import { createClient, groq } from "next-sanity";

export const client = createClient({
  projectId: "o19642js",
  dataset: "production",
  apiVersion: "2023-08-04",
  useCdn: true,
});

export async function getTestimonials() {
  return client.fetch(
    groq`*[_type == "testimonial"]{_id, author, designation, description, image}`
  );
}

export async function getPictures() {
  return client.fetch(
    groq`*[_type == "gallery"]{_id, image, alt}`
  );
}