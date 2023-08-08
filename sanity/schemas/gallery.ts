export default {
  name: "gallery",
  type: "document",
  title: "Picture Gallery",
  fields: [
    {
      name: "images",
      type: "array",
      title: "Gallery Images",
      description: "Images of the gallery",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
            },
          ],
        },
      ],
    },
  ],
};

