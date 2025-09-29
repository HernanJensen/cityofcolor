import { swiftOut, timeout, sleep, genPoster, parseCustomData } from '/front/js🧠🧠🧠/🔧utils.js'

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

export function cleanVID(ass) {

  ass.oncanplay = null
  ass.onplay = null
  ass.currentTime = 0

  let isPlaying = ass.currentTime > 0 && !ass.paused && !ass.ended
    && ass.readyState > ass.HAVE_CURRENT_DATA

}





export function imgPromise(img) {

  return new Promise((resolve, reject) => {

    const url = img.dataset.src


    const fakeimg = new Image()
    fakeimg.onload = () => {
      img.srcset = url
      resolve(fakeimg)
    }
    fakeimg.onerror = () => {
      resolve(img)
    }
    fakeimg.srcset = url


  })

}



export async function loadFn(first = 0, hold = false) {



  const
    PROMs = [],
    style = getComputedStyle(document.documentElement),
    touch = style.getPropertyValue('--touch'),
    isPT = window.matchMedia(`(width < ${touch}px) and (max-aspect-ratio: 1.2)`).matches


  hold = hold == false ? this.main : hold

  const IMGwait = first == 0 ? hold.querySelectorAll('img.WT') : document.querySelectorAll('img.WT')
  const VIDs = first == 0 ? hold.querySelectorAll('video') : document.querySelectorAll('video')
  // const VIDEOlazy = first == 0 ? hold.querySelectorAll('video:not(.WT)[data-auto="true"]') : document.querySelectorAll('video:not(.WT)[data-auto="true"]')
  // VIDEO LAZY SET THAN



  // console.log(performance.now())
  //HACER IMG WAIT
  for (let ass of IMGwait) {
    if (ass.classList.value.startsWith('resp')) {


      if (!ass.classList.contains('resp' + this.size))
        continue
      ass.dataset.src = ass.dataset['src' + this.size]

    }
    // Hacerle reveals a los WT? 

    const PROM = imgPromise(ass)
    PROMs.push(PROM)

  }

  //HACER VIDEO, Wait y no wait
  for (let [i, ass] of VIDs.entries()) {

    // Delay after more than 2 vids, if there is 
    let del = i > 2 ? (VIDs.length > 8 ? 111 : 200) : 5
    if (ass.classList.value.startsWith('resp')) {
      if (!ass.classList.contains('resp' + this.size))
        continue
      ass.dataset.src = ass.dataset['src' + this.size]

    }


    if (ass.dataset.auto == 'click') {
      if (ass.parentNode.querySelector('.vid_Ctr'))
        setCtr(ass)
      continue
    }

    // ass.setAttribute('webkit-playsinline', 'webkit-playsinline')
    // ass.setAttribute('playsinline', 'playsinline')

    ass.playsInline = true
    ass.muted = true
    ass.loop = true
    ass.preload = 'metadata'

    ass.autoplay = ass.dataset.auto == 'yes' ? true : false
    delete ass.dataset.auto



    ass.src = ass.dataset['src' + this.size] ? ass.dataset['src' + this.size] :
      (ass.dataset.src ? ass.dataset.src : '')
    console.log(ass.src)
    del = await loadVID(ass, del)
    await sleep(del)

  }

  // *.WT promises wait
  await Promise.all(PROMs)



  if (!this.RSP) this.setRSP()
  // console.log(performance.now())
}
export async function setSPT(first = 0, hold = false) {


  hold = hold == false ? this.main : hold

  const
    PROMs = [],
    splits = first == 0 ? hold.querySelectorAll('[data-split]') : document.querySelectorAll('[data-split]')

  for (let spt of splits) {

    const ops = spt.dataset.split != 'true' ? parseCustomData(spt.dataset.split) : {}

    delete spt.dataset.split

    const PROM = new Promise((resolve, reject) => {

      anime.text.split(spt, ops)
        .addEffect(self => resolve(self))

    })
    PROMs.push(PROM)
  }

  await Promise.all(PROMs)
    .then((data) => {
      for (let a of data) {
        if (!a.$target)
          continue
        this.splits.set(a.$target, a)

      }

    })

}