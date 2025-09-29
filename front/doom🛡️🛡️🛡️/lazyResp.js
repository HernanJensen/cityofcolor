import { swiftOut, timeout } from '/front/js🧠🧠🧠/🔧utils.js'

import { lazyanm } from './anm.js'

import {
  setCtr
} from '/front/comps🦾🦾🦾/vidClick📽️/vidClick'


export function lazyANM(ass, type = 'default') {

  const anmFn = lazyanm.has(type) ? lazyanm.get(type) : lazyanm.get('default')
  const anm = anmFn(ass)

  return anm

}

export const assLoaded = (el) => {

  el.tagName == 'IMG' ? el.removeAttribute('loading') : el.setAttribute('loading', 'true')

}


export function setVID(ass, resolve = null) {


  ass.setAttribute('webkit-playsinline', 'webkit-playsinline')
  ass.setAttribute('playsinline', 'playsinline')
  ass.muted = true
  ass.autoplay = true
  ass.loop = true
  //🚧🚧🚧🚧🚧
  setCtr(ass)


  ass.onplay = () => {

    ass.isPlaying = true
  }
  // ass.oncanplay = () => {
  //   ass.pause()
  //   ass.isPlaying = true

  //   console.log(ass.readyState)
  // }
  // ass.onloadeddata = () => {
  //   ass.pause()
  //   ass.isPlaying = true

  //   console.log(ass.readyState) 

  // }
  // ass.onloadstart = () => {
  //   ass.pause()
  //   ass.isPlaying = true

  //   console.log(ass.readyState) 
  // }
  // ass.oncanplaythrough = () => {
  //   ass.pause()
  //   ass.isPlaying = true

  //   ass.oncanplaythrough = null

  //   console.log(ass.readyState)
  // }

  ass.pause()

  if (ass.readyState == 4) {


    resolve != null ? resolve() : null
  }
  else {
    ass.oncanplay = () => {

      ass.pause()
      ass.isPlaying = true



      // resolve != null ? setTimeout(()=>resolve(),64) : null
      resolve != null ? resolve() : null
      delete ass.dataset.src
      // resolve != null ? setTimeout(()=>resolve(),160) : null

      ass.oncanplay = null
    }
  }


  ass.src = ass.dataset.src ? ass.dataset.src : ass.src
  if (ass.dataset.src) ass.load()
  // ass.load()
}



export async function lazyFn({ ass, anm, enter = 'bottom', leave = false }) {


  return anime.animate(ass, {

    duration: 0,

    autoplay: anime.onScroll({
      enter,
      leave: 'top bottom',
      target: ass.dataset.target ?? ass,
      // sync: true,

      onEnter: (self) => {
        if (ass.classList.value.startsWith('resp') && !ass.classList.contains('resp' + this.size)) {
          anm.complete()
          ass.animed = true
          return false
        }
        ass.animed = false



        if (ass.tagName == 'IMG' && ass.complete == false) {

          // anm.onStart = assLoaded(ass)
          anm.onComplete = (self) => {
            ass.animed = true
            if (ass.dataset.xx == 'none') anime.utils.cleanInlineStyles(self)
          }



          const assTypeLd = 'onload'

          ass[assTypeLd] = () => {
            ass[assTypeLd] = null

            anm.play()

          }




        }
        else {
          anm.onComplete = (self) => {
            ass.animed = true
            if (ass.dataset.xx == 'none') anime.utils.cleanInlineStyles(self)
          }

          if (ass.dataset.lzy) {
            ass.src = ass.dataset.lzy
            delete ass.dataset.lzy


          }

          ass.tagName == 'VIDEO' ? [ass.play(), ass.currentTime = 0] : undefined
          ass.animed == false ? anm.play() : anm.play()
        }

      },
      onLeave:

        ass.tagName == 'VIDEO' ?
          () => {

            // ass.src = '',
            ass.pause(),
              ass.muted = true
          }
          : undefined

    })
  })
}

export function setRSP() {

  const
    style = getComputedStyle(document.documentElement),
    touch = style.getPropertyValue('--touch')
  // RESP IMG VIDEO
  this.RSP = anime.createScope({
    // root,
    mediaQueries: {
      isPT: `(width < ${touch}px) and (max-aspect-ratio: 1.2)`,
    }
  })

    .add(self => {

      const {
        isPT
      } = self.matches

      const RSPass = this.main.querySelectorAll('video.WT[data-srcsm][data-srclg],img.WT[data-srcsm][data-srclg]')
      for (let ass of RSPass) {

        if (!ass.src) continue

        ass.src = isPT
          ? (ass.src != ass.dataset.srcsm ? ass.dataset.srcsm : ass.src)
          : (ass.src != ass.dataset.srclg ? ass.dataset.srclg : ass.src)

      }

      const WTs = isPT
        ? this.main.querySelectorAll('video.WT[data-srcsm]:not([data-srclg]),img.WT[data-srcsm]:not([data-srclg])')
        : this.main.querySelectorAll('video.WT[data-srclg]:not([data-srcsm]),img.WT[data-srclg]:not([data-srcsm])')


      // console.log(WTs)
      for (let ass of WTs) {

        // console.log(ass.src + ' ' + ass.srcset)
        const type = ass.tagName == 'VIDEO' ? 'src' : 'srcset'
        // console.log(type)
        if (ass[type] == '') {

          // ass.classList.add('RSPswitch')
          ass[type] = isPT ? ass.dataset.srcsm : ass.dataset.srclg

        }




      }


    })

}



export function loadVID(ass, del) {

  return new Promise(async (resolve, reject) => {
    if (ass.src == '') {

      ass.poster = (!ass.poster || ass.poster.trim() === '') ? genPoster() : ass.poster
      del = 600
      resolve(del)


    }
    else {
      if (ass.classList.contains('LZ')) {
        ass.dataset.hold = 1

        ass.onprogress = () => {
          if (ass.buffered.length > 0) {


            let cargado = ass.buffered.end(ass.buffered.length - 1)
            let total = ass.duration

            // console.log(`Cargado hasta: ${cargado} / ${total} segundos`)
            // console.log(`Progreso: ${Math.round((cargado / total) * 100)}%`)
            // console.log(ass.src+' el src')
            if (ass.dataset.hold) {
              delete ass.dataset.hold

              ass.dataset.lzy = ass.src

              ass.pause()
              delete ass.src
              ass.load()

              ass.onprogress = undefined
              ass.classList.add('L')
              delete ass.loading

              resolve(del)

            }


          }
        }

      }
      else {



        await ass.play()
        ass.classList.add('L')
        ass.pause()
        delete ass.loading

        resolve(del)

      }
    }
  })

}