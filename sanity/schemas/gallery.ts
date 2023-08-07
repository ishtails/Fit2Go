export default {
  name: "gallery",
  type: "document",
  title: "Picture Gallery",
  fields: [
    {
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "alt",
      type: "string",
      title: "Alt Text",
    },
  ],
};
