import { doom } from '/front/doom🛡️🛡️🛡️/doom🛡️'

import Splide from '@splidejs/splide'

//ANIMS
import { linesShow, elY100, hovANM } from '/front/doom🛡️🛡️🛡️/anm.js'
import { swiftOut, timeout, debounce } from '/front/js🧠🧠🧠/🔧utils.js'

import { callCenter } from '/front/start🏁🏁🏁/callcenter🧱.js'

import { sldSnapFn } from '/front/comps🦾🦾🦾/sldsnap/sldsnap.js'

export class que extends doom {
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


        if (this.main.querySelector('.home_projs .splide')) {
          const splide = this.main.querySelector('.home_projs .splide')

          let type = splide.dataset.type ? splide.dataset.type : 'loop'
          let focus = splide.dataset.focus ? splide.dataset.focus : 'center'
          let autoWidth = splide.dataset.autoWidth ? splide.dataset.autoWidth : true
          let pagination = splide.dataset.pagination ? splide.dataset.pagination : false

          let bar = splide.querySelector('.prgEl')

          // let dir = bar == null ? 'center' : 'left'

          const slider = new Splide(splide,
            {
              type: 'slide',
              autoWidth: autoWidth,
              drag: true,
              // focus: isPT ? 'center' : 'left',
              focus: 'center',
              // pagination: pagination,
              // paginationType: 'bullets',
              omitEnd: true,
              arrows: false,
              gap: '2rem',

            }).mount()

          const lgt = splide.querySelectorAll('.splide__slide').length - 1

          if (splide.querySelector('.TL')) splide.querySelector('.TL').onclick = () => this.slider.go('-${i}')
          if (splide.querySelector('.TR')) splide.querySelector('.TR').onclick = () => { if (this.slider.index < lgt) this.slider.go('+${i}') }

          // if(bar!=null){
          //   this.slider.on( 'mounted move', ()=> {
          //     var end  = this.slider.Components.Controller.getEnd() - 1
          //     var rate = Math.min( ( this.slider.index  ) / end, 1 )
          //     bar.style.width = String( 100 * rate ) + '%'
          //   } )
          // }

        }

        if (isMobile && this.main.querySelector('.que_area .splide')) {
          const splide = this.main.querySelector('.que_area .splide')

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
              bullets: true,
              pagination: true,
              paginationType: 'bullets',

            }).mount()

        }


      })

  }




  resizeFn() {
    super.resizeFn()
  }
}
