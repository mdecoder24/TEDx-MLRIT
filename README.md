# TEDx MLRIT Website

The TEDx MLRIT website is the public-facing site for the TEDx event hosted by MLR Institute of Technology. It presents event information, past editions, speakers, sponsors, the organizing team, and blog posts. It also includes ticket registration, speaker nomination, and sponsorship enquiry forms.

This repository is a fully static frontend. It has no backend, database, or environment variables.

## Contents

- [Overview](#overview)
- [Technology stack](#technology-stack)
- [Architecture and data flow](#architecture-and-data-flow)
- [Routes and features](#routes-and-features)
- [Project layout](#project-layout)
- [Local development](#local-development)
- [Build, test, and deploy](#build-test-and-deploy)
- [Maintaining site content](#maintaining-site-content)
- [Troubleshooting](#troubleshooting)
- [Operational and security notes](#operational-and-security-notes)

## Overview

The site is a responsive React single-page application (SPA). Vite serves it during development and produces static files for deployment. React Router renders the page for each URL; Vercel rewrites incoming paths to the SPA entry point so direct visits to routes such as `/speakers` work.

All displayed content is maintained in TypeScript data files and bundled with the frontend. The forms are static: when a visitor submits one, the browser checks the required fields and then shows a "Sent Successfully!" screen. **Submitted data is not sent or stored anywhere.**

There is no application API, database, server-side rendering, authentication flow, or CMS in this repository.

## Technology stack

| Area | Technology |
| --- | --- |
| Language | TypeScript |
| UI | React 19 |
| Routing | React Router 7 |
| Bundler and dev server | Vite 6 |
| Styling | Tailwind CSS 4 with the Tailwind Vite plugin |
| UI primitives and icons | Radix UI, locally maintained UI components, and Lucide React |
| Forms and notifications | Static React forms with a shared success screen; Sonner toast host |
| Hosting and SPA routing | Vercel |
| Code quality | ESLint and TypeScript compiler |

## Architecture and data flow

```text
Browser
  ├── Vite-built static React application
  │     ├── React Router → page and shared components
  │     ├── src/data/* → bundled event, speaker, team, sponsor, and blog content
  │     └── Static forms → "Sent Successfully!" screen (no data leaves the browser)

Vercel serves the static build and rewrites SPA paths to /
```

### Frontend

`src/main.tsx` mounts the application and global stylesheet. `src/App.tsx` defines the URL routes and shared header, footer, and toast host. Page components compose sections and forms from `src/components/`. The `@/` import alias points to `src/`.

### Content

Event history, speaker profiles, sponsor display entries, team members, and blog entries are imported from `src/data/` at build time. Changing those files and redeploying changes the public content; there is no content-management interface.

### Form submissions

`src/components/Register.tsx`, `SpeakerForm.tsx`, and `SponsorForm.tsx` are plain HTML forms. On submit, the browser validates the `required` fields, and the form then replaces itself with `src/components/SubmissionSuccess.tsx`. Nothing is sent to a server. To start collecting responses later, connect each form's `onSubmit` handler to a service of your choice.

### Deployment routing

`vercel.json` rewrites all incoming paths to `/`. This is required for browser-side routes to load when a visitor opens or refreshes a nested URL directly.

## Routes and features

| Path | Page |
| --- | --- |
| `/` | Home page: hero, about, editions, featured speakers, promo, team, and blog sections |
| `/blog` | Blog listing |
| `/speakers` | Speaker directory and speaker application link |
| `/sponsors` | Sponsor directory and sponsor enquiry link |
| `/team` | Full team directory |
| `/register` | Ticket registration form, including payment screenshot field |
| `/newspeaker` | Speaker nomination/application form |
| `/newsponsor` | Sponsor enquiry form |

The header's “Get Tickets” button currently links to the external Unifest ticket page. `/register` is also available as an internal registration form route.

## Project layout

```text
.
├── public/                 # Public images, logos, QR code, and promo media
├── src/
│   ├── components/         # Shared sections, cards, forms, and UI primitives
│   ├── data/               # Static content and shared types
│   ├── lib/                # Shared utility functions
│   ├── pages/              # Route-level page components
│   ├── App.tsx             # Shared application shell and route table
│   ├── index.css           # Global styles and Tailwind imports
│   └── main.tsx            # React entry point
├── vercel.json             # SPA rewrite configuration
└── package.json            # Dependencies and npm scripts
```

## Local development

### Prerequisites

- Node.js 20 LTS (Node.js 18 or newer is required by Vite 6).
- npm.

### Install and configure

1. Install dependencies:

   ```sh
   npm install
   ```

2. Start the development server:

   ```sh
   npm run dev
   ```

   Open the local URL printed by Vite (normally `http://localhost:5173`). Vite hot-reloads frontend changes.

## Build, test, and deploy

Available scripts:

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Type-check with `tsc -b` and create the production build in `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint across the repository |

No environment variables are needed. Connect the repository to Vercel and deploy. Vercel uses `vercel.json` to route deep links back to the SPA.

To verify a production build locally:

```sh
npm run build
npm run preview
```

## Maintaining site content

- **Events and past editions:** edit `src/data/events.ts`.
- **Speaker profiles:** edit `src/data/speakers.ts`; profile images are currently stored under `public/Sponsors/`.
- **Sponsor display entries:** edit `src/data/sponsors.ts`; confirm image paths match files under `public/`.
- **Blog cards and external article links:** edit `src/data/blogs.ts`.
- **Team directory and home-page team carousel:** edit `src/data/team.ts`.
- **Contact links and details:** edit `src/data/config.ts`.
- **Page composition and navigation:** edit `src/pages/`, `src/components/`, or the route table in `src/App.tsx` as appropriate.
- **Visual assets:** add or update files under `public/` and reference them with root-relative paths such as `/QR.jpeg`.

## Troubleshooting

| Symptom | Checks |
| --- | --- |
| A form does not show the success screen | A required field is empty or invalid; the browser highlights it. |
| A nested URL returns a not-found page after deployment | Confirm the hosting platform is using the repository's `vercel.json` SPA rewrite. |
| An image is missing | Check filename capitalization and ensure its path is relative to the `public/` directory (for example, `/Sponsors/bi.jpg`). |

## Operational and security notes

- Form submissions are not collected or stored. Anything visitors enter stays in their browser.
- The contents of the public directories and the event/team/blog datasets are shipped to every visitor as part of the website.
