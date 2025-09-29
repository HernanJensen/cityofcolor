import { fileURLToPath } from 'node:url';
import path from 'node:path';
import calculator from './front/style🖌️🖌️🖌️/base🔧/calculator.js';

// ./front/stylo/mixins.js


// const aliasMap = {
//   '~assets': '/front/assets',
//   '@': '/front',
// }



const functions = {
  div: (a, b) => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    if (isNaN(numA) || isNaN(numB) || numB === 0) return '0';
    return `${numA / numB}`;
  },
  round: (value) => Math.round(parseFloat(value)),
  ceil: (value) => Math.ceil(parseFloat(value)),
  floor: (value) => Math.floor(parseFloat(value)),
  toFixed: (value, decimals = 2) =>
    parseFloat(value).toFixed(parseInt(decimals)),
  generateColumns: () => {
    let css = '';
    for (let i = 1; i <= 12; i++) {
      css += `
        .cl${i} {
          padding-left: var(--gutgrid);
          padding-right: var(--gutgrid);
          width: calc(var(--sizegrid) * ${i} / 12);
        }
        `;
    }
    return css;
  },
  ...calculator

}

import postcssImport from 'postcss-import';
import postcssMixins from 'postcss-mixins';
import postcssFunctions from 'postcss-functions';
import postcssSimpleVars from 'postcss-simple-vars';
import postcssNested from 'postcss-nested';
import stripInlineComments from 'postcss-strip-inline-comments';
import postcssFor from 'postcss-for';


import mixinsJS from './front/style🖌️🖌️🖌️/base🔧/mixins.js';
// import mixinsPCSS from '/front/stylo/base/mixins.pcss';

import variables from './front/style🖌️🖌️🖌️/base🔧/variables.js';

export default {
  plugins: [
    stripInlineComments(),
    postcssImport(),
    postcssFor(),
    postcssMixins({
      mixinsFiles: ['./front/style🖌️🖌️🖌️/base🔧/mixins.pcss'], // los de PCSS
      mixins: { ...mixinsJS }
    }),
    postcssFunctions({
      functions
    }),
    postcssSimpleVars({ variables }),
    postcssNested()
  ]
}