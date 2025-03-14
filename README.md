# Power Drive Hydraulics Website

![GitHub](https://img.shields.io/github/license/MexMass/power-drive-hydraulics?style=flat-square)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=flat-square&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat-square&logo=react&logoColor=%2361DAFB)

A modern static website for Power Drive Hydraulics, showcasing hydraulic systems, motors, and industrial solutions. Built for performance and ease of maintenance.

**[Live Demo](https://bisque-eagle-269476.hostingersite.com/)**

![Website Screenshot](./screenshot.png)

## Roadmap

- [x] Frontend development (in progress)
- [ ] Backend integration
- [ ] API documentation
- [ ] Additional features (e.g., user authentication, admin panel)


## Features

- 🚀 **Responsive Design**: Mobile-first layout with TailwindCSS
- 🔍 **Product Catalog**: Display of hydraulics and motors
- 📞 **Contact Integration**: Direct email/phone links
- 🛠 **Modular Components**: Built with ShadCN/UI and React

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: TailwindCSS + ShadCN/UI Component Library
- **Build Tool**: Vite
- **Linting**: ESLint + Prettier
- **Hosting**: [Hostinger]

## Getting Started

### Prerequisites

- Node.js ≥18.x
- npm ≥9.x

### Installation

## Frontend

1. Clone the repository:
   ```bash
   git clone https://github.com/MexMass/power-drive-hydraulics.git
   cd power-drive-hydraulics```

2. Install dependencies:
    npm install

3. Configure environment variables (create .env):
    VITE_API_BASE_URL= # If applicable
    VITE_GA_TRACKING_ID= # Google Analytics

4. Start the development server:
    npm run dev

# Scripts
| Command           | Description                                       |
|-------------------|---------------------------------------------------|
| `npm run dev`     | Start local dev server (port 5173)                |
| `npm run build`   | Production build (output: `/dist`)                |
| `npm run lint`    | Run ESLint + TypeScript checks                    |
| `npm run preview` | Preview production build locally                  |


# Project Structure

src/
├─ assets/          # Images, icons, fonts
├─ components/      # Reusable React components
├─ config/          # Localization files, routes
├─ styles/          # Global CSS/Tailwind config
├─ types/           # TypeScript interfaces
└─ main.tsx         # App entry point

### License
Distributed under the MIT License. See ![LICENSE](./LICENSE) for details.


Built by **[MexMass](https://bisque-eagle-269476.hostingersite.com/)** • **[LinkedIn](https://www.linkedin.com/in/lukas-ramonas-215a2a14b/)** •