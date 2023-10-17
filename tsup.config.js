import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['app.js'],
  splitting: true,
  noExternal: ['fastify', 'fastify-plugin', '@fastify/autoload',"hashids","dotenv"],
  sourcemap: false,
  outDir: 'distv2',
  clean: true,
})