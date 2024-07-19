---
to: packages/<%= name %>/tsconfig.json
---

{
  "$schema": "https://json.schemastore.org/tsconfig",
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "baseUrl": "./src",
    "target": "esnext",
    "lib": ["dom", "dom.iterable", "esnext"],
    "module": "ESNext",
    "jsx": "react-jsx",
    "noEmit": false,
    "incremental": true,
    "isolatedModules": true,
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "esModuleInterop": true
  },
  "exclude": ["**/node_modules", "**/.*/", "dist", "build"]
}
