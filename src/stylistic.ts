import stylisticPlugin from "@stylistic/eslint-plugin";
import { defineConfig } from "eslint/config";
import type { PrefixRules } from "@joshuaavalon/eslint-config-javascript/utils";
import type { UnprefixedRuleOptions } from "@stylistic/eslint-plugin";

type TypeScriptRules = `@stylistic/type-${string}` & keyof PrefixRules<UnprefixedRuleOptions, "@stylistic/">;
type CustomTypeScriptRules = "@stylistic/lines-around-comment";

const rules: Pick<PrefixRules<UnprefixedRuleOptions, "@stylistic/">, CustomTypeScriptRules | TypeScriptRules> = {
  "@stylistic/lines-around-comment": [
    "error",
    {
      afterHashbangComment: true,
      allowArrayStart: true,
      allowBlockStart: true,
      allowClassStart: true,
      allowEnumStart: true,
      allowInterfaceStart: true,
      allowModuleStart: true,
      allowObjectStart: true,
      allowTypeStart: true,
      beforeBlockComment: true
    }
  ],
  "@stylistic/type-annotation-spacing": ["error"],
  "@stylistic/type-generic-spacing": ["error"],
  "@stylistic/type-named-tuple-spacing": ["error"]
};

const config = defineConfig({
  name: "@joshuaavalon/eslint-config-typescript/stylistic",
  plugins: { "@stylistic": stylisticPlugin },
  rules
});

export default config;
