
import inquirer from "inquirer";

async function run() {
  console.log("🚀 Welcome to Create User Auth!");

  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "What is your project named?",
      default: "my-app"
    },
    {
      type: "confirm",
      name: "typescript",
      message: "Would you like to use TypeScript?",
      default: true
    },
    {
      type: "list",
      name: "features",
      message: "Which feature would you like to add?",
      choices: ["Login", "Signup", "Forgot Password"]
    }
  ]);

  console.log("\n✅ Your selections:");
  console.log(answers);
}

run();
