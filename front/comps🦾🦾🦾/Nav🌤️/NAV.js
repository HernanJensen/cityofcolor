import {timeout,swiftOut,debounce} from '/front/js🧠🧠🧠/🔧utils.js'


//ANIMS
import {hovANM} from '/front/doom🛡️🛡️🛡️/anm.js'

export default class Nav {
  constructor(mediaQueries = {}) {

    const style = getComputedStyle(document.documentElement)
  
    const touch = style.getPropertyValue('--touch')
    const mvMax = style.getPropertyValue('--mobileMax')

    this.mediaQueries = {
      // isPT : '(var(--mobileMax) < width <= var(--touch)) and (min-aspect-ratio: 1.2)'
      // isPT : '(max-width:1140px)',
      isPT: `(width < ${touch}) and (max-aspect-ratio: 1.2)`,
      isLD: `(width < ${touch}) and (min-aspect-ratio: 1.2)`,
      isMobile: `(${mvMax} >= width)`,
      isTouch: `(hover: none)`,
      

    }

    this.mediaQueries =  { ...this.mediaQueries, ...mediaQueries }

    this.SCR = [
      window.innerWidth,
      window.innerHeight
    ]

    this.nav = document.querySelector('.nav')
  }

  intro( ops = new Map(), resolve = null ){

    
    
    const first = ops.get('first')

    const ANM = anime.createTimeline({
      onComplete:()=>{
        
        if(first==true) this.setSCP(ops)
        resolve != null ? resolve() : null
      }
    })
    .add(this.nav,{
      bottom:{
        from:-10+'rem',
        ease:swiftOut,
        duration:1,
      },
     
    },0)
    
    .init()

    if(resolve == null){
      return ANM
    }
  }

  setSCP(ops){



  }
    

  
}