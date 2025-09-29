import {
  loadFn,setSPT
} from './loads.js'

import {
  lazyANM, lazyFn,
  setRSP

} from './lazyResp.js'

import {
  vidclickFn
} from '/front/comps🦾🦾🦾/vidClick📽️/vidClick'





export class doom {

  constructor(mediaQueries = {}, main) {

    const style = getComputedStyle(document.documentElement)
    const touch = style.getPropertyValue('--touch')
    const mvMax = style.getPropertyValue('--mobileMax')


    this.mediaQueries = {
      // isPT : '(var(--mobileMax) < width <= var(--touch)) and (min-aspect-ratio: 1.2)'
      // isPT : '(max-width:1140px)',
      isPT: `(width < ${touch}px) and (max-aspect-ratio: 1.2)`,
      isLD: `(width < ${touch}px) and (min-aspect-ratio: 1.2)`,
      isMobile: `(${mvMax} >= width)`,
      isTouch: `(hover: none)`,


    }
    this.isPT = window.matchMedia(`(width < ${touch}px) and (max-aspect-ratio: 1.2)`).matches
    this.size = this.isPT == 1 ? 'sm' : 'lg'


    this.mediaQueries = { ...this.mediaQueries, ...mediaQueries }
    this.main = main

    this.splits = new Map()


    this.SCR = [
      window.innerWidth,
      window.innerHeight
    ]


  }
  
  //SCOPES
  setSCP(ops = new Map()) {

    this.SCP = anime.createScope({
      // root,
      mediaQueries: this.mediaQueries
    })
    .add('lazySwitch', (e, size = 'lg') => {

        for(let vid of document.querySelectorAll('.vidResp')){

          if(vid.src != vid.dataset['src'+size] && vid.src){

            vid.src = vid.dataset['src'+size]


          }
          if(vid.dataset.lzy){
            
            vid.dataset.lzy = vid.dataset['src'+size]
          }

        }

    })
    .add('lazy', (e, isPT,elemhold = document) => {

        //💡 Cargas lazy de videos, imágenes, clicks en videos, entrada y salida de videos.
        const ASSlazy = elemhold.querySelectorAll('img[loading="lazy"],video[loading="none"]')
        const VIDwait = elemhold.querySelectorAll('video.WT')

        // if(elemhold != document){
        // console.log(ASSlazy)
        // console.log(VIDwait)
        // }

        //LAZY IMG y VIDs, click VID
        for (let ass of ASSlazy) {

          const checkANM = ass.dataset.xx ?? 'default'

          const anm = lazyANM(ass, ass.dataset.xx ?? 'default')

          const enter = isPT & ass.dataset.entersm ? ass.dataset.entersm :
            ass.dataset.enter ? ass.dataset.enter : 'bottom top'


          if(ass.classList.value.startsWith('resp')  && !ass.src){

            if(!ass.classList.contains('resp'+this.size)){
              continue
              
            }
            ass.src = ass.dataset['src'+this.size]
          }

          ass.dataset.auto && ass.dataset.auto == 'click' ? this.vidclickFn({ anm, ass }) : this.lazyFn({ ass, anm, enter: enter ?? undefined })

        }
        // video.WT out stop
        for (let ass of VIDwait) {
          if(ass.classList.value.startsWith('resp')){ 
            if(ass.classList.contains('resp'+this.size)){
              // console.log(ass)
              // console.log(ass.dataset['src'+this.size])
              // console.log(ass.src)
              // console.log(ass.src == undefined)
              // console.log(ass.loading+' el loading')
              if(ass.dataset.auto){
                // console.log('churchill')
                ass.playsInline = true
                ass.muted = true
                ass.loop = true
                ass.preload = 'metadata'

                ass.autoplay = ass.dataset.auto == 'yes' ? true : false
                delete ass.dataset.auto

                ass.src = ass.dataset['src'+this.size]
                ass.play()
                ass.classList.add('L')
                ass.pause()
              }


            }
            else{
              continue
            }
          }

          anime.animate(ass, {
            // opacity:[0,0],
            duration: 0,
            // axis: ass.parentNode.classList.contains('.slide_el') ? 'x' : 'y',
            autoplay: anime.onScroll({
              enter: 'bottom top',
              // sync: true,
              target: ass.dataset.target ?? ass,
              onEnter: (self) => {
                if (ass.autoplay == true) {
                  
                  ass.play()
                }


              },

              onLeave: (self) => {

                if (ass.autoplay == true) {
                  ass.pause()
                }

              }

            })

          })

        }


    })
    .add(self => {

      // console.log('launch SCP')
      const {
        isMobile,
        isTouch,
        isPT
      } = self.matches

      // ESTO sí?
      const VIDs = document.querySelectorAll('video')

      for (let vid of VIDs) {
        vid.pause()
      }


      this.isPT = isPT
      this.size = isPT == 1 ? 'sm' : 'lg'
      self.methods.lazySwitch(self,this.size)
      self.methods.lazy(self,this.isPT)

    })
    

  }

  async killSCP() {
    //💡 Matar el SCP para que no trabaje, antes del pop? 
    this.SCP.revert()

  }
  //END SCOPES

  intro(OPS = new Map(), resolve = null) {

    this.setSCP(OPS)
  }

  // Se lanza cuando entra el pop con RVL
  outroLDR(ops = new Map(), resolve = null) {
    // console.log('launch outro LDR')
    resolve != null ? resolve() : null

  }


  // Se lanza cuando entra el popApp
  outro(ops = new Map(), resolve = null) {
    // console.log('launch outro')

    const VIDs = document.querySelectorAll('video')

    for (let vid of VIDs) {
      vid.pause()
    }

    const ANM = anime.createTimeline({
      autoplay: false,
      onComplete: () => {

        resolve != null ? resolve() : null

      }
    })
      .add(this.main, {
        opacity: 0,
        duration: .6,
        composition: 'replace',
      }, 0)
      .init()

    resolve != null ? resolve() : null

    return ANM
  }

  // Último paso, por si se queda algo por rematar
  kill() {
    // console.log('launch kill')

    if (this.slides) {
      for (let a of this.slides) {
        a.onAfterResize = () =>
          a.revert()
      }
    }
    if (this.snaps) {
      for (let a of this.snaps) {
        a.onAfterResize = () =>
          a.revert()
      }
    }


    this.main.remove()
    this.SCP.revert()


  }


  resizeFn() {




  }

  setFRM(){


    const map = new Map()

    return map
  }

}



doom.prototype.lazyFn = lazyFn
doom.prototype.loadFn = loadFn
doom.prototype.vidclickFn = vidclickFn
// doom.prototype.setLZY = setLZY
doom.prototype.setRSP = setRSP
doom.prototype.setSPT = setSPT
