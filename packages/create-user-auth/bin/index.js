#!/usr/bin/env node
import inquirer from "inquirer";
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
  console.log("🚀 Welcome to create-user-auth!");

  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "What is your project named?",
      default: "my-auth-app"
    },
    {
      type: "confirm",
      name: "typescript",
      message: "Would you like to use TypeScript?",
      default: true
    },
    {
      type: "confirm",
      name: "tailwind",
      message: "Would you like to use Tailwind CSS?",
      default: true
    },
    {
      type: "checkbox",
      name: "features",
      message: "Select features to include:",
      choices: ["Login", "Signup", "Forgot Password"]
    }
  ]);

  const projectPath = path.join(process.cwd(), answers.projectName);
  fs.mkdirSync(projectPath);

  const entryFile = answers.typescript ? "index.ts" : "index.js";

  fs.writeFileSync(
    path.join(projectPath, entryFile),
    `console.log("✅ Auth app created with features: ${answers.features.join(", ")}");`
  );

  console.log(`\n✨ Project created at: ${projectPath}`);
}

main();
