import { createClient, groq } from "next-sanity";

export async function getPets() {
  const client = createClient({
    projectId: "o19642js",
    dataset: "production",
    apiVersion: "2023-08-04",
    useCdn:true,
  });

  return client.fetch(groq`*[_type == "pet"]{_id, name}`);
}
