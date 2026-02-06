# Shoe Fit Biomechanics

> **"It started with a simple question: Why does the Puma Rider FV feel like a cloud, while the Lacoste L003 Neo Tech feels like a vice?"**

## The Story

This project wasn't born from a desire to build a website. It was born from numbness. 

I had two pairs of shoes. My **Puma Rider FV** (size 9) was an effortless daily driver—soft, forgiving, invisible on the foot. My **Lacoste L003 Neo Tech** (also size 9) was a different beast. Despite being a "tech" shoe, it created a progressive, suffocating compression across the midfoot that eventually numbed my toes.

Most advice I found was generic: "Break them in," "size up," or "maybe you have wide feet." none of it explained the *physics* of what was happening.

I decided to stop guessing and start engineering. I dove into the mechanics of last geometry, volume distribution, and material compliance. I discovered that the Lacoste's "elasticated adjustment system"—designed for lockdown—was failing to accommodate the natural 3-5% volume swelling of the foot during the gait cycle. It was a perfect storm of **volume mismatch** and **nerve compression**.

I realized there wasn't a single, accessible resource that explained these invisible mechanics with the depth of a technical paper but the clarity of a story. So, I built this.

## What This Is

**Shoe Fit Biomechanics** is an interactive research documentary exploring the hidden engineering behind foot discomfort. 

It ignores marketing fluff in favor of **"Clinical Minimalism"**—using precise visualizations, biomechanical data, and scrollytelling to explain exactly how shoes interact with feet.

## Key Research Areas

- **Dynamic Foot Changes**: How feet swell and spread during the gait cycle.
- **Pressure Mapping**: The physics of "squeeze zones" and nerve pathways (Morton's neuroma mechanics).
- **Last Geometry**: How invisible variables like toe box taper and ball girth dictate fit.
- **Material Compliance**: The difference between static measurement and dynamic load.

## Tech Stack

Built for immersion and performance:

- **Framework**: [Next.js 14](https://nextjs.org) (App Router, TypeScript)
- **Storytelling Engine**: [Scrollama](https://github.com/russellsamora/scrollama) for step-based narrative triggers.
- **Micro-Interactions**: [Framer Motion](https://www.framer.com/motion/) for "Cash.app-style" subtlety.
- **Data Visualization**: [D3.js](https://d3js.org/) for biomechanical heatmaps.
- **Layout**: Full-screen "Reuters-style" overlays.

## Getting Started

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/shoe-fit-biomechanics.git
    cd shoe-fit-biomechanics
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) to see the mechanics unfold.
