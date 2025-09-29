import breakpoints from "./breakpoints.js";


const { touch, desktop,desktopL, PTMax, PTMaxH, mobile } = breakpoints



const roundFn = (value, decimals = 3) => {
  const factor = Math.pow(10, decimals);
  return Math.round(value * factor) / factor;
}



export default {
  toch: (small, big, clamp = 1) => {
    const s = parseFloat(small);
    const b = parseFloat(big);

    const calc = (b - s) / (desktopL - desktop)

    const result = clamp == 1 ?
    `clamp(${s}px, calc(${s}px + ((100vw - ${desktop}px) * ${calc})), ${b}px)` :
    `calc(${s}px + ((100vw - ${desktop}px) * ${calc}))`;


    return result;
  },
  resp: (big, small) => {
    const b = parseFloat(big);
    const s = parseFloat(small);

    const result = `calc(${s}px + ((${b - s} * 0.8292) * (100vw - ${mobile}px) / (${touch} - ${mobile})))`;

    return result;
  },

  //💡 Igual que la de arriba, pero el valor máximo lo determinamos sin reducción. Con el ejemplo se ve fácil
  // Ej : respFix(100,40), a partir de touch (1194), sería 100px ( no 91 ), y bajaría gradualmente a 40 hasta móvil (375) 
  respFix: (big, small) => {
    const b = parseFloat(big);
    const s = parseFloat(small);
    return `calc(${s}px + ((${b - s}) * (100vw - ${mobile}px) / (${touch} - ${mobile})))`;
  },

  //💡🚧  En pruebas, lo mismo que resp pero con la altura? 
  respFixH: (big, small) => {
    const b = parseFloat(big);
    const s = parseFloat(small);
    return `calc(${s}px + ((${b - s}) * (100lvh - ${mobileH}px) / (${tabletH} - ${mobileH})))`;
  },

  respFixMulti: (size, multi) => {
    const base = parseFloat(size);
    const m = parseFloat(multi);
    const scaled = (base * m) - base;
    return `calc(${base}px + (${scaled} * (100vw - ${mobile}px) / (${touch} - ${mobile})))`;
  },

  //💡 Tamaño en vw de un valor en px en desktop (1440).
  // Ejemplo: si hago vW(1440), nos da 100vw 
  vW: (size) => {
    const s = parseFloat(size);
    return `${roundFn((s * 100) / desktop, 6)}vw`;
  },

  // Igual que arriba pero para móvil
  vWresp: (size) => {
    const s = parseFloat(size);
    return `${roundFn((s * 100) / desktop, 6)}vw`;
  },

  //💡 Tamaño en vh de un valor en px en desktop height (800).
  // Ejemplo: si hago vH(800), nos da 100vh
  vH: (size) => {
    const s = parseFloat(size);
    return `${roundFn((s * 100) / desktopH, 6)}vh`;
  },

  // igual que arriba pero para móvil
  vHresp: (size) => {
    const s = parseFloat(size);
    return `${roundFn((s * 100) / mobileH, 6)}lvh`;
  },

  // Columna en grid con gutgrid. Equivale a var(--sizegrid) * ($col / 12) - gutgrid doble
  colGrid: (col) => {
    const c = parseFloat(col);
    return `calc((var(--sizegrid) * ${c} / 12) - (var(--gutgrid) * 2))`;
  },

  // Equivalente a porcentaje del grid: $col * 100% / 12
  colSize: (col) => {
    const c = parseFloat(col);
    return `calc(${(c * 100)}% / 12)`;
  },


  lH: (s, l) => {

    const numS = parseFloat(s)
    const numL = parseFloat(l)
    return `${roundFn(numL / numS, 3)}`
  }
}

