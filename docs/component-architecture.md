# Component Architecture & Interface Specifications

## 📖 Overview

This document outlines the component architecture, state management patterns, UI interactions, and data contracts for the `subcon-sales-frontend` application. The application follows a modular, top-down React architecture optimized for single-page storytelling, responsive rendering, and performant asset execution.

---

## 🏗 Component Tree & Data Flow

The application hierarchy is flat by design to prevent prop-drilling overhead. `App.jsx` acts as the root orchestrator that stacks functional UI components in linear sequence.

```text
App.jsx
├── Navbar.jsx (Sticky Header & Navigation State)
├── Hero.jsx (Lottie Animation Engine & CTA Handler)
├── Services.jsx (Pricing Tiers)
├── Provides.jsx (Value Grid)
├── Methods.jsx (Video Embed & Curriculum Breakdown)
├── WhyEffective.jsx (Psychological Value Drivers)
├── SalesModules.jsx (Course Outline Grid)
├── WhySubcon.jsx (Founder's Vision)
├── FAQ.jsx (Accordion State)
├── Contact.jsx (Formspree API Integration)
└── Footer.jsx (Global Footer & Navigation Routing)
```

---

## ⚡ Key Component Specifications

### 1. Hero Component (`<Hero />`)

The `<Hero />` component serves as the primary above-the-fold engagement section, utilizing dual Lottie JSON vector animations to visually illustrate the "Before vs. After" transformation.

#### **Module Exports & Polyfills**

Due to a Vite/CommonJS bundler resolution anomaly with `lottie-react`, the component utilizes a dynamic fallback assignment to extract the React functional component safely:

```jsx
import LottiePackage from "lottie-react";
const Lottie = LottiePackage.default || LottiePackage;
```

#### **Props & State**

- **Local State:** None (stateless presentation component relying on parent scroll handlers).
- **Smooth Scroll Interface:**
  ```javascript
  const handleServicesScroll = (e) => {
    e.preventDefault();
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  ```

#### **Styling & Filter Matrix**

Because the legacy "Before" graphic contained embedded base64 PNG data, standard Lottie vector color manipulation props could not be applied. The component applies a client-side CSS filter matrix to recolor the graphic to match the `leather-medium` theme color (`#6A4E3D`):

```jsx
<Lottie
  animationData={beforeCarsData}
  loop={true}
  style={{
    filter: "sepia(100%) hue-rotate(340deg) saturate(60%) brightness(0.85)",
  }}
/>
```

---

### 2. Contact Component (`<Contact />`)

The `<Contact />` component handles lead capture via a serverless integration with Formspree.

#### **Form Contract & Data Schema**

The form posts data asynchronously via an HTTP POST endpoint without triggering page reloads.

| Field Name | HTML Element | Type    | Validation / Constraints |
| :--------- | :----------- | :------ | :----------------------- |
| `name`     | `<input>`    | `text`  | Required                 |
| `email`    | `<input>`    | `email` | Required, valid format   |
| `phone`    | `<input>`    | `tel`   | Optional                 |
| `message`  | `<textarea>` | `text`  | Required                 |

---

### 3. FAQ Component (`<FAQ />`)

The `<FAQ />` component renders an interactive accordion to answer common objection points.

#### **State Management**

- **State Hook:** `useState(null)` or `useState(index)`
- **Behavior:** Clicking an accordion header toggles its open/closed visibility state. If a user opens a new item, previously expanded items close automatically to maintain a clean UI layout.

---

## 🎨 Theme Properties & Design Tokens

Design tokens are managed in `tailwind.config.js` and referenced consistently throughout the component suite:

```javascript
theme: {
  extend: {
    colors: {
      'notebook-bg': '#F7F4EE',
      'notebook-card': '#ECE6D8',
      'leather-dark': '#3B2A20',
      'leather-medium': '#6A4E3D',
      'accent-blue': '#229AD6',
      'charcoal': '#262220',
    }
  }
}
```
