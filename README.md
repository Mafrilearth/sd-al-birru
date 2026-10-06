# SD Al-Birru Technical Infrastructure

> Official codebase for the SD Al-Birru web platform.
> Built on a foundation of zero-bloat architecture, cognitive design psychology, and strict Type-Safe persistence.

## 📚 Architecture Documentation (Inverted Pyramid Structure)

This documentation follows a strict inverted pyramid topology: starting from high-level abstract principles and narrowing down to specific micro-optimizations. Each document maintains a single responsibility with zero overlap.

### Layer 1: Foundational Philosophy (Macro)
1. **[01-ENGINEERING_PRINCIPLES.md](./docs/01-ENGINEERING_PRINCIPLES.md):** Core software engineering doctrines.
2. **[02-DESIGN_SYSTEM.md](./docs/02-DESIGN_SYSTEM.md):** Mathematical visual tokens and interface guidelines.
3. **[03-ENGINEERING_CONSTRAINTS.md](./docs/03-ENGINEERING_CONSTRAINTS.md):** Strict compilation and structural boundaries.

### Layer 2: Architectural Decisions
4. **[04-ARCHITECTURE_DECISION_RECORD_SINGLE_SOURCE_OF_TRUTH.md](./docs/04-ARCHITECTURE_DECISION_RECORD_SINGLE_SOURCE_OF_TRUTH.md):** Resolution on single source of truth methodologies.
5. **[05-ARCHITECTURE_DECISION_RECORD_COGNITIVE_LAWS.md](./docs/05-ARCHITECTURE_DECISION_RECORD_COGNITIVE_LAWS.md):** Resolution on psychological laws dictating user interfaces.

### Layer 3: System Topology
6. **[06-SYSTEM_ARCHITECTURE.md](./docs/06-SYSTEM_ARCHITECTURE.md):** High-level infrastructure and framework selection.
7. **[07-TECHNICAL_SPECIFICATIONS.md](./docs/07-TECHNICAL_SPECIFICATIONS.md):** Low-level implementation blueprint and roadmap.
8. **[08-ENTITY_RELATIONSHIP_DIAGRAM.md](./docs/08-ENTITY_RELATIONSHIP_DIAGRAM.md):** Relational database schema and constraints.

### Layer 4: Application Logic
9. **[09-COMPONENT_ARCHITECTURE.md](./docs/09-COMPONENT_ARCHITECTURE.md):** Component boundaries and server-client segregation.
10. **[10-USER_JOURNEY_FLOWS.md](./docs/10-USER_JOURNEY_FLOWS.md):** Finite state machines for frontend interactions.
11. **[11-API_CONTRACT_SPECIFICATIONS.md](./docs/11-API_CONTRACT_SPECIFICATIONS.md):** Data validation schemas and network contracts.

### Layer 5: Specific Implementations
12. **[12-FEATURE_SPECIFICATION_ADMISSIONS.md](./docs/12-FEATURE_SPECIFICATION_ADMISSIONS.md):** Isolated technical specifications for the admissions system.
13. **[13-INTERNATIONALIZATION_ARCHITECTURE.md](./docs/13-INTERNATIONALIZATION_ARCHITECTURE.md):** Multilingual infrastructure and directional layout rules.
14. **[14-AUTHENTICATION_AND_AUTHORIZATION.md](./docs/14-AUTHENTICATION_AND_AUTHORIZATION.md):** Role-based access control and session management.
15. **[15-SECURITY_AND_DATA_PRIVACY.md](./docs/15-SECURITY_AND_DATA_PRIVACY.md):** Threat mitigation and personally identifiable information protection.

### Layer 6: Lifecycle Operations
16. **[16-TESTING_STRATEGY.md](./docs/16-TESTING_STRATEGY.md):** Quality assurance via automated testing methodologies.
17. **[17-VERSION_CONTROL_AND_DEPLOYMENT_PIPELINE.md](./docs/17-VERSION_CONTROL_AND_DEPLOYMENT_PIPELINE.md):** Code collaboration conventions and continuous integration.
18. **[18-OBSERVABILITY_AND_MONITORING.md](./docs/18-OBSERVABILITY_AND_MONITORING.md):** Production error tracking and system telemetry.

### Layer 7: Micro-Optimizations (Micro)
19. **[19-ACCESSIBILITY_AND_SEARCH_ENGINE_OPTIMIZATION_STRATEGY.md](./docs/19-ACCESSIBILITY_AND_SEARCH_ENGINE_OPTIMIZATION_STRATEGY.md):** Web content accessibility guidelines and metadata rules.
20. **[20-ENVIRONMENT_AND_SECRETS_MANAGEMENT.md](./docs/20-ENVIRONMENT_AND_SECRETS_MANAGEMENT.md):** Secure injection and validation of runtime secrets.
21. **[21-MEDIA_AND_ASSET_OPTIMIZATION.md](./docs/21-MEDIA_AND_ASSET_OPTIMIZATION.md):** Performant delivery strategies for static resources.

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
