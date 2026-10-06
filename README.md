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
12. **[12-FEATURE_SPECIFICATION_PPDB.md](./docs/12-FEATURE_SPECIFICATION_PPDB.md):** Spesifikasi teknis dan turunan implementasi khusus untuk fitur Pendaftaran PPDB.

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
