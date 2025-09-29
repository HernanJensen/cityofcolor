import { debounce } from '/front/js🧠🧠🧠/🔧utils.js'


export function setEVT() {


  //🦶 Resize
  this.SCRFn = SCRFn.bind(this)
  this.SCRdebounce =
    debounce(() => this.SCRFn(0), 160)
  window.onresize = this.SCRdebounce

  //🦶 Visiblity
  this.visFn = visFn.bind(this)
  document.addEventListener('visibilitychange', this.visFn)


  // RESIZE OBSERVER
  this.resizeObserver = new ResizeObserver(entries => {
    entries.forEach(entry => {

      const slave = entry.target.closest('.hOBRs')
      anime.utils.set(slave, { '--hMaster': entry.target.clientHeight + 'px' })


      if (!entry.target)
        this.resizeObserver.unobserve(entry.target)
    })

  })

}

export function setOBS(el = false) {
  const heightHandler = document.querySelectorAll('.hOBRm') ? document.querySelectorAll('.hOBRm') : el.querySelectorAll('.hOBRm')
  if (heightHandler) {
    //https://css-tricks.com/a-better-api-for-the-intersection-and-mutation-observers/?utm_source=extension&utm_medium=click&utm_campaign=muzli

    for (let a of heightHandler) {

      this.resizeObserver.observe(a)

    }
  }
}

//SCREEN EVENTS
export function SCRFn(chk = 1) {
  // 💡💡💡
  // RESIZE
  // CHK Es para comprobar si viene por eventListener o si es forzado
  // Si es evnListener ? 0 : 0
  // Esto se hace para controlar que en móvil, el EVT no se dispare todo el rato con el scroll, que hace resize
  let
    w = window.innerWidth,
    h = window.innerHeight

  //OLD
  // const touch = /Mobi|Andrdoid|Tablet|iPad|iPhone/.test(navigator.userAgent)||"MacIntel"===navigator.platform&&1<navigator.maxTouchPoints
  const touch = window.matchMedia('(hover:none)').matches
  this.OPS.set('touch', touch)

  if (document.querySelector('.nav_head')) anime.utils.set(document.documentElement, { '--headH': document.querySelector('.nav_head').clientHeight + 'px' })

  // console.log(touch)

  if (touch == 1 && this.SCR && chk == 0) {
    if (this.SCR[0] == window.innerWidth) {
      return false
    }
  }

  this.SCR = [w, h]

  //🐭
  if (this.MOU) {

    this.MOU.SCR[0] = w
    this.MOU.SCR[1] = h

  }
  //🌤️
  if (this.nav && this.nav.resizeFn) {
    this.nav.SCR[0] = w
    this.nav.SCR[1] = h
    this.nav.resizeFn()

  }
  if (this.VIU && this.VIU.resizeFn) {
    this.VIU.SCR[0] = w
    this.VIU.SCR[1] = h
    this.VIU.resizeFn()

  }
  if (this.GL && this.GL.resizeFn) {
    this.GL.SCR[0] = w
    this.GL.SCR[1] = h
    this.GL.resizeFn()

  }

  this.TOTSLL = document.documentElement.querySelector('.VIU').clientHeight - h

}

export function visFn(e) {
  if (document.visibilityState == 'hidden') {
    // console.log(this.lenis)

    this.statelenis = this.lenis.isStopped == false ? true : false

    // console.log('A'+this.statelenis)
    this.lenis.stop()
    this.updTimer.pause()
    // window.cancelAnimationFrame(this.UPD)

  }
  else {


    this.statelenis == true ? this.lenis.start() : null
    delete this.statelenis
    this.updTimer.play()
    // this.updFn(performance.now())

  }

}




// UPDATE FN

export function updFn(time) {

  if (this.stats) this.stats.begin()

  if (this.lenis) this.lenis.raf(time)


  //💡 Si no está scrolleando, manda un false


  // gsap.updateRoot(time / 1000)

  if (this.stats) this.stats.end()

  if (this.GL) this.GL.updFn()

  // this.UPD = window.requestAnimationFrame(this.updFn)

}
