import {timeout,swiftOut,debounce} from '/front/js🧠🧠🧠/🔧utils.js'


export default class Intro {
  constructor(el) {
    this.el = el
  }

  async set(OPS) {

    
  }

  async kill() {
    // this.killEVT()
  }

  start(pop = 0) {
    // El pop es para diferenciar si, empieza la página, o es entre vista y vista. Se puede ignorar como en este caso
    // Se le pueden añadir variaciones
    // si es entrando primera vez en la web ? 0 : si es un pop normal es 1, pero a través de endPop podemos chutarle distintas
    // const logo = this.el.querySelectorAll('svg path:not([id])')
    
    const ANM = anime.createTimeline({
      autoplay: false,
    })
    .add(this.el,{
      opacity: [0,1],
      duration: .9,
      ease: 'inOut(2)'

    },0)

    // IMPORTANTE EL INIT, es como si haces immediateRender, 
    // si no tiene el init, no hará por ejemplo el from del opacity.
    ANM
    .init()
    
    let timein = pop == 0 ? 0 : 0
    // timein = (pop == 0 && document.querySelector('.case')) ? 2000 : 0

    // console.log('soy el timein'+ timein)

    return new Map([
      ['in', 0],
      ['out', 0],
      ['ANM', ANM],
    ])
  }


  setEVT() {

  }
  killEVT() {

  }


  resizeFn(SCLLy = window.scrollY) {

  }

}