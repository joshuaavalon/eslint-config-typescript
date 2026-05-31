import perfectionistPlugin from "eslint-plugin-perfectionist";
import { defineConfig } from "eslint/config";
import type { RulesConfig } from "@eslint/core";

const rules: RulesConfig = {
  "@perfectionist/sort-imports": [
    "error",
    {
      groups: [
        "builtin",
        "external",
        "internal",
        "parent",
        "sibling",
        "side-effect",
        "index",
        "side-effect-style",
        "type-builtin",
        "type-external",
        "type-internal",
        "type-parent",
        "type-sibling",
        "type-index",
        "unknown"
      ],
      ignoreCase: true,
      internalPattern: ["^~/.+", "^@/.+", "^#.+", "^#.*/.*"],
      newlinesBetween: "ignore",
      order: "asc",
      type: "alphabetical"
    }
  ],
  "@perfectionist/sort-interfaces": [
    "error",
    {
      ignoreCase: true,
      order: "asc",
      partitionByNewLine: false,
      type: "alphabetical"
    }
  ],
  "@perfectionist/sort-intersection-types": [
    "error",
    {
      groups: [],
      ignoreCase: true,
      order: "asc",
      partitionByNewLine: false,
      type: "alphabetical"
    }
  ],
  "@perfectionist/sort-object-types": [
    "error",
    {
      ignoreCase: true,
      order: "asc",
      partitionByComment: false,
      partitionByNewLine: false,
      type: "alphabetical"
    }
  ],
  "@perfectionist/sort-union-types": [
    "error",
    {
      groups: [
        "conditional",
        "function",
        "import",
        "intersection",
        "named",
        "keyword",
        "literal",
        "object",
        "operator",
        "tuple",
        "union",
        "nullish"
      ],
      ignoreCase: true,
      order: "asc",
      partitionByComment: false,
      partitionByNewLine: false,
      type: "alphabetical"
    }
  ]
};

const config = defineConfig({
  name: "@joshuaavalon/eslint-config-typescript/perfectionist",
  plugins: { "@perfectionist": perfectionistPlugin },
  rules
});

export default config;
