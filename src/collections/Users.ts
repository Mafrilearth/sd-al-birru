import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
    defaultColumns: ["name", "email", "role"],
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      label: "Nama Lengkap",
    },
    {
      name: "role",
      type: "select",
      defaultValue: "admin",
      options: [
        { label: "Super Admin", value: "superadmin" },
        { label: "Staf Konten", value: "admin" },
      ],
      required: true,
    },
  ],
};
