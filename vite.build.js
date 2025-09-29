import path, { resolve, dirname } from "path";
import { defineConfig } from "vite";
import liveReload from 'vite-plugin-live-reload';
import topLevelAwait from "vite-plugin-top-level-await";
import glsl from 'vite-plugin-glsl';


import lightningcss from 'vite-plugin-lightningcss';


export default defineConfig({
  // root: "src",
  // base: 'replacewithdot',
  server: {
    port: 1234,
    strictPort: true,
  },
  resolve: {
    alias: {
      '~root': resolve(__dirname, './public'),
      '@/': `${path.resolve(__dirname, '/front')}/`,
      '@style': `${path.resolve(__dirname, '/front/style🖌️🖌️🖌️')}`,
      '@comps': `${path.resolve(__dirname, '/front/comps🦾🦾🦾')}`,
      '@atoms': `${path.resolve(__dirname, '/front/atoms🧿🧿🧿')}`,
      '@views': `${path.resolve(__dirname, '/front/views👁️👁️👁️')}`,
    },
  },
  build: {
    rollupOptions: {
      target: 'esnext',
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: (assetInfo) => {
          // console.log(assetInfo.name)
          let extType = assetInfo.name.split('.').at(1);

          if (extType == 'css') {
            extType = 'css';
            return `assets/[name][extname]`;

          }
          else if (extType == 'js') {

            extType = 'js';

            return `assets/${extType}/[name][extname]`;
          }
          else if (/json/i.test(extType)) {
            extType = 'json';
            return `assets/${extType}/[name][extname]`;
          }
          else if (/woff|woff2|ttf|otf|/i.test(extType)) {

            extType = 'fonts';
            return `assets/${extType}/[name][extname]`;
          }
          else {

            return `assets/${extType}/[name][extname]`;
          }


        }


      },
    },
  },
  plugins: [
    // usePHP({
    //   entry: 
    //   ['index.php', 'about.php']
    // }),
    glsl(),
    topLevelAwait({
      // The export name of top-level await promise for each chunk module
      promiseExportName: "__tla",
      // The function to generate import names of top-level await promise in each chunk module
      promiseImportName: i => `__tla_${i}`
    }),
    liveReload(['./**/*.php', './**/*.pug', './**/*.html']),
    // virtualHtml({
    //   pages,
    //   indexPage: 'index'
    //   })
    // vitePluginPug(),
    // glsl(),
    // viteCompression(
    //   {
    //     filter:/\.(js)$/i

    //   }
    // )
  ],
});
