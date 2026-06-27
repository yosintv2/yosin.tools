import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://singhyogendra.com.np',
  publicDir: 'public',
  output: 'static',
  build: {
    assets: 'assets',
    inlineStylesheets: 'auto'
  },
  vite: {
    build: {
      cssMinify: 'lightningcss'
    }
  }
});
