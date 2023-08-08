export default {
    name: "team",
    type: "document",
    title: "Team",
    fields: [
      {
        name: "index",
        type: "number",
        title: "Index",
      },
      {
        name: "name",
        type: "string",
        title: "Name",
      },
      {
        name: "designation",
        type: "string",
        title: "Designation",
      },
      {
        name: "instagram",
        type: "string",
        title: "Instagram Link",
      },
      {
        name: "linkedin",
        type: "string",
        title: "Linkedin Link",
      },
      {
        name: "image",
        type: "image",
        title: "Profile Pic",
        options: {
          hotspot: true,
        },
      }
    ],
  };
  