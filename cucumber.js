module.exports = {
  default: {
    require: [
      "ts-node/register", // allow TypeScript imports
      "src/step-definitions/**/*.ts",
      "src/utils/cucumber-timeout.ts",
    ],
    paths: ["src/features/**/*.feature"],
    publishQuiet: true,
  },
};
