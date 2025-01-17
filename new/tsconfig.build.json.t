{
  "$schema": "https://json.schemastore.org/tsconfig",
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "jsx": "react-jsx",
    "incremental": false // dts with tsup requires rootDir if incremental (which does not work well aliases)
  },
  "exclude": ["**/*.stories.tsx", "**/*.stories.ts", "**/*.stories.mdx", ".storybook/**"]
}
