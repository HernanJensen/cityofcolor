export const swiftOut = 'cubicBezier(.55,0,.1,1)'



export function condev(msg){
  if(import.meta.env.DEV == true){
    console.log(msg)
  }
}

export function genPoster(color = "#000000") {

  const canvas = document.createElement("canvas")
  canvas.width = canvas.height = 1
  const ctx = canvas.getContext("2d")
  ctx.fillStyle = color
  ctx.fillRect(0, 0, 1, 1)
  return canvas.toDataURL("image/png")

}
  
// export function lerp(p1, p2, t) {return p1 + (p2 - p1) * t}

// export function clamp(min, max, num) {return Math.min(Math.max(num, min), max)}

export function timeout (ms){
  return new Promise(resolve => setTimeout(resolve, ms))
}

export const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))


// export function getRnd(min,max){
//   return Math.floor(Math.random() * max) + min
// }



//EJECUTA CADA X segundos mientras salta una función

export function throttle(fn,delay){
  let timerFlag = null; // Variable to keep track of the timer

  // Returning a throttled version 
  return (...args) => {
    if (timerFlag === null) { // If there is no timer currently running
      fn(...args); // Execute the main function 
      timerFlag = setTimeout(() => { // Set a timer to clear the timerFlag after the specified delay
        timerFlag = null; // Clear the timerFlag to allow the main function to be executed again
      }, delay);
    }
  }
}



//EJECUTA A LOS X segundos al terminar de lanzar una función con Start
export function debounceStart(fn, delay) {
  // A timer variable to track the delay period
  let timer;
  // Return a function that takes arguments
  return function(...args) {
      // Clear the previous timer if any
      clearTimeout(timer)
      // Set a new timer that will execute the function after the delay period
      timer = setTimeout(() => {
          // Apply the function with arguments
          fn.apply(this, args)
      }, delay)
  }
}
//EJECUTA A LOS X segundos al terminar de lanzar una función
export function debounce(fn, delay) {
  // A timer variable to track the delay period
  let timer;
  // Return a function that takes arguments
  return function(...args) {
      // Clear the previous timer if any
      clearTimeout(timer)
      // Set a new timer that will execute the function after the delay period
      timer = setTimeout(() => {
          // Apply the function with arguments
          fn.apply(this, args)
      }, delay)
  }
}


export function SETdifference(setA, setB) {
  const _difference = new Set(setA);
  for (const elem of setB) {
    _difference.delete(elem);
  }
  return _difference;
}


export function checkMail(str) {
  if(!str.match(/^([\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+\.)*[\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+@((((([a-z0-9]{1}[a-z0-9\-]{0,62}[a-z0-9]{1})|[a-z])\.)+[a-z]{2,6})|(\d{1,3}\.){3}\d{1,3}(\:\d{1,5})?)$/i)){
    return false
  }
  return true
}



// export function sizer(global){

//   // EL TIPO DE INCREMENTO PARA TAMAÑOS POR ENCIMA DE DISEÑO
//   // EL MULTI, si queremos no crezcan los elemento sería 1
//   // si queremos que crezca de manera natural el rem, se pondría a 0
//   global.DSG = {
//     L:{
//       w : 1440,
//       h : 800,
//       multi:.4,
//       total:0,
//       ratio:5.56,
//       wide:((window.innerHeight*10)/window.innerWidth).toFixed(2),
      
//     },
//     P:{
//       w:375,
//       h:640,
//       multi:.8,
//       total:0
//     }
//   }



//   global.DSG.L.total = ( ( global.DSG.L.w / window.innerWidth ) * 10 )
//   // SE COGE LA DIFERENCIA ENTRE AMBAS Y SE HACE EL MULTI
//   global.DSG.L.total = 10 - ((10 - global.DSG.L.total) * global.DSG.L.multi)
//   // UN MATH.MIN PARA QUE NO SE PASE LA REDUCCIÓN Y HAGA EL EFECTO REM NATURAL
//   global.DSG.L.total = Math.min(10,global.DSG.L.total)


//   global.DSG.P.total = ( ( global.DSG.P.w / window.innerWidth ) * 10 )
//   // SE COGE LA DIFERENCIA ENTRE AMBAS Y SE HACE EL MULTI
//   global.DSG.P.total = 10 - ((10 - global.DSG.P.total) * global.DSG.P.multi)
//   // UN MATH.MIN PARA QUE NO SE PASE LA REDUCCIÓN Y HAGA EL EFECTO REM NATURAL
//   global.DSG.P.total = Math.min(10,global.DSG.P.total)


//   //MULTI PARA EL WIDE
//   // global.DSG.L.total *=  Math.min(1,(global.DSG.L.wide/global.DSG.L.ratio)*1.05)

//   document.documentElement.style.setProperty("--ck_multiL", global.DSG.L.total)
//   document.documentElement.style.setProperty("--ck_multiP", global.DSG.P.total)

//   if(global.touch == 1 && !CSS.supports("height: 100lvh")){

//     document.documentElement.style.setProperty("--ck_hscr", window.screen.height+'px')
//     document.documentElement.style.setProperty("--ck_hvar", window.innerHeight+'px')
//     document.documentElement.style.setProperty("--ck_hmin", document.documentElement.clientHeight+'px')
    
//   }
//   return global

// }
function smartSplit(str, delimiter) {
  const result = [];
  let current = '';
  let depth = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === '{' || char === '[') depth++;
    else if (char === '}' || char === ']') depth--;

    if (char === delimiter && depth === 0) {
      result.push(current);
      current = '';
    } else {
      current += char;
    }
  }

  if (current) result.push(current);
  return result;
}

function parseValue(value) {
  value = value.trim();

  // Array
  if (value.startsWith('[') && value.endsWith(']')) {
    const inner = value.slice(1, -1);
    return smartSplit(inner, ',').map(v => parseValue(v));
  }

  // Object
  if (value.startsWith('{') && value.endsWith('}')) {
    const inner = value.slice(1, -1);
    return parseCustomData(inner);
  }

  // Boolean
  if (value === 'true') return true;
  if (value === 'false') return false;

  // Number
  if (!isNaN(value) && value !== '') return Number(value);

  // String
  return value;
}

export function parseCustomData(dataString) {
  const result = {};
  const entries = smartSplit(dataString, '|');

  for (let entry of entries) {
    const [key, ...rest] = smartSplit(entry, ':');
    const value = rest.join(':'); // admite ":" en valores
    if (key) result[key.trim()] = parseValue(value);
  }

  return result;
}