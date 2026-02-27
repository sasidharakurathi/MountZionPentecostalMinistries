# Mount Zion Pentecostal Ministries - Next-Gen Web Application

![React Version](https://img.shields.io/badge/React-18-blue.svg)
![React Router](https://img.shields.io/badge/React_Router-v6-red.svg)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-fuchsia.svg)
![React Hook Form](https://img.shields.io/badge/React_Hook_Form-7-ec5990.svg)
![Axios](https://img.shields.io/badge/Axios-1.x-5a29e4.svg)
![i18next](https://img.shields.io/badge/i18next-25-26a69a.svg)

A high-performance, responsive, and robust full-stack ready React application built for the Mount Zion Pentecostal Ministries. This application was architected from the ground up to follow enterprise-level scalable design patterns and represents a significant upgrade from legacy server-rendered architectures.

## ✨ Key Features

- **Blazing Fast Performance**: Implements React `lazy()` and `Suspense` for complete code-splitting and asset chunking, resulting in near-instant First Contentful Paint.
- **Fluid Animations**: High-end micro-interactions and route transition tracking via `framer-motion` `AnimatePresence`.
- **Global State Management**: Context API integrated with custom hooks (`useGlobalState`) handles cross-cutting concerns like Dark/Light Theme selection globally.
- **Enterprise Form Handling**: Secure and accessible contact workflows powered by `react-hook-form` coupled with `yup` object schemas for strict data validation without excessive re-renders.
- **Secure Admin Dashboard**: Features a completely standalone, mock-protected `/admin` routing architecture with conditional layout rendering (sidebar-driven) and stateful CRUD operations.
- **SEO & Social Optimization**: Implements `react-helmet-async` to dynamically inject metadata, Title tags, Open Graph (OG) tags, and Twitter Cards to massively boost link searchability and social sharing appearance.
- **Internationalization (i18n)**: Fully integrated `react-i18next` with a beautiful floating language toggle to swap between English and Telugu on the fly.
- **Centralized API Network**: Axios network layer decoupled into a dedicated `services/api.js` featuring robust Request/Response interception for auth token injection and uniform error handling.

## 📂 Advanced Folder Architecture

```text
src/
├── assets/           # Static images, icons, and SVGs
├── components/       # Component-Driven Development
│   ├── common/       # Reusable UI atoms (Buttons, ErrorBoundary, SEO, AnimateOnScroll)
│   ├── layout/       # App-wide structural frames (Header, Footer, LayoutWrapper)
│   └── sections/     # Complex domain-specific blocks (Hero, Worship, Contact, etc.)
├── context/          # Global Context Providers (Theme, Auth, Sermons)
├── hooks/            # Custom React Hooks (useGlobalState)
├── locales/          # i18n JSON Dictionary files (en/te)
├── pages/            # View-level route orchestrators (Home, Admin, NotFound)
├── services/         # External integrations (api.js with Axios interceptors)
├── App.js            # Router mapping & Transition wrapper
├── index.js          # React DOM root and top-level Providers
└── index.css         # Global CSS Reset, CSS Variables (Design Tokens)
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation
1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/mzpm-web-app.git
   cd mzpm-web-app
   ```
2. Install dependencies with legacy peer resolution (due to create-react-app compat)
   ```bash
   npm install --legacy-peer-deps
   ```
3. Set up environment variables
   Create a `.env` in the root and add:
   ```env
   REACT_APP_API_URL=http://localhost:5000/api
   ```
4. Start the development server
   ```bash
   npm start
   ```

## 🔐 Admin Dashboard

The application features a secure, conditional admin portal available at `/admin`.
- **Layout Interception**: Automatically drops the public Header/Footer schemas in favor of a SaaS-style persistent sidebar.
- **CRUD Capable**: Designed to manage sermons, upcoming events, and user contact messages.
- *Currently running in mock-protected mode for presentation purposes. Production will verify JWTs through the Axios API Interceptor.*

## 📈 Performance & Error Tracking

- Native lazy-loading via `loading="lazy"` on all `<img />` and `<iframe />` DOM nodes.
- Top-level `ErrorBoundary` class component ensures React render-crashing bubbles into a fallback graceful screen instead of a white page of death.
- Array rendering and heavy calculations stabilized tightly using `React.useMemo` and `React.useCallback` natively to preserve memory heaps across fast routing.

---

*Designed and Developed dynamically for modern audiences.*
