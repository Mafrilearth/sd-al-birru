import type { CollectionConfig } from "payload";

export const Gallery: CollectionConfig = {
  slug: "gallery",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "category", "activityDate"],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      label: "Nama Kegiatan / Dokumentasi",
    },
    {
      name: "category",
      type: "select",
      required: true,
      defaultValue: "kegiatan-sekolah",
      options: [
        { label: "Kegiatan Sekolah", value: "kegiatan-sekolah" },
        { label: "Wisuda & Tasmi' Tahfidz", value: "tahfidz" },
        { label: "Ekstrakurikuler", value: "ekstrakurikuler" },
        { label: "Prestasi & Lomba", value: "prestasi" },
        { label: "Sarana & Prasarana", value: "fasilitas" },
      ],
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
      label: "Foto Dokumentasi",
    },
    {
      name: "activityDate",
      type: "date",
      required: true,
      defaultValue: () => new Date().toISOString(),
      label: "Tanggal Kegiatan",
    },
  ],
};
