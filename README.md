# Typescript Practice

🌐 [🇺🇸 English](README.md) | [🇪🇸 Español](README_ES.md)

## Overview
This project uses **TypeScript** with `.mts` files and **Node.js 22+`.  
The `dev-loader.mjs` file is used to enable **top-level await** and **ESM support** during development without compiling TypeScript first.

## dev-loader.mjs
**Purpose:**  
Registers `ts-node/esm` with Node's stable `register()` API.  
Replaces the old experimental `--loader ts-node/esm` flag.  
Allows running `.mts` files directly in development.

**Usage:**
```bash
pnpm run fetch
