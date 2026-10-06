# 09: Component Architecture (RSC Boundaries)

Proyek ini sangat ketat dalam memisahkan **React Server Components (RSC)** dan **Client Components**. Kesalahan penempatan komponen akan mengakibatkan membengkaknya *bundle JavaScript* yang merugikan kecepatan memuat (*loading speed*).

## Hukum Batas Komponen (The Component Boundary Law)

1. **Default adalah Server (Zero-JS):**
   Setiap komponen secara otomatis adalah *Server Component*. Ia langsung merender HTML murni di *server* (sangat cepat untuk SEO dan kecepatan).
2. **Batas Klien (The Client Edge):**
   Arahan `"use client"` **hanya boleh ditaruh di komponen paling ujung / sedalam mungkin (Pohon Daun/Leaf Node)**. Dilarang keras menaruh `"use client"` di *Layout* atau *Page* utama.
3. **Pemisahan Interaksi (Isolation):**
   Hanya komponen yang membutuhkan *State* (`useState`), Efek Samping (`useEffect`), Animasi Interaktif (Framer Motion), atau *Event Listener* (`onClick`) yang diizinkan menjadi Klien.

## Diagram Arsitektur Pohon (Tree Architecture)

```mermaid
graph TD
    A[app/page.tsx (Server)] --> B(HeroSection.tsx (Server))
    A --> C(ProgramsSection.tsx (Server))
    B --> D{ActionButtons.tsx (Client)}
    C --> E{ProgramCarousel.tsx (Client)}
    A --> F(Footer.tsx (Server))
    
    style A fill:#0f172a,stroke:#38bdf8,stroke-width:2px,color:#fff
    style B fill:#0f172a,stroke:#38bdf8,stroke-width:2px,color:#fff
    style C fill:#0f172a,stroke:#38bdf8,stroke-width:2px,color:#fff
    style F fill:#0f172a,stroke:#38bdf8,stroke-width:2px,color:#fff
    style D fill:#f59e0b,stroke:#b45309,stroke-width:2px,color:#fff
    style E fill:#f59e0b,stroke:#b45309,stroke-width:2px,color:#fff
```
*(Biru = Server Component (Zero JS). Emas = Client Component (Interaktif))*
