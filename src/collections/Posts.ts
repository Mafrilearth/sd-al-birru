import type { CollectionConfig } from "payload";

export const Posts: CollectionConfig = {
  slug: "posts",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "category", "publishedDate", "_status"],
  },
  versions: {
    drafts: true,
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      label: "Judul Berita / Pengumuman",
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      label: "Slug URL (misal: pembukaan-kegiatan-mpls-2026)",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "category",
      type: "select",
      required: true,
      defaultValue: "kegiatan",
      options: [
        { label: "Berita Kegiatan", value: "kegiatan" },
        { label: "Pengumuman Resmi", value: "pengumuman" },
        { label: "Prestasi Siswa", value: "prestasi" },
        { label: "Tahfidz & Keislaman", value: "tahfidz" },
      ],
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "coverImage",
      type: "upload",
      relationTo: "media",
      required: true,
      label: "Foto Sampul Utama",
    },
    {
      name: "summary",
      type: "textarea",
      required: true,
      label: "Ringkasan Singkat (Muncul di Kartu Berita)",
    },
    {
      name: "content",
      type: "richText",
      required: true,
      label: "Isi Lengkap Artikel",
    },
    {
      name: "publishedDate",
      type: "date",
      required: true,
      defaultValue: () => new Date().toISOString(),
      label: "Tanggal Publikasi",
      admin: {
        position: "sidebar",
      },
    },
  ],
};
