import vue from "@vitejs/plugin-vue";
import drnm from 'drnm'
import path from 'path'
import fs from 'fs'

const __dirname = drnm(import.meta.url)
const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
const alias = Object.entries(pkg.imports).reduce((acc, [k, v]) => {
  acc[k] = path.resolve(path.join(__dirname, '..', v))
  return acc
}, {})

/**
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [vue({
    template: {
      compilerOptions: {
        // treat all tags with a dash as custom elements
        isCustomElement: tag => tag.includes('f-docs-')
      }
    }
  })],
  server: { host: "0.0.0.0", port: 3003 },
  resolve: { alias }
};
