# Flyrank AI Front-end Engineering Internship Capstone Project

This repository contains the capstone project for the Flyrank AI Front-end Engineering Internship.

![Project Screenshot](https://via.placeholder.com/800x400.png?text=Project+Screenshot)

## Project Structure

## About The Project

This monorepo consists of two portals:

This project is a booking system built with React, Next.js, Vite, and TypeScript. It serves as a demonstration of the skills and knowledge acquired during the Flyrank AI Front-end Engineering Internship.

1. **`instructor-portal`**: An instructor-facing application built with React 19, Vite, and TypeScript.
2. **`student-portal`**: A student-facing portal with booking flow built with Next.js 16 (App Router), React 19, and Tailwind CSS v4.

```text
flyrank-frontend-capstone/
├── instructor-portal/     # Vite + React SPA
├── student-portal/        # Next.js App Router portal
├── docs/                  # Project documentation and references
└── package.json           # Root npm workspaces configuration
```

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```
- Node.js (v20+ recommended)
- npm (v10+ recommended)

### Installation

1. Clone the repo
1. Clone the repository:
   ```sh
   git clone https://github.com/your_username_/flyrank-frontend-capstone.git
   git clone https://github.com/aya-y-aya/flyrank-frontend-capstone.git
   cd flyrank-frontend-capstone
   ```
1. Navigate to the project directory
1. Install dependencies for both portals:
   ```sh
   cd flyrank-frontend-capstone/my-app
   ```
1. Install NPM packages
   ```sh
   npm install
   ```

### Running the Application

### Running the Applications

To run the application in development mode, use the following command:
You can run each portal either from the root using workspace scripts or by navigating into the subfolder:

```sh
npm run dev
```

#### From the root directory:

This will start the development server at `http://localhost:5173`.

- **Run Instructor Portal** (Vite on `http://localhost:5173`):

To build the application for production, use the following command:

```sh
npm run dev:instructor
```

```sh
npm run build
```

- **Run Student Portal** (Next.js on `http://localhost:3000`):

  ```sh
  npm run dev:student
  ```

- **Build all portals**:

  ```sh
  npm run build
  ```

- **Lint all portals**:
  ```sh
  npm run lint
  ```

#### Or run from individual directories:

- **Instructor Portal**:

  ```sh
  cd instructor-portal
  npm run dev
  ```

- **Student Portal**:
  ```sh
  cd student-portal
  npm run dev
  ```

## Technologies Used

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Oxlint](https://oxc-project.github.io/docs/guide/linter.html)
- **Instructor Portal**: [React 19](https://react.dev/), [Vite](https://vitejs.dev/), [TypeScript](https://www.typescriptlang.org/), [Oxlint](https://oxc-project.github.io/)
- **Student Portal**: [Next.js 16](https://nextjs.org/), [React 19](https://react.dev/), [Tailwind CSS v4](https://tailwindcss.com/), [TypeScript](https://www.typescriptlang.org/), [ESLint](https://eslint.org/)

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact

Your Name - vargastanya76@example.com
Tanya Vargas - vargastanya76@example.com

Project Link: [https://github.com/aya-y-aya/flyrank-frontend-capstone]
Project Link: [https://github.com/aya-y-aya/flyrank-frontend-capstone](https://github.com/aya-y-aya/flyrank-frontend-capstone)
