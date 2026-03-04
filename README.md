# The Indulge Place (TIP) Website

A high-end, immersive luxury website built with Next.js, Tailwind CSS, and React Three Fiber.

## Features
- **Cinematic Hero**: Parallax video background with animated entry.
- **3D Walkthrough**: Interactive building model using `react-three-fiber` and `useFrame` animations.
- **Responsive Design**: Fully responsive layout with mobile menu and smooth scrolling (Lenis).
- **Design System**: Custom "Deep Charcoal & Gold" theme with Playfair Display & Inter fonts.

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

3. **Build for Production**:
   ```bash
   npm run build
   npm start
   ```

## Key Components

- **`components/3d/BuildingModel.tsx`**: The interactive 3D model. Hover over floors to see labels.
- **`components/3d/SceneWrapper.tsx`**: Client wrapper for 3D scene to handle SSR.
- **`app/globals.css`**: Global styles and Tailwind theme variables.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS, CSS Modules
- **3D**: Three.js, React Three Fiber, Drei
- **Animation**: Framer Motion
