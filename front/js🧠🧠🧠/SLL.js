

import {throttle,debounce} from '/front/js🧠🧠🧠/🔧utils.js'
import Lenis from 'lenis'


// WHEEL 
export function SLLWheel() {
  this.VEL = this.lenis.velocity
  
  
  
  this.SLLthrottle()
  this.SLLdebounce()

  if(this.SLLbar && this.busy == 0) this.SLLbar.seek(( this.lenis.animatedScroll / this.TOTSLL ))
  this.SLL.set('target',this.lenis.animatedScroll)


}



// TOUCH
export function SLLTouch() {


  this.SLLthrottle()
  this.SLLdebounce()


  // if(this.SLLbar && this.busy == 0) this.SLLbar.seek(1000 * ( this.lenis.animatedScroll / this.FOTSLL ))


  
    this.SLL.set('target',this.lenis.animatedScroll)
}

// THROTLE SCROLL
export function onCheckSLL(){
  
  // condev('throttle')
    //🦶 Comprobamos posiciones de scroll cada x ms mientras hay sll, esto se añade en la función setSLL
  
  if (this.SLL.get('target') > this.lenis.targetScroll) {
    document.documentElement.classList.add('sll-up')
  } 
  else if (this.SLL.get('target') < this.lenis.targetScroll) {
    document.documentElement.classList.remove('sll-up')
  }

  if (this.lenis.targetScroll == 0) {
    document.documentElement.classList.remove('sll-start')
  }
  else if (this.lenis.targetScroll > 0) {
    document.documentElement.classList.add('sll-start')
  }

  // PHIDE
  // this.lenis.isScrolling ? this.pHide.style.pointerEvents = 'all' : this.pHide.style.pointerEvents = 'none'

}


// DEBOUNCE SCROLL
export function onBounceSLL(){

  //🦶 Comprobamos posicion al parar scroll a los x ms, esto se añade en la función setSLL
  // condev('debounce')
  // PHIDE
  // this.lenis.isScrolling ? this.pHide.style.pointerEvents = 'all' : this.pHide.style.pointerEvents = 'none'
}

// SET SCROLL
export function setSLL(){
  const touch = this.OPS.get('touch')

  //Lenis
  this.lenis = new Lenis({
    wheelEventsTarget: document.documentElement,
    // lerp: 0.06,
    lerp: 0.1,
    wheelMultiplier:.4,
    // lerp:.1,
    // duration:.6,
    smoothWheel: !touch,
    // smoothWheel: false,
    smoothTouch: false,
    normalizeWheel: true,
    // prevent:(node) => {
    //   console.log(node)
    //    if(node.id == 'reelmain') return true
    //    return false
    //  },

  })
  this.lenis.stop()

  //PROG BAR EN TODO
  // if(touch == 0){
  
    // this.SLLbar = setSLLbar()
    
}

export function setSLLbar(){

  // const scrollBar = document.createElement('div')
  // scrollBar.className = 'sllbar'
  // scrollBar.insertAdjacentHTML('afterbegin','<div class="sllbar_prg"></div>')
  
  // document.querySelector('body').appendChild(scrollBar)

  const SLLbar = anime.createTimeline({autoplay:false})
  .add(document.documentElement,{'--prgSLL':{from:0,to:1,duration:1,ease:'linear'}},0)
  .init()



  return SLLbar
}


// INIT SCROLL
export function initSLL(){


  this.onCheckSLL = onCheckSLL.bind(this)
  this.onBounceSLL = onBounceSLL.bind(this)

  //THROTTLE
  // 💡💡💡 Throttle es una fn que lo que hace es 
  // ejecutarse cada periodo de tiempo mientras se está llamando a una Fn sin parar
  this.SLLthrottle = 
  throttle(this.onCheckSLL,500)
  //DEBOUNCE
  // 💡💡💡 Debounce es una fn que lo que hace es 
  // ejecutarse cuando una función se para pasados x MS
  this.SLLdebounce =
  debounce(this.onBounceSLL,30)
  

  //🦶 Dependiendo de si es touch, llamamos a SLLtouch o Sllwheel
  // La diferencia entre estas es la barra de progreso y el mousewheel...
  //🚧🚧🚧 quizás se pueda unificar
  if(this.OPS.get('touch')==true){

    this.scrollFn = SLLTouch.bind(this)

  }
  else{

    this.scrollFn = SLLWheel.bind(this)

  }


    //🦶 Añadimos la fn al evt de scroll del lenis.
    this.lenis.on('scroll',this.scrollFn )

}

// STATE SCROLL

export function stateSLL(){

}