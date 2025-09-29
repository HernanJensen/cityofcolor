import path, { resolve, dirname } from "path";
import breakpoints from "./breakpoints.js";
import colors from "./colors.js";


const { touch, desktop, PTMax, PTMaxH, mobile } = breakpoints
// const { bg, dark, light } = colors

const round = (value, decimals = 3) => {
  const factor = Math.pow(10, decimals);
  return Math.round(value * factor) / factor;
}


export default {

  // SIZES
  //💡 Hace que, a partir de touch ( 1194 ), continue con la reducción del rem de desktop (1440 )
  // y a través de una regla de 3, se pueda llegar a un valor mínimo hasta mobile ( 375 )
  // Ejemplo a ojo : un texto que está a 100px(10rem) a 1440, hasta llegar a 1195, bajaría hasta 91px,
  // y si le ponemos resp(100,40), al principio de touch ( 1194 ), tendrá el valor final de desktop, y bajaría
  // gradualmenete hast 40px 
  //💬 Se utiliza solo en la query Resp o dispositivos


  // resp: (mixin, big, small) => {
  //   const b = parseFloat(big);
  //   const s = parseFloat(small);

  //   const result = `calc(${s}px + ((${b - s} * 0.8292) * (100vw - ${mobile}px) / (${touch} - ${mobile})))`;

  //   return result;
  // },

  // //💡 Igual que la de arriba, pero el valor máximo lo determinamos sin reducción. Con el ejemplo se ve fácil
  // // Ej : respFix(100,40), a partir de touch (1194), sería 100px ( no 91 ), y bajaría gradualmente a 40 hasta móvil (375) 
  // respFix: (big, small) => {
  //   const b = parseFloat(big);
  //   const s = parseFloat(small);
  //   return `calc(${s}px + ((${b - s}) * (100vw - ${mobile}px) / (${touch} - ${mobile})))`;
  // },

  // //💡🚧  En pruebas, lo mismo que resp pero con la altura? 
  // respFixH: (big, small) => {
  //   const b = parseFloat(big);
  //   const s = parseFloat(small);
  //   return `calc(${s}px + ((${b - s}) * (100lvh - ${mobileH}px) / (${tabletH} - ${mobileH})))`;
  // },

  // respFixMulti: (size, multi) => {
  //   const base = parseFloat(size);
  //   const m = parseFloat(multi);
  //   const scaled = (base * m) - base;
  //   return `calc(${base}px + (${scaled} * (100vw - ${mobile}px) / (${touch} - ${mobile})))`;
  // },

  // //💡 Tamaño en vw de un valor en px en desktop (1440).
  // // Ejemplo: si hago vW(1440), nos da 100vw 
  // vW: (size) => {
  //   const s = parseFloat(size);
  //   return `${round((s * 100) / desktop, 6)}vw`;
  // },

  // // Igual que arriba pero para móvil
  // vWresp: (size) => {
  //   const s = parseFloat(size);
  //   return `${round((s * 100) / desktop, 6)}vw`;
  // },

  // //💡 Tamaño en vh de un valor en px en desktop height (800).
  // // Ejemplo: si hago vH(800), nos da 100vh
  // vH: (size) => {
  //   const s = parseFloat(size);
  //   return `${round((s * 100) / desktopH, 6)}vh`;
  // },

  // // igual que arriba pero para móvil
  // vHresp: (size) => {
  //   const s = parseFloat(size);
  //   return `${round((s * 100) / mobileH, 6)}lvh`;
  // },

  // // Columna en grid con gutgrid. Equivale a var(--sizegrid) * ($col / 12) - gutgrid doble
  // colGrid: (col) => {
  //   const c = parseFloat(col);
  //   return `calc((var(--sizegrid) * ${c} / 12) - (var(--gutgrid) * 2))`;
  // },

  // // Equivalente a porcentaje del grid: $col * 100% / 12
  // colSize: (col) => {
  //   const c = parseFloat(col);
  //   return `calc(${(c * 100)}% / 12)`;
  // },

  //💡 line-height relativo: l / s redondeado a 3 decimales
  // lH: (s, l) => {
  //   const numS = parseFloat(s);
  //   const numL = parseFloat(l);
  //   return `${round(numL / numS, 3)}`;
  // }
}