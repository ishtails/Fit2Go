export default {
  name: "gallery",
  type: "document",
  title: "Picture Gallery",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "description",
      type: "string",
      title: "Description",
    },
    {
      name: "alt",
      type: "string",
      title: "Alternative Text",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
    },
  ],
};
