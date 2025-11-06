# Habib's Portfolio

This repository contains the source code for Habib's personal portfolio built with [React](https://react.dev) and managed with [Nx](https://nx.dev). The site showcases projects, experience, and contact information.

## Goals

- Present Habib's work and background.
- Explore modern React/Next.js tooling.
- Serve as a base for future portfolio iterations.

## Setup

1. Install dependencies:

   ```sh
   npm install
   ```

2. Start the development server:

   ```sh
   npx nx dev cv
   ```

   The app runs at <http://localhost:4200/> by default.

## Build and Deploy

Create an optimized production build and export static files:

```sh
npm run build:static
```

The output is generated in `apps/cv/out` and can be deployed to any static hosting service. To preview the exported site locally, run:

```sh
npm run serve:static
```

When deploying, configure your host (e.g., Render) to publish the `apps/cv/out` directory.

## Contributing

Issues and pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.

