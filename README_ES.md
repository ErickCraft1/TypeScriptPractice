# Practicas Typescript

🌐 [🇪🇸 Español](README_ES.md) | [🇺🇸 English](README.md)

## Resumen
Este proyecto utiliza **TypeScript** con archivos `.mts` y **Node.js 22+`.  
El archivo `dev-loader.mjs` se usa para habilitar **top-level await** y soporte **ESM** durante el desarrollo sin compilar TypeScript primero.

## dev-loader.mjs
**Propósito:**  
Registra `ts-node/esm` usando la API estable `register()` de Node.  
Reemplaza la antigua bandera experimental `--loader ts-node/esm`.  
Permite ejecutar archivos `.mts` directamente en desarrollo.

**Uso:**
```bash
pnpm run fetch