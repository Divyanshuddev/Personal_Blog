# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})

# Personal Blog

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Vercel Status](https://api.vercel.com/api/projects/vercel-project-id/badge)](https://vercel.com)

Personal Blog is a modern, responsive website built with React, TypeScript, and Vite. This project serves as a platform to share blogs, news, podcasts, and resources in an engaging format. The site is optimized for performance and deployed on Vercel.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Development](#development)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Overview

The Personal Blog project provides a space to publish articles, share personal insights, and highlight news and podcasts. With an emphasis on a clean UI and fast performance, the project leverages modern web technologies to deliver an engaging user experience on both desktop and mobile devices.

## Features

- **Responsive Design:** Optimized for various devices including desktops, tablets, and smartphones.
- **Dynamic Navigation:** Smooth navigation using React Router and Material UI components.
- **Type Safety:** Developed using TypeScript to minimize runtime errors and enhance code quality.
- **Fast Build Times:** Powered by Vite for rapid development and build processes.
- **Modern UI Components:** Utilizes Material UI for an attractive and consistent design.

## Technologies Used

- **React:** For building a dynamic user interface.
- **TypeScript:** For enhanced code quality and maintainability.
- **Vite:** As the build tool for fast and optimized development.
- **Material UI:** For pre-built, customizable UI components.
- **Vercel:** For seamless and scalable deployment.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Divyanshuddev/Personal_Blog.git
   cd Personal_Blog

```
