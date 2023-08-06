import { createClient, groq } from "next-sanity";

export async function getTestimonials() {
  const client = createClient({
    projectId: "o19642js",
    dataset: "production",
    apiVersion: "2023-08-04",
    useCdn: true,
  });

  return client.fetch(
    groq`*[_type == "testimonial"]{_id, author, designation, description, "imageURL": image.asset->url}`
  );
}
