# Subcon Sales: Frontend Architecture & Developer Guide

## 📖 Project Overview

The Subcon Sales frontend is a high-performance, single-page application (SPA) built to market and distribute subconscious sales training methodologies specifically tailored for the car wash industry. The application serves as the primary lead-generation and information hub, directing users to distinct membership tiers and operational resources.

This repository houses the entire frontend architecture, designed for maximum rendering speed, seamless single-page navigation, and high conversion rates.

---

## 📚 Technical Documentation

For detailed engineering specifications and deployment workflows, explore our Docs-as-Code guides:

- 🏗 **[Component Architecture & Specs](./docs/component-architecture.md)** — Detailed state logic, props schemas, and dynamic Lottie filter handling.
- ⚡ **[CI/CD & Deployment Pipeline](./docs/deployment-pipeline.md)** — Dual-remote Git architecture, Vite build verification, and edge distribution.

---

## 🛠 Tech Stack & Dependencies

This project is built with a modern, lightweight JavaScript stack prioritizing performance and developer experience:

- **Core Framework:** React 19
- **Build Tool & Bundler:** Vite 8
- **Styling:** Tailwind CSS 3.4
- **Form Handling:** Formspree (Serverless POST endpoint)
- **Animations:** Lottie-React (JSON vector rendering)
- **Linting:** ESLint with React-specific rule sets

---

## 🏗 Project Architecture

The application is structured as a modular SPA. The `App.jsx` entry point orchestrates a linear, storytelling user flow by stacking independent functional components.

### Directory Structure

```text
src/
├── assets/ # Static images, JSON animation data, and video assets
├── components/ # Modular UI components
│ ├── Navbar.jsx # Sticky top navigation with mobile menu
│ ├── Hero.jsx # Above-the-fold value proposition & Lottie integration
│ ├── Services.jsx # Core membership tiers (Owner vs. Certification)
│ ├── Provides.jsx # Value breakdown grid
│ ├── Methods.jsx # Embedded video and methodology breakdown
│ ├── WhyEffective.jsx # Psychological backing and call-to-action
│ ├── SalesModules.jsx # Course curriculum outline
│ ├── WhySubcon.jsx # Founder's letter and philosophy
│ ├── FAQ.jsx # Expandable accordion logic for common queries
│ ├── Contact.jsx # Serverless contact form integration
│ └── Footer.jsx # Global footer with return-to-top routing
├── App.jsx # Main component layout orchestrator
├── main.jsx # React root injection and StrictMode wrapper
└── index.css # Tailwind directives and global base styles
```

---

## 🎨 Design System & Theming

The UI utilizes a custom theme configuration managed entirely within `tailwind.config.js`. It relies heavily on earth tones and sharp contrasts to evoke an academic yet premium "training vault" aesthetic.

**Core Color Palette:**

- `notebook-bg` (#F7F4EE): Primary background for high readability.
- `notebook-card` (#ECE6D8): Slightly darkened offset for contained UI elements.
- `leather-dark` (#3B2A20): Deep brown for primary typography and dark sections.
- `leather-medium` (#6A4E3D): Softened brown for borders and secondary text.
- `accent-blue` (#229AD6): High-contrast action color for CTAs and links.
- `charcoal` (#262220): Deep black/grey for heavy typographic emphasis.

**Typography:**

- **Headings:** Merriweather (Serif)
- **Body:** Plus Jakarta Sans (Sans-serif)

---

## 🎬 Complex Animation Handling (Lottie)

To maximize performance and eliminate heavy video payload sizes, the `<Hero />` component utilizes JSON-based Lottie animations.

### Data Extraction & Bundler Workarounds

During development, extracting the raw multi-car JSON data from the legacy production DOM required executing a custom JavaScript targeting script via the Chrome DevTools Console, as the original assets were not exposed in a standard `bodymovin` array.

Furthermore, a Vite bundler anomaly caused standard component imports of `lottie-react` to resolve as CommonJS module objects rather than functions. This is circumvented in `Hero.jsx` using a fallback assignment:
`const Lottie = LottiePackage.default || LottiePackage;`

### Dynamic Theming via CSS Filters

Because the source JSON files contained embedded base64 PNG assets (rather than pure mathematical SVG vectors), dynamic `interactivity` props could not be used to recolor the graphics.

To ensure brand cohesion without requiring access to the original Adobe After Effects source files, the "Before" graphic is dynamically recolored at runtime to match the `leather-medium` brand tone using a precise CSS photographic filter array:
`style={{ filter: "sepia(100%) hue-rotate(340deg) saturate(60%) brightness(0.85)" }}`

---

## 🔌 Third-Party Integrations

### Serverless Contact Form (Formspree)

To maintain a lightweight footprint without requiring a dedicated Node.js/Express backend, the `<Contact />` component leverages **Formspree** for form submissions.

- **Implementation:** Standard HTML `<form>` utilizing a `POST` method.
- **Endpoint:** The form targets a unique Formspree URL.
- **Data Handling:** User inputs (`name`, `email`, `phone`, `message`) are mapped via standard `name` attributes and routed directly to the client's inbox. Spam filtering and bot protection are handled natively on the Formspree backend, eliminating the need for client-side reCAPTCHA bloat.

---

## 🚀 Local Development Setup

To run this project locally, ensure you have [Node.js](https://nodejs.org/) installed, then follow these steps:

**1. Clone the repository:**

```bash
git clone https://github.com/ClientOrgName/subcon-sales-frontend.git
```

**2. Navigate into the project directory:**

```bash
cd subcon-sales-frontend
```

**3. Install dependencies:**

```bash
npm install
```

**4. Start the Vite development server:**

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.
