import path, { resolve, dirname } from "path";
import { defineConfig } from "vite";
import liveReload from 'vite-plugin-live-reload';
import glsl from 'vite-plugin-glsl';
import lightningcss from 'vite-plugin-lightningcss';

;


const colors = {
  blue: '#f00',
  $width: '100px',
}

export default defineConfig({
  // root: "src",
  // base: 'replacewithdot',
  server: {
    port: 1234,
    strictPort: true,
  },
  resolve: {
    alias: {
      '~root': resolve(__dirname, './'),
      '@/': `${path.resolve(__dirname, '/front')}/`,
      '@style': `${path.resolve(__dirname, '/front/style🖌️🖌️🖌️')}`,
      '@comps': `${path.resolve(__dirname, '/front/comps🦾🦾🦾')}`,
      '@atoms': `${path.resolve(__dirname, '/front/atoms🧿🧿🧿')}`,
      '@views': `${path.resolve(__dirname, '/front/views👁️👁️👁️')}`,
      // '@comp': resolve(__dirname, '/src/components🦾🦾🦾'),
    },
  },

  css: {
    // postcss:{
    //   postcssConfig:{
    //     plugins: {
    //       'postcss-functions': {functions:functionsPostCSS},
    //       'postcss-calc':{},
    //       'postcss-mixins': {},
    //       // 'postcss-simple-vars': {variables: colors},
    //       'postcss-simple-vars': {},

    //       'postcss-nested': {},
    //       'autoprefixer': {}
    //     }
    //   }
    // }
    // lightningcss: {
    //   targets: browserslistToTargets(browserslist('>= 0.25%')),
    // }
    // preprocessorOptions: {
    //   scss: {
    //     api: 'modern-compiler',
    //     // additionalData: `@use "sass:math";@use "/front/variables.scss" as *;@use "/front/mixins.scss" as *;`
    //     additionalData: `@use 'sass:math'; @use 'sass:map'; @use "@/imports.scss" as *;
    //     @use "${join(currentDir, './src/mixins.scss')}" as *;`
    //   }
    // }
  },
  plugins: [
    // lightningcss(),
    glsl(),
    liveReload(['./**/*.php', './**/*.pug', './**/*.svg']),
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
