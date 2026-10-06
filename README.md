# SD Al-Birru Technical Infrastructure

> Official codebase for the SD Al-Birru web platform.
> Built on a foundation of zero-bloat architecture, cognitive design psychology, and strict Type-Safe persistence.

## 📚 Core Architecture Documentation

This project enforces strict separation of concerns and architectural purity. All engineers and autonomous agents must strictly adhere to the policies defined in the `docs/` directory before proposing or executing any code modifications.

### 1. Engineering Philosophy & Constraints
- **[01-ENGINEERING_PRINCIPLES.md](./docs/01-ENGINEERING_PRINCIPLES.md):** The absolute foundational philosophies governing this project (Zero-Bloat, Maximum Performance, No Abstractions Without Justification).
- **[03-ENGINEERING_CONSTRAINTS.md](./docs/03-ENGINEERING_CONSTRAINTS.md):** The strict engineering rules, type-safety requirements, and language mandates (English-only for codebase variables and components).

### 2. Design System & User Interface
- **[02-DESIGN_SYSTEM.md](./docs/02-DESIGN_SYSTEM.md):** The mathematical and psychological design tokens (OKLCH color system, Modular Major Third typography, 8-Point spatial grid).

### 3. Architecture Decision Records
We utilize Architecture Decision Records to historically document why a specific architectural pattern or technology was chosen.
- **[04-ARCHITECTURE_DECISION_RECORD_SINGLE_SOURCE_OF_TRUTH.md](./docs/04-ARCHITECTURE_DECISION_RECORD_SINGLE_SOURCE_OF_TRUTH.md):** Documentation of the "Opinionated Single Source of Truth" constraint.
- **[05-ARCHITECTURE_DECISION_RECORD_COGNITIVE_LAWS.md](./docs/05-ARCHITECTURE_DECISION_RECORD_COGNITIVE_LAWS.md):** Documentation of applied HCI Cognitive Laws (Fitts's Law, Hick's Law, Miller's Law, Gestalt Principles).

### 4. Technical Blueprint & Specifications
6. **[06-SYSTEM_ARCHITECTURE.md](./docs/06-SYSTEM_ARCHITECTURE.md):** The infrastructure routing, Drizzle ORM layout, Turbopack optimizations, and rendering strategies.
7. **[07-TECHNICAL_SPECIFICATIONS.md](./docs/07-TECHNICAL_SPECIFICATIONS.md):** Low-level technical implementation details and project roadmap.
8. **[08-ENTITY_RELATIONSHIP_DIAGRAM.md](./docs/08-ENTITY_RELATIONSHIP_DIAGRAM.md):** Core Database Schema and Drizzle ORM relational models (Mermaid).
9. **[09-COMPONENT_ARCHITECTURE.md](./docs/09-COMPONENT_ARCHITECTURE.md):** Server Components (RSC) vs Client Components strict isolation rules.
10. **[10-USER_JOURNEY_FLOWS.md](./docs/10-USER_JOURNEY_FLOWS.md):** Finite State Machines (FSM) mapped out in Mermaid for robust user interactions.
11. **[11-API_CONTRACT_SPECIFICATIONS.md](./docs/11-API_CONTRACT_SPECIFICATIONS.md):** Zod schema validations and strict Frontend-to-Backend data contracts.
12. **[12-FEATURE_SPECIFICATION_ADMISSIONS.md](./docs/12-FEATURE_SPECIFICATION_ADMISSIONS.md):** Spesifikasi teknis dan turunan implementasi khusus untuk fitur Pendaftaran (*Admissions*).
13. **[13-INTERNATIONALIZATION_ARCHITECTURE.md](./docs/13-INTERNATIONALIZATION_ARCHITECTURE.md):** Standar infrastruktur multibahasa (i18n), struktur kamus JSON, dan aturan *Right-to-Left* (RTL) untuk bahasa Arab.
14. **[14-AUTHENTICATION_AND_AUTHORIZATION.md](./docs/14-AUTHENTICATION_AND_AUTHORIZATION.md):** Strategi keamanan tingkat tinggi menggunakan Auth.js (NextAuth) dan *Role-Based Access Control* (RBAC).
15. **[15-SECURITY_AND_DATA_PRIVACY.md](./docs/15-SECURITY_AND_DATA_PRIVACY.md):** Standar pengamanan data privasi calon siswa (PII), sanitasi XSS, dan perlindungan terhadap *Spam/Bot*.

### 5. Quality Assurance, DevOps & Observability
16. **[16-TESTING_STRATEGY.md](./docs/16-TESTING_STRATEGY.md):** Standar pengujian perangkat lunak menggunakan Vitest (Unit) dan Playwright (End-to-End) untuk perlindungan *bug* otomatis.
17. **[17-VERSION_CONTROL_AND_DEPLOYMENT_PIPELINE.md](./docs/17-VERSION_CONTROL_AND_DEPLOYMENT_PIPELINE.md):** Konvensi *Git Commit*, strategi *Trunk-Based Development*, dan pipa peluncuran Vercel.
18. **[18-OBSERVABILITY_AND_MONITORING.md](./docs/18-OBSERVABILITY_AND_MONITORING.md):** Standar pengawasan sistem, pelacakan eror produksi, dan Vercel *Web Vitals*.

### 6. Micro-Details & Optimizations
19. **[19-ACCESSIBILITY_AND_SEARCH_ENGINE_OPTIMIZATION_STRATEGY.md](./docs/19-ACCESSIBILITY_AND_SEARCH_ENGINE_OPTIMIZATION_STRATEGY.md):** Aturan optimasi mesin pencari, meta tag, dan pedoman aksesibilitas tunanetra.
20. **[20-ENVIRONMENT_AND_SECRETS_MANAGEMENT.md](./docs/20-ENVIRONMENT_AND_SECRETS_MANAGEMENT.md):** Validasi variabel `.env` dengan Zod untuk mencegah kebocoran rahasia *database*.
21. **[21-MEDIA_AND_ASSET_OPTIMIZATION.md](./docs/21-MEDIA_AND_ASSET_OPTIMIZATION.md):** Standar performa pemuatan gambar (`next/image`) dan tipografi (`next/font`).

---

## 🚀 Quick Start

1. **Install Dependencies:**
   ```bash
   npm install
   ```
2. **Environment Variables:**
   Ensure `.env.local` is configured with the target PostgreSQL `DATABASE_URL`.
3. **Database Migration:**
   ```bash
   npx drizzle-kit push
   ```
4. **Run Development Server:**
   ```bash
   npm run dev
   ```
