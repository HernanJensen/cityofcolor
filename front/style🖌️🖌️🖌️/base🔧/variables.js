import breakpoints from "./breakpoints.js";
import colors from "./colors.js";


export default {

  remfix: -5,


  swiftOut: 'cubic-bezier(.55,0,.1,1)',
  padgrid: 'var(--padgrid)',
  pgrid: 'var(--pgrid)',
  sizegrid: 'var(--sizegrid)',
  gutgrid: 'var(--gutgrid)',
  padgut: 'var(--padgut)',



  // COLORS
  ...colors,

  ...breakpoints
}

