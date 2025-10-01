import { doom } from '/front/doom🛡️🛡️🛡️/doom🛡️'

import Splide from '@splidejs/splide'

//ANIMS
import { linesShow, elY100, hovANM } from '/front/doom🛡️🛡️🛡️/anm.js'
import { swiftOut, timeout, debounce } from '/front/js🧠🧠🧠/🔧utils.js'

import { callCenter } from '/front/start🏁🏁🏁/callcenter🧱.js'


import { Sld } from '/front/comps🦾🦾🦾/slider🎞️.js'

export class contact extends doom {
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
    const first = OPS.get('first'),
      splits = OPS.get('splits')

    console.log(OPS)

    const tit = this.main.querySelector('.h1'),
      titSP = splits.get(tit)

    const ANM = anime.createTimeline({
      autoplay: false,
      // delay:first == 1 ? 1 : 0,
      onComplete: () => {

        this.initSCP(OPS)
        resolve != null ? resolve() : null

        // console.log('complete home Intro')
      }

    })
      .add(titSP.lines, {
        y: ['120%', '0%'],
        duration: 1.8,
        ease: 'inOutExpo',



      }, 0)
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


        if (this.main.querySelector('.contact_ops .ops_el ')) {

          const els = this.main.querySelectorAll('.contact_ops .ops_el ')
          const btns = this.main.querySelectorAll('.contact_ops .ops_el_btn ')


          for (let b of btns) {
            b.onclick = (ev) => {
              ev.preventDefault()
              const el = b.closest('.ops_el')
              const close = el.querySelector('.ops_el_form .close')
              el.classList.add('A')

              lenis.stop()


              close.onclick = (e) => {
                e.preventDefault()
                el.classList.remove('A')
                lenis.start()
              }
            }

          }
        }
      })

  }




  resizeFn() {
    super.resizeFn()
  }
}
