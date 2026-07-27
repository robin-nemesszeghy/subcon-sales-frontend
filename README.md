# Subcon Sales: Frontend Architecture & Developer Guide

## 📖 Project Overview

The Subcon Sales frontend is a high-performance, single-page application (SPA) built to market and distribute subconscious sales training methodologies specifically tailored for the car wash industry. The application serves as the primary lead-generation and information hub, directing users to distinct membership tiers and operational resources.

This repository houses the entire frontend architecture, designed for maximum rendering speed, seamless single-page navigation, and high conversion rates.

---

## 🛠 Tech Stack & Dependencies

This project is built with a modern, lightweight JavaScript stack prioritizing performance and developer experience:

- **Core Framework:** React 19
- **Build Tool & Bundler:** Vite 8
- **Styling:** Tailwind CSS 3.4
- **Form Handling:** Formspree (Serverless POST endpoint)
- **Linting:** ESLint with React-specific rule sets

---

## 🏗 Project Architecture

The application is structured as a modular SPA. The `App.jsx` entry point orchestrates a linear, storytelling user flow by stacking independent functional components.

### Directory Structure

```text
src/
├── assets/ # Static images and video assets
├── components/ # Modular UI components
│ ├── Navbar.jsx # Sticky top navigation with mobile menu
│ ├── Hero.jsx # Above-the-fold value proposition
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

**Custom Animations:**

- `drive`: A 14-second linear translation animation utilized in hero graphics to simulate vehicle movement through a wash tunnel.

---

## 🔌 Third-Party Integrations

### Serverless Contact Form (Formspree)

To maintain a lightweight footprint without requiring a dedicated Node.js/Express backend, the `<Contact />` component leverages **Formspree** for form submissions.

- **Implementation:** Standard HTML `<form>` utilizing a `POST` method.
- **Endpoint:** The form targets a unique Formspree URL.
- **Data Handling:** User inputs (`name`, `email`, `phone`, `message`) are mapped via standard `name` attributes and routed directly to the client's inbox (`subconsales@gmail.com`). Spam filtering and bot protection are handled natively on the Formspree backend, eliminating the need for client-side reCAPTCHA bloat.

---

## 🚀 Local Development Setup

To run this project locally, ensure you have [Node.js](https://nodejs.org/) installed, then follow these steps:

**1. Clone the repository:**

```bash
git clone https://github.com/YOUR-USERNAME/subcon-sales-frontend.git
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
