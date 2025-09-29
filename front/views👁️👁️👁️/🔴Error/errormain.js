import { doom } from '/front/doom🛡️🛡️🛡️/doom🛡️'



//ANIMS
// import { linesShow, elY100, hovANM } from '/front/doom🛡️🛡️🛡️/anm.js'
import { swiftOut as ease, timeout, debounce } from '/front/js🧠🧠🧠/🔧utils.js'

export class error extends doom {
  constructor(el) {

    const style = getComputedStyle(document.documentElement)


    const mediaQueries = {
    }

    const main = el
    super(mediaQueries, main)




    //DOMs que se repitan 
    this.DOM = {

    }



  }

  intro(OPS = new Map(), resolve = null) {
    // Start intro
    // console.log('launch intro')
    super.intro(OPS)

    //PARAMS
    const first = OPS.get('first')
    const splits = OPS.get('splits')




    const ANM = anime.createTimeline({
      autoplay: false,
      // delay:first == 1 ? 1 : 0,
      onComplete: () => {

        this.initSCP(OPS)
        resolve != null ? resolve() : null

        // console.log('complete home Intro')
      }

    })
    .add(this.main, {
      opacity: [0, 1],
      duration: .6,
      ease: 'inOut(2)',
      // composition:'replace',
    }, 0)
    .init()


    // console.log('init home Intro')

    // resolve != null ? ANM.play() : null


    if (resolve == null) {
      return ANM
    }
    else {
      ANM.init()
    }
  }


  initSCP(OPS = new Map()) {

    const lenis = OPS.get('lenis')
    const initCTA = OPS.get('initCTA')


    this.SCP
      .add(self => {

        const {
          isPT,
          isMobile,
          isTouch
        } = self.matches


    })

  }




  resizeFn() {
    super.resizeFn()
  }
}
