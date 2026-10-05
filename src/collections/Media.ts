import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  upload: {
    staticDir: "public/media",
    mimeTypes: ["image/png", "image/jpeg", "image/webp", "image/svg+xml"],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
      label: "Teks Alternatif (Deskripsi Gambar)",
    },
    {
      name: "caption",
      type: "text",
      label: "Keterangan Foto",
    },
  ],
};
