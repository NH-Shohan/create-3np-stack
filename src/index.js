#!/usr/bin/env node
const shell = require('shelljs');

const appName = process.argv[2];

if (!appName) {
  console.error("Please provide an app name.");
  process.exit(1);
}

// Step 1: Create frontend and backend folders
shell.exec(`mkdir ${appName} && cd ${appName} && mkdir frontend backend`);

// Step 2: Generate frontend project
shell.cd(`${appName}/frontend`);
shell.exec("npx create-next-app .");

// Step 3: Install frontend dependencies
shell.exec(
  "npm install --save @nestjs-modules/mailer @nestjs/common @nestjs/config @nestjs/core @nestjs/platform-express @nestjs/typeorm @types/multer bcrypt class-transformer class-validator concurrently cors express-session nodemailer pg reflect-metadata rxjs typeorm"
);

// Step 4: Install frontend dev dependencies
shell.exec(
  "npm install --save-dev @nestjs/cli @nestjs/schematics @nestjs/testing @types/cors @types/express @types/express-session @types/jest @types/node @types/supertest @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-prettier jest prettier source-map-support supertest ts-jest ts-loader ts-node tsconfig-paths typescript"
);

// Step 5: Generate backend project
shell.cd("../backend");
shell.exec("npx nest new .");

// Step 6: Install backend dependencies
shell.exec(
  "npm install --save axios js-cookie next react react-dom react-hook-form react-icons react-toastify tailwind-scrollbar"
);

// Step 7: Install backend dev dependencies
shell.exec(
  "npm install --save-dev autoprefixer daisyui eslint eslint-config-next postcss tailwindcss"
);
