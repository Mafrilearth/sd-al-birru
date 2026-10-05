import path from "path";
import { fileURLToPath } from "url";
import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { Users } from "./collections/Users";
import { Posts } from "./collections/Posts";
import { Media } from "./collections/Media";
import { Gallery } from "./collections/Gallery";
import { Inquiries } from "./collections/Inquiries";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const isPostgres = Boolean(process.env.DATABASE_URI?.startsWith("postgres"));

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Posts, Media, Gallery, Inquiries],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "al-birru-super-secret-development-key-2026",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: isPostgres
    ? postgresAdapter({
        pool: {
          connectionString: process.env.DATABASE_URI!,
        },
      })
    : sqliteAdapter({
        client: {
          url: "file:./payload.db",
        },
      }),
});
