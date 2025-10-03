import { doom } from '/front/doom🛡️🛡️🛡️/doom🛡️'

import Splide from '@splidejs/splide'

//ANIMS
import { linesShow, elY100, hovANM } from '/front/doom🛡️🛡️🛡️/anm.js'
import { swiftOut, timeout, debounce } from '/front/js🧠🧠🧠/🔧utils.js'

import { callCenter } from '/front/start🏁🏁🏁/callcenter🧱.js'


import { Sld } from '/front/comps🦾🦾🦾/slider🎞️.js'

export class home extends doom {
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

    const tit = this.main.querySelector('.h1'),
      titSP = splits.get(tit)


    if (this.main.querySelector('.home_projs .splide')) {
      const splide = this.main.querySelector('.home_projs .splide')

      let type = splide.dataset.type ? splide.dataset.type : 'loop'
      let focus = splide.dataset.focus ? splide.dataset.focus : 'center'
      let autoWidth = splide.dataset.autoWidth ? splide.dataset.autoWidth : true
      let pagination = splide.dataset.pagination ? splide.dataset.pagination : false

      let bar = splide.querySelector('.prgEl')


      const slider = new Splide(splide,
        {
          type: 'slide',
          autoWidth: autoWidth,
          drag: true,
          focus: 'center',
          omitEnd: true,
          arrows: false,
          gap: '2rem',

        }).mount()

      const lgt = splide.querySelectorAll('.splide__slide').length - 1

      if (splide.querySelector('.TL')) splide.querySelector('.TL').onclick = () => slider.go('-${i}')
      if (splide.querySelector('.TR')) splide.querySelector('.TR').onclick = () => { if (slider.index < lgt) slider.go('+${i}') }
    }

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





      })

  }




  resizeFn() {
    super.resizeFn()
  }
}
