import jsConfig from "@joshuaavalon/eslint-config-javascript";
import { defineConfig } from "eslint/config";
import eslintConfig from "./eslint.js";
import perfectionistConfig from "./perfectionist.js";
import stylisticConfig from "./stylistic.js";

const config = defineConfig({
  extends: [
    jsConfig,
    eslintConfig,
    stylisticConfig,
    perfectionistConfig
  ],
  name: "@joshuaavalon/eslint-config-typescript"
});

export default config;
