### **Install TypeScript**
tsc --init

### **Customize `tsconfig.json`**
You can modify the file to suit your project's needs. For example:
- To specify output directory:
  ```json
  "outDir": "./dist"
  ```
- To enable source maps for debugging:
  ```json
  "sourceMap": true
  ```
- To set the TypeScript version to ES6:
  ```json
  "target": "es6"
  ```

### **Compile TypeScript to JavaScript**

ts-node file_name.ts