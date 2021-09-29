import vue from 'rollup-plugin-vue'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { getBabelOutputPlugin } from '@rollup/plugin-babel'
import pkg from './package.json'

const isEikBuild = !!process.env.eik
const outputFile = isEikBuild ? './dist/eik/index.js' : './dist/fabric-vue'
const browsers = 'supports es6-module and > 2% in NO and not dead'
const external = [
  'vue',
  ...(isEikBuild ? [] : Object.keys(pkg.dependencies))
]

const plugins = [
  vue(),
  getBabelOutputPlugin({ presets: [['@babel/preset-env', { targets: browsers }]] }),
  nodeResolve(),
  commonjs(),
]

export default {
  input: 'index.js',
  output: { file: outputFile, format: 'es', exports: 'named' },
  plugins, external,
}