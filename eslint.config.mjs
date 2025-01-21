import antfu from "@antfu/eslint-config"

export default antfu(
  {
    type: "app",
    typescript: {
      overrides: {
        "ts/consistent-type-definitions": "off",
      },
    },
    formatters: true,
    stylistic: {
      semi: false,
      indent: 2,
      quotes: "double",
    },
  },
  {
    rules: {
      "style/arrow-parens": "off",
      "ts/no-unused-vars": "error",
      "ts/no-explicit-any": "error",
      "max-len": ["error", { code: 88 }],
      "no-unused-expressions": "error",
      "prefer-const": "error",
      "unicorn/filename-case": [
        "error",
        {
          case: "kebabCase",
          ignore: ["README.md"],
        },
      ],
    },
  },
)
