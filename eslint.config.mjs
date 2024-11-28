import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import lingui from "eslint-plugin-lingui";
import react from "eslint-plugin-react";
import reactCompiler from "eslint-plugin-react-compiler";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    files: ["src/**/*.ts", "src/**/*.tsx", "src/**/*.js", "src/**/*.jsx"],
    ignores: [
        "**/ios",
        "**/android",
        "**/*.lock",
        "**/.husky",
        "src/locale/locales/_build/",
        "src/locale/locales/**/*.js",
    ],
}, ...compat.extends(
    "@react-native",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-native-a11y/ios",
    "prettier",
), {
    plugins: {
        "@typescript-eslint": typescriptEslint,
        react,
        lingui,
        "simple-import-sort": simpleImportSort,
        "react-compiler": reactCompiler,
    },

    languageOptions: {
        parser: tsParser,
        ecmaVersion: "latest",
        sourceType: "module",
    },

    settings: {
        componentWrapperFunctions: ["observer"],
    },

    rules: {
        "react/no-unescaped-entities": 0,
        "react/prop-types": 0,
        "react-native/no-inline-styles": 0,

        "simple-import-sort/imports": ["error", {
            groups: [["^\\u0000"], ["^node:"], [
                "^(react\\/(.*)$)|^(react$)|^(react-native(.*)$)",
                "^(expo(.*)$)|^(expo$)",
                "^(?!(?:alf|components|lib|locale|logger|platform|screens|state|view)(?:$|\\/))@?\\w",
            ], [
                "^(?:#\\/)?(?:lib|state|logger|platform|locale)(?:$|\\/)",
                "^(?:#\\/)?view(?:$|\\/)",
                "^(?:#\\/)?screens(?:$|\\/)",
                "^(?:#\\/)?alf(?:$|\\/)",
                "^(?:#\\/)?components(?:$|\\/)",
                "^#\\/",
                "^\\.",
            ], ["^"]],
        }],

        "simple-import-sort/exports": "error",
        "react-compiler/react-compiler": "warn",
    },
}];