import type { CollectionConfig } from "payload";

export const Inquiries: CollectionConfig = {
  slug: "inquiries",
  admin: {
    useAsTitle: "fullName",
    defaultColumns: ["fullName", "phone", "createdAt"],
  },
  access: {
    create: () => true, // Allows public form submission
    read: ({ req: { user } }) => Boolean(user), // Only authenticated admin can view
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: "fullName",
      type: "text",
      required: true,
      label: "Nama Calon Wali Murid",
    },
    {
      name: "phone",
      type: "text",
      required: true,
      label: "Nomor WhatsApp",
    },
    {
      name: "email",
      type: "email",
      label: "Alamat Email (Opsional)",
    },
    {
      name: "studentCandidateName",
      type: "text",
      label: "Nama Calon Siswa (Opsional)",
    },
    {
      name: "message",
      type: "textarea",
      required: true,
      label: "Pesan / Pertanyaan PPDB",
    },
    {
      name: "status",
      type: "select",
      defaultValue: "baru",
      options: [
        { label: "Pesan Baru", value: "baru" },
        { label: "Sudah Dihubungi", value: "dihubungi" },
        { label: "Selesai", value: "selesai" },
      ],
      admin: {
        position: "sidebar",
      },
    },
  ],
};
