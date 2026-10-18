# TEDx MLRIT Website

The TEDx MLRIT website is the public-facing site for the TEDx event hosted by MLR Institute of Technology. It presents event information, past editions, speakers, sponsors, the organizing team, and blog posts. Visitors can also submit ticket registrations, speaker nominations, and sponsorship enquiries.

This repository contains the frontend application and the SQL needed to set up its Supabase backend. It does not contain a separate application server.

## Contents

- [Overview](#overview)
- [Technology stack](#technology-stack)
- [Architecture and data flow](#architecture-and-data-flow)
- [Routes and features](#routes-and-features)
- [Project layout](#project-layout)
- [Local development](#local-development)
- [Supabase setup](#supabase-setup)
- [Build, test, and deploy](#build-test-and-deploy)
- [Maintaining site content](#maintaining-site-content)
- [Troubleshooting](#troubleshooting)
- [Operational and security notes](#operational-and-security-notes)

## Overview

The site is a responsive React single-page application (SPA). Vite serves it during development and produces static files for deployment. React Router renders the page for each URL; Vercel rewrites incoming paths to the SPA entry point so direct visits to routes such as `/speakers` work.

Most displayed content is maintained in TypeScript data files and bundled with the frontend. The forms use Supabase directly from the browser:

- Ticket registrations are inserted into `public.registrations`.
- Speaker applications are inserted into `public.speakers`.
- Sponsor enquiries are inserted into `public.sponsors`.
- Payment screenshots are uploaded to the private `payment-screenshots` Storage bucket. The registration row stores the uploaded object path.

There is no application API, server-side rendering, authentication flow, or CMS in this repository.

## Technology stack

| Area | Technology |
| --- | --- |
| Language | TypeScript |
| UI | React 19 |
| Routing | React Router 7 |
| Bundler and dev server | Vite 6 |
| Styling | Tailwind CSS 4 with the Tailwind Vite plugin |
| UI primitives and icons | Radix UI, locally maintained UI components, and Lucide React |
| Forms and notifications | React components with Sonner toast notifications |
| Backend services | Supabase JavaScript client (Postgres and Storage) |
| Hosting and SPA routing | Vercel |
| Code quality | ESLint and TypeScript compiler |

## Architecture and data flow

```text
Browser
  ├── Vite-built static React application
  │     ├── React Router → page and shared components
  │     └── src/data/* → bundled event, speaker, team, sponsor, and blog content
  └── Supabase JavaScript client
        ├── Postgres inserts → registrations / speakers / sponsors
        └── Storage upload → private payment-screenshots bucket

Vercel serves the static build and rewrites SPA paths to /
```

### Frontend

`src/main.tsx` mounts the application and global stylesheet. `src/App.tsx` defines the URL routes and shared header, footer, and toast host. Page components compose sections and forms from `src/components/`. The `@/` import alias points to `src/`.

### Content

Event history, speaker profiles, sponsor display entries, team members, and blog entries are imported from `src/data/` at build time. Changing those files and redeploying changes the public content; there is no content-management interface.

### Form submissions

The form components call the Supabase client in `src/data/supabase.ts` from the visitor's browser. Supabase Row Level Security (RLS) policies in `supabase/schema.sql` allow the `anon` role to insert form submissions, but do not grant it read access. Registration first uploads the payment screenshot and then inserts its object path into the registration row. Review submissions in the Supabase dashboard using an appropriately privileged account.

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
| `/register` | Ticket registration form, including payment screenshot upload |
| `/newspeaker` | Speaker nomination/application form |
| `/newsponsor` | Sponsor enquiry form |

The header's “Get Tickets” button currently links to the external Unifest ticket page. `/register` is also available as an internal registration form route.

## Project layout

```text
.
├── public/                 # Public images, logos, QR code, and promo media
├── src/
│   ├── components/         # Shared sections, cards, forms, and UI primitives
│   ├── data/               # Static content, shared types, and Supabase client
│   ├── lib/                # Shared utility functions
│   ├── pages/              # Route-level page components
│   ├── App.tsx             # Shared application shell and route table
│   ├── index.css           # Global styles and Tailwind imports
│   └── main.tsx            # React entry point
├── supabase/
│   └── schema.sql          # Database tables, RLS, and Storage bucket policy
├── .env.example            # Required Vite/Supabase variable names
├── vercel.json             # SPA rewrite configuration
└── package.json            # Dependencies and npm scripts
```

## Local development

### Prerequisites

- Node.js 20 LTS (Node.js 18 or newer is required by Vite 6).
- npm.
- A Supabase project for form submissions and payment screenshot uploads.

### Install and configure

1. Install dependencies:

   ```sh
   npm install
   ```

2. Create a local environment file from the example:

   ```sh
   cp .env.example .env.local
   ```

   On Windows PowerShell, use:

   ```powershell
   Copy-Item .env.example .env.local
   ```

3. Set the Supabase project URL and **anon/public key** in `.env.local`:

   ```dotenv
   VITE_SUPABASE_URL=https://<project-ref>.supabase.co
   VITE_SUPABASE_ANON_KEY=<anon-public-key>
   ```

   Find these values in your Supabase project's API settings. The Vite prefix is required for the browser application to read them. Never put a Supabase `service_role` key in a `VITE_` variable or in frontend code.

4. Set up the Supabase database and Storage bucket as described in [Supabase setup](#supabase-setup).

5. Start the development server:

   ```sh
   npm run dev
   ```

   Open the local URL printed by Vite (normally `http://localhost:5173`). Vite hot-reloads frontend changes.

The application throws an error when the Supabase URL or anon key is missing. The production build also checks for both values, so configure them even if you only intend to build the static site.

## Supabase setup

1. Create a Supabase project.
2. Open the SQL Editor in that project and run [`supabase/schema.sql`](./supabase/schema.sql) against a **fresh project**. It creates:
   - `public.registrations`, `public.speakers`, and `public.sponsors`.
   - RLS policies allowing anonymous inserts into those tables.
   - A private Storage bucket named `payment-screenshots`.
   - A Storage policy that allows anonymous uploads to that bucket.
3. Copy the project URL and anon/public key into `.env.local`.
4. Submit a test speaker/sponsor application and a registration to confirm that the policies and Storage bucket are configured correctly. Check the tables and bucket in the Supabase dashboard.

The SQL is intended for a fresh project: table and policy creation is not written as a repeatable migration. Do not rerun it against an already configured project without first checking which objects exist.

### Data written by the forms

| Table / bucket | Data |
| --- | --- |
| `registrations` | Contact details, college and student details where applicable, creation time, and the screenshot object path |
| `speakers` | Applicant/nominee contact details, talk proposal, biography, related link, and content-guideline consent |
| `sponsors` | Contact and company details, website/social link, sponsorship category, support, brand, and follow-up preferences |
| `payment-screenshots` | Payment screenshot files; the bucket is private |

The client uses a random UUID filename for uploaded screenshots. The database stores the object path, not a public URL. Anonymous visitors are not given policies to read/list these uploaded files or select submission rows.

## Build, test, and deploy

Available scripts:

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Type-check with `tsc -b` and create the production build in `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint across the repository |

Before deploying, configure `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in the hosting provider's environment variables. For Vercel, set them in **Project Settings → Environment Variables** for the environments in which you build, then deploy. Vercel uses `vercel.json` to route deep links back to the SPA.

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
- **Database structure or policies:** update `supabase/schema.sql` and apply a deliberate database migration in the Supabase project. For an existing deployment, avoid replacing data by rerunning the fresh-project setup script.

## Troubleshooting

| Symptom | Checks |
| --- | --- |
| Build reports missing Supabase environment variables | Ensure both required variables are present for the current shell/build or configured for the selected Vercel deployment environment. Restart Vite after editing `.env.local`. |
| A form fails to submit | Check the browser console and Supabase logs. Verify the schema was applied, the correct project URL/key are configured, and the table's anon insert policy exists. |
| Registration fails at screenshot upload | Verify the `payment-screenshots` bucket exists, is private, and has the anon insert policy from `supabase/schema.sql`. |
| A nested URL returns a not-found page after deployment | Confirm the hosting platform is using the repository's `vercel.json` SPA rewrite. |
| An image is missing | Check filename capitalization and ensure its path is relative to the `public/` directory (for example, `/Sponsors/bi.jpg`). |

## Operational and security notes

- The Supabase anon key is expected to be exposed in the browser. It is safe only with appropriate RLS and Storage policies in place.
- Never expose a Supabase service-role key in this frontend, `.env.example`, or a client-side build variable. The service-role key bypasses RLS.
- Keep `.env.local` out of version control. Only use public project configuration in `VITE_` variables.
- Public users can submit rows and upload screenshots under the configured policies. Restrict access further with server-side validation, rate limiting, file restrictions, or CAPTCHA if abuse prevention becomes necessary; none is implemented by this frontend.
- Admin access to submissions should be handled through the Supabase dashboard or a trusted server-side process, not by broadening anonymous read policies.
- The contents of the public directories and the event/team/blog datasets are shipped to every visitor as part of the website.
