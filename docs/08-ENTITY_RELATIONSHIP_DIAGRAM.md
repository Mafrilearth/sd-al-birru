# 08: Entity Relationship Diagram (ERD)

Dokumen ini mendefinisikan skema relasional basis data secara mutlak. Skema ini dikunci menggunakan Drizzle ORM untuk menjamin *Type-Safety* 100% dari *Database* hingga *Frontend*.

## Skema Relasional Inti

```mermaid
erDiagram
    USERS ||--o{ ACCOUNTS : "has"
    USERS ||--o{ SESSIONS : "has"
    USERS ||--o{ NEWS : "authors"

    USERS {
        uuid id PK
        string name
        string email UK
        timestamp emailVerified
        string role "default: 'user'"
    }

    ACCOUNTS {
        uuid id PK
        uuid userId FK
        string provider
        string providerAccountId
    }

    SESSIONS {
        string sessionToken PK
        uuid userId FK
        timestamp expires
    }

    NEWS {
        uuid id PK
        string slug UK
        string title
        text content
        uuid authorId FK
        timestamp publishedAt
    }

    PPDB_REGISTRATIONS {
        uuid id PK
        string registrationNumber UK "Format: PPDB26-XXXX"
        string studentName
        string parentName
        string whatsappNumber
        string previousSchool
        string status "PENDING|REVIEWED|ACCEPTED|REJECTED"
        timestamp createdAt
    }
```

## Kebijakan Kritis Basis Data
1. **Tidak Ada Penghapusan Permanen Secara Default (Soft Delete):** Data kritis seperti `PPDB_REGISTRATIONS` dilarang dihapus dari tabel utama kecuali secara hukum diharuskan.
2. **Ketergantungan Kuat (Foreign Key Constraints):** Jika *User* dihapus, maka sesi *(Sessions)* akan terhapus berantai (`Cascade`), namun *News* hanya dikosongkan penulisnya (`Set Null`) agar artikel tidak hilang.
