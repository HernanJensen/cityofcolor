import { timeout, swiftOut, debounce } from '/front/js🧠🧠🧠/🔧utils.js'


//ANIMS
import { hovANM } from '/front/doom🛡️🛡️🛡️/anm.js'

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

    this.mediaQueries = { ...this.mediaQueries, ...mediaQueries }

    this.SCR = [
      window.innerWidth,
      window.innerHeight
    ]

    this.nav = document.querySelector('.nav')
    this.brg = document.querySelector('.nav_brg')
  }

  intro(OPS = new Map(), resolve = null) {



    const first = OPS.get('first')

    const ANM = anime.createTimeline({
      onComplete: () => {

        if (first == true) this.setSCP(OPS)
        resolve != null ? resolve() : null
      }
    })
      .add(this.nav, {
        bottom: {
          from: -10 + 'rem',
          ease: swiftOut,
          duration: 1,
        },

      }, 0)

      .init()


    this.brg.onclick = (ev) => {
      ev.preventDefault()
      if (this.isOpen == 0) {
        this.openFn(OPS)

      } else {
        this.closeFn(OPS)
      }
    }

    if (resolve == null) {
      return ANM
    }
  }

  setSCP(ops) {



  }


  openFn(OPS) {
    this.isOpen = 1
    document.documentElement.classList.add('menuA')
    OPS.get('lenis').stop()

    // Focus trap: deshabilita el tab en todo menos menú y burger
    const focusables = document.querySelectorAll('a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])')
    this.focusedEls = []
    for (let el of focusables) {
      if (!this.nav.contains(el) && el !== this.brg) {
        // Guarda el tabindex original
        this.focusedEls.push({ el, tabindex: el.getAttribute('tabindex') })
        el.setAttribute('tabindex', -1)
      }
    }

    const focusOut = (ev) => {
      if (!this.nav.contains(ev.target) && ev.target !== this.brg) {
        this.closeFn(OPS)
        document.removeEventListener('click', focusOut)
      }
    }
    document.addEventListener('click', focusOut)
  }

  closeFn(OPS) {
    this.isOpen = 0
    document.documentElement.classList.remove('menuA')
    OPS.get('lenis').start()


    // Restaura los tabindex originales
    if (this.focusedEls) {
      for (let el of this.focusedEls) {
        if (el.tabindex === null) {
          el.el.removeAttribute('tabindex')
        } else {
          el.el.setAttribute('tabindex', el.tabindex)
        }
      }
      this.focusedEls = []
    }
  }
}