import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Use Next.js + TypeScript base configs
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],

    rules: {
      // Disable escaping errors for apostrophes and quotes in JSX text
      "react/no-unescaped-entities": "off",

      // Allow custom fonts (since you use Geist/Geist_Mono)
      "@next/next/no-page-custom-font": "off",

      // Optional: reduce noisy warnings
      "react-hooks/exhaustive-deps": "warn", // instead of error
    },
  },
];

export default eslintConfig;
