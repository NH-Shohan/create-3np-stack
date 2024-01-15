#!/usr/bin/env node
const { execSync } = require("child_process");
const { mkdirSync, chdir } = require("fs");
const { join } = require("path");

const createApp = (appName) => {
  if (!appName) {
    console.error("Please provide an app name.");
    process.exit(1);
  }

  // Step 1: Create frontend and backend folders
  mkdirSync(appName);
  chdir(appName);
  mkdirSync("frontend");
  mkdirSync("backend");

  // Step 2: Generate frontend project
  chdir("frontend");
  execSync("npx create-next-app .");

  // Step 3: Install frontend dependencies
  execSync(
    "npm install --save @nestjs-modules/mailer @nestjs/common @nestjs/config @nestjs/core @nestjs/platform-express @nestjs/typeorm @types/multer bcrypt class-transformer class-validator concurrently cors express-session nodemailer pg reflect-metadata rxjs typeorm"
  );

  // Step 4: Install frontend dev dependencies
  execSync(
    "npm install --save-dev @nestjs/cli @nestjs/schematics @nestjs/testing @types/cors @types/express @types/express-session @types/jest @types/node @types/supertest @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-prettier jest prettier source-map-support supertest ts-jest ts-loader ts-node tsconfig-paths typescript"
  );

  // Step 5: Generate backend project
  chdir("../backend");
  execSync("npx nest new .");

  // Step 6: Install backend dependencies
  execSync(
    "npm install --save axios js-cookie next react react-dom react-hook-form react-icons react-toastify tailwind-scrollbar"
  );

  // Step 7: Install backend dev dependencies
  execSync(
    "npm install --save-dev autoprefixer daisyui eslint eslint-config-next postcss tailwindcss"
  );
};

// Extract the app name from the command line arguments
const appName = process.argv[2];

// Create the app with the provided name
createApp(appName);
