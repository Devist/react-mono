---
to: packages/<%= name %>/package.json
---

{
  "name": "<%= locals.company || `@ssg` %>/<%= name %>",
  "private": true,
  "version": "0.0.0",
  "module": "dist/index.mjs.js",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "dev": "tsup --watch",
    "build": "tsup --target es5",
    "lint": "eslint src --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",
    "clean": "rimraf ./dist"
  },
  "dependencies": {
    "@chakra-ui/icons": "^1.1.7",
    "@chakra-ui/react": "^1.8.8",
    "@chakra-ui/system": "^1.12.1",
    "@chakra-ui/theme-tools": "^1.3.6",
    "react": "17.0.2",
    "react-dom": "17.0.2"
  },
  "devDependencies": {
    "@ssg/eslint-config-bases": "workspace:^",
    "@types/react": "17.0.2",
    "@types/react-dom": "17.0.2",
    "@vitejs/plugin-react": "^4.0.0",
    "eslint": "7.32.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.3.4",
    "rimraf": "^3.0.2",
    "tsup": "^6.7.0",
    "typescript": "5.2.2",
    "vite": "^4.3.9",
    "vitest": "^0.32.0"
  },
  "peerDependencies": {
    "next": "12.0.3"
  }
}
