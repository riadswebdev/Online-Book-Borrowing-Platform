# Online Book Borrowing Platform

A modern, high-performance web application designed for book lovers to discover, search, and borrow books online. Built with a focus on speed, security, and a premium user experience.

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-blue?logo=react)](https://react.dev/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)](https://mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwind-css)](https://tailwindcss.com/)
[![Better Auth](https://img.shields.io/badge/Better%20Auth-Enabled-6366F1)](https://better-auth.com/)

## Live Demo

- **Live Site:** [online-book-borrowing-platform-delta.vercel.app](https://online-book-borrowing-platform-delta.vercel.app)
- **GitHub:** [Online-Book-Borrowing-Platform](https://github.com/riadswebdev/Online-Book-Borrowing-Platform)

## Screenshot

![Online Book Borrowing Platform](https://ik.imagekit.io/i455l48ls/Screenshot%202026-08-05%20131553.png)

## Project Overview

The Online Book Borrowing Platform bridges the gap between readers and knowledge. It provides a seamless interface for users to browse a vast library, filter by categories, and manage their personal reading profile with a secure, responsive experience across all devices.

## Key Features

- **Secure Authentication** — Email/Password and Google Social Login powered by Better Auth
- **Advanced Search** — Instant search to find books by title or author
- **Category Filtering** — Filter books by genre (Sci-Fi, History, Business, and more)
- **User Profiles** — View and update name or profile picture
- **Fully Responsive** — Optimized for mobile, tablet, and desktop with Tailwind CSS v4
- **Modern UI/UX** — HeroUI components with smooth transitions and glassmorphism effects
- **Fast Performance** — Next.js Server Components for fast data fetching and SEO

## Tech Stack

| Category | Technologies |
|----------|-------------|
| Framework | Next.js 16 (App Router), React 19 |
| Authentication | Better Auth, Google OAuth |
| Database | MongoDB |
| Styling | Tailwind CSS v4 |
| UI | HeroUI, Swiper, React Hot Toast |

## Dependencies

| Package | Purpose |
| :--- | :--- |
| `next`, `react`, `react-dom` | Core framework |
| `better-auth`, `@better-auth/mongo-adapter` | Authentication |
| `@heroui/react`, `@heroui/styles` | UI components |
| `mongodb` | Database driver |
| `tailwindcss` | Styling |
| `react-fast-marquee` | Scrolling book banners |
| `react-hot-toast` | Notifications |
| `swiper` | Book sliders |
| `@gravity-ui/icons`, `@iconify/react`, `react-icons` | Icons |

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/riadswebdev/Online-Book-Borrowing-Platform.git
cd Online-Book-Borrowing-Platform
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment variables

Create a `.env` file in the root directory:

```env
BETTER_AUTH_SECRET=your_secret_key
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_APP_URL=http://localhost:3000
BETTER_AUTH_URI=your_mongodb_uri
CLIENT_ID=your_google_oauth_client_id
CLIENT_SECRET=your_google_oauth_client_secret
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run start` — Start production server
- `npm run lint` — Run ESLint

## Author

**Md Riad Shekh**

- Email: [riadswebdev@gmail.com](mailto:riadswebdev@gmail.com)
- Phone: [+8801314674108](tel:+8801314674108)
- LinkedIn: [linkedin.com/in/riad-shekh](https://linkedin.com/in/riad-shekh)
