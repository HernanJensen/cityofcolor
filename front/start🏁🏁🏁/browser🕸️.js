export function browserCheck(){
  //No memoria scroll
  if (window.history.scrollRestoration) {
    window.history.scrollRestoration = 'manual'
  }
  //🍫
  //--🪟 2
  //--🖼️ 1
  //🖥️ 0
  //📲 3

  // Tablets
  //el L-andscape ( 1 ) se trata como un desktop, recibe imágenes tamaño mobile ( < 1366 )
  //el P-ortrait ( 2 ) se trata como móvil, recibe imágenes < 1366
  
  //Mobile
  // Solo P-ortrait ( 3 ), coge imágenes portrait.


  //Imágenes
  // Si son mayores que 0 ( desktop ), coge el tamaño pequeño ( < 1366)




  // TOUCH
  //OLD
  // let touch = /Mobi|Andrdoid|Tablet|iPad|iPhone/.test(navigator.userAgent)||"MacIntel"===navigator.platform&&1<navigator.maxTouchPoints
  //NEW
  // let touch = window.matchMedia('(any-pointer:coarse)').matches
  let touch = window.matchMedia('(hover:none)').matches
  // console.log(touch)
  let gl = true

  const w = window.innerWidth
  const h = window.innerHeight
  const device = (Math.min(2,window.devicePixelRatio)) * w > 1024 ? 0 : 1
  let devicec = ''
  if(!touch){

  }
  else{
    if(w < 1025){
      gl = false
      devicec = 'nogl'
    }
    
  }
 
  
  const sUsrAg = navigator.userAgent
  if (sUsrAg.indexOf("Chrome") > -1) {

  } else if (sUsrAg.indexOf("Safari") > -1) {
    document.documentElement.classList.add('N-A') 
  }
  
  return {
    devicec,
    device,
    touch,
    'gl':glCheck(gl),
  }
}

export function revCheck (){
  createRev()
  const inp = document.querySelector('.checkfix_c input#grid')
  inp.onclick = () => createGrid(inp)


  const incop = document.querySelector('.checkfix_c input#cancopy')
  incop.onclick = () => {
    document.documentElement.classList.toggle('cancopy')
  }


  
  window.addEventListener('resize',()=>{
    createRev()
    
  })
}

function createRev(){
  if(!document.querySelector('.checkfix')){
    const checkfix = document.createElement('div')
    checkfix.className = 'checkfix'
    checkfix.insertAdjacentHTML('afterbegin','<div class="checkfix_t" aria-hidden="true"></div><div class="checkfix_c"><input type="checkbox" id="grid" /><label for="grid">Show grid</label></div><div class="checkfix_c"><input type="checkbox" id="cancopy" /><label for="cancopy">enable Copy</label></div>')
    
    document.querySelector('body').appendChild(checkfix)
  }
    
    
  const w = window.innerWidth
    const h = window.innerHeight

    let zoom = w!= window.outerWidth
    let ratio = ((h*10)/w).toFixed(2)
    let ratiocalc = ((h)/w).toFixed(2)
    document.querySelector('.checkfix_t').innerHTML = 'Width: '+w+'<br>Height: '+h+'<br>RT: 16/'+ratio+'-'+ratiocalc+'<br>Zoom: '+zoom
  
}

function createGrid(inp){
  const w = window.innerWidth

  if(inp.checked){
    let cols = ''
    let ncols = w > 1195 ? 12 : 3
    let wcols = ncols == 12 ? 2 : 4

    for(let i=0;i<ncols;i++){
      cols+='<div class="cl'+wcols+'"></div>'
    }

    document.body.insertAdjacentHTML('beforeend','<div class="CKgrid"><div class="gridcl">'+cols+'</div></div>')
    document.querySelector('.CKgrid').style.display ='block'
    setTimeout(()=>{
      document.querySelector('.CKgrid').classList.add('A')
    },120)
  }
  else{
    document.querySelector('.CKgrid').classList.remove('A')
    inp.classList.add('INA')

    setTimeout(()=>{
      document.querySelector('.CKgrid').remove()
      inp.classList.remove('INA')
    },600)
  }
}


export function glCheck (gl) { 
  if(gl == false) return false
  try {
   var canvas = document.createElement('canvas')

   if(!!window.WebGL2RenderingContext &&
    (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))){
      canvas.remove()
      // return 'webgl2'
      return true
    }
   if(!!window.WebGLRenderingContext &&
    (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))){
      canvas.remove()
      // return 'webgl'
      return true
    }
    
  } catch(e) {  
    canvas.remove()
    return false
  }
}



// export default { browserCheck, revCheck,sizer }
