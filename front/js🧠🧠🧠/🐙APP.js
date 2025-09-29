import { timeout } from '/front/js🧠🧠🧠/🔧utils'


//SCROLL
import { setSLL, initSLL } from './SLL'
//EVENTS
import { setEVT, setOBS, updFn } from './EVT'

// SPLITS
import {
  setSPT,
  doSPT,
  cleanSPT
} from './SPT'
//VIEWS
import { views } from '../views👁️👁️👁️/views👁️'
//CALLS
import { setCTA, initCTA } from './CTA'
import { setFRMs } from '/front/comps🦾🦾🦾/FRM📋/FRM'

//LDR
//💡 el "as endPop" es para sacar una fn con otro nombre
// import { setRVL, initRVL, endLDR, endLDR as endPop } from '/front/ldr⏳/LDR'
import { setRVL, initRVL, endLDR } from '/front/comps🦾🦾🦾/ldr⏳/LDR'
import { endRVL } from '/front/comps🦾🦾🦾/ldr⏳/RVLPOP'

import Nav from '/front/comps🦾🦾🦾/Nav🌤️/NAV'


//🥼🥼🥼
// import { GL, initGL, addTX, initTX } from './🌊GL'

import Stats from 'stats.js'


export class App {
  constructor(data) {

    //🦶 Empieza busy ( es para que los clicks y demás no se lancen, un check)
    this.busy = 1

    //🦶 URL inicial
    this.URL = window.location.pathname

    //🦶 Iniciamos opciones en un MAP
    this.OPS = new Map()
    this.OPS.set('base', data.base)
    this.OPS.set('device', data.device)
    this.OPS.set('lowbat', data.lowbat)
    this.OPS.set('touch', data.touch)
    this.OPS.set('gl', data.gl)
    this.OPS.set('loader', data.loader ?? '<div class="ldr"></div>')
    this.OPS.set('first', 1)

    //🥼🥼🥼 esto para testeos de rendimiento, hay que importarlo
    // this.stats = new Stats()
    // this.stats.showPanel( 0 )
    // document.body.appendChild( this.stats.dom )


    //🦶 Creación de la función de Update
    this.updFn = updFn.bind(this)

    this.updTimer = anime.createTimer({
      autoplay: false,
      // frameRate:100,
      onUpdate: (self) => this.updFn(self.currentTime * 1000)
    })

    //🦶 Iniciamos APP
    this.setApp()

  }




  async setApp() {

    //SCREEN
    const w = window.innerWidth
    const h = window.innerHeight
    this.SCR = [w, h]
    this.TOTSLL = document.documentElement.querySelector('.VIU').clientHeight - h


    //SCROLL
    this.SLL = new Map()
    this.SLL.set('speed', 0)
    this.SLL.set('target', 0)
    this.setSLL()

    // SPLITS
    this.splits = new Map()

    this.OPS.set('SLL', this.SLL)
    this.OPS.set('lenis', this.lenis)
    this.OPS.set('initCTA', () => this.initCTA())
    this.OPS.set('setSPT', () => this.setSPT())
    this.OPS.set('doSPT', () => doSPT())
    this.OPS.set('cleanSPT', () => cleanSPT())
    this.OPS.set('splits', this.splits)



    //NAV
    this.NAV = new Nav()



    //🦶 SET 🔭SCOPE, se busca en el Map views ( views👁️👁️👁️/views👁️ )
    const skin = document.querySelector('.VIU').dataset.skin ?? false
    const vClass = views.has(skin) ? views.get(skin) : views.get('default')
    this.VIU = new vClass(document.querySelector('.' + skin))




    //EVENTS
    this.setEVT()
    this.SCRFn()


    //CALLERS
    // aquí ir añadiendo los distintos CTAs,
    //el de links es obligatorio, pero alguna web tendrá para modal, videos, etc
    this.CTAlinks = new Set()
    this.CTAbuttons = new Set()
    // this.CTAvid = new Set()
    this.setCTA()








    // setRVL()
    // this.updFn()
    this.updTimer.play()


    const initLDRprom = new Promise((resolve, reject) => initRVL(resolve))


    const promsdeliveries = await Promise.all([
      initLDRprom,
      this.VIU.loadFn(1),
      this.setSPT(1)
    ])


    // aquí podemos devolverle lo que sea de la promesa.
    // Ej : Necesito parar la animación del initPOP en el endPOP, así que necesito que initRVL me devuelva esa animación.

    const deliveriesInit = [promsdeliveries[0][0]]



    this.initApp(deliveriesInit)


  }


  //💡
  async initApp(deliveries) {

    // Iniciar los ios una vez cargadas las imágenes, videos..., 
    // posiblemente se pueda poner un await, por si alguno de los componentes tiene que 

    // await this.initIOS(document.querySelector('.VIU').dataset.skin)

    this.setOBS()


    //💡 Animaciones iniales, las
    // Tiempo de espera, 
    // si la vista tiene un "ready" se puede sustituir, si no el base
    // Loader
    const ANMldr = endLDR(deliveries[0], null)
    // Nav
    const ANMnav = this.NAV.intro ? this.NAV.intro(this.OPS, null) : false
    // Viu
    const ANMviu = this.VIU.intro ? this.VIU.intro(this.OPS, null) : false

    const ready = this.VIU.ready ? this.VIU.ready : 1


    // lo que no queramos esperar, se le quita el promise
    // const promisInit = await Promise.all([
    //   LoadOutProm,
    //   // ViuInProm,
    //   // NavInProm
    // ])

    ANMnav != false ? ANMldr.sync(ANMnav, 2) : null
    ANMviu != false ? ANMldr.sync(ANMviu, 0) : null

    // ANMldr.init()

    const LoadOutProm =
      new Promise(async (resolve, reject) => {

        ANMldr.call(() => resolve(), ready)
        ANMldr.play()

      })

    const promisInit = await Promise.all([
      LoadOutProm,
    ])

    // this.VIU.setSCP(this.OPS)


    // 🦶INICIA CTAS
    this.initCTA()
    // 🦶 INICIA SCROLL
    this.initSLL()


    this.lenis.start()
    document.documentElement.classList.remove('lenis-stopped')

    // 🦶 Se le adjudica el valor 1 al first
    this.OPS.set('first', 0)

    //Check HASH
    const actual = new URL(document.baseURI)
    if (actual.hash && document.querySelector(actual.hash)) {
      //🚨 Sin el timeout, no chutaba bien
      await timeout(300)
      this.lenis.scrollTo(actual.hash, { offset: -200, force: true })
    }

    this.busy = 0
  }

  //Devolver un anmout, un anmin, que haga el lenis start, 
  async popApp(deliveries) {


    // Debería venir el VIU.outro de la vista anterior
    // y el VIU nuevo 

    const oldOut = this.VIU
    const newVIU = deliveries[0]

    await document.querySelector('#app').insertAdjacentElement('beforeend', newVIU.main)


    await this.setSPT(0, newVIU.main)
    this.setOBS()


    const menuopen = this.NAV.isOpen



    const ANMout = oldOut ? oldOut.outro(this.OPS, null) : false
    const ANMin = newVIU ? newVIU.intro(this.OPS, null) : false
    const ANMnav = this.NAV.isOpen == 1 ? this.NAV.closeFn(this.OPS, null) : false

    const ready = newVIU.ready ? newVIU.ready : 1

    if (ANMin != false) ANMout.sync(ANMin, 0)
    // hacer si el nav open
    if (ANMnav != false) ANMout.sync(ANMnav, .5)


    const LoadOutProm =
      new Promise(async (resolve, reject) => {

        ANMin.call(() => resolve(), ready)
        ANMin.play()

      })

    const promisInit = await Promise.all([
      LoadOutProm,
    ])

    //🦶 Matamos el main anterior
    oldOut.kill()
    delete this.VIU

    cleanSPT(this.splits)


    // Bajamos  Nav aquí para que no interfiera con el out de la home
    // const NavInProm = this.NAV.intro ? new Promise((resolve, reject) => this.NAV.intro(this.OPS, resolve)) 
    // : new Promise((resolve, reject) => resolve())

    //🦶 Limpiamos el main nuevo
    this.VIU = newVIU
    this.VIU.main.style.position = ''
    this.VIU.main.style.top = ''
    this.VIU.main.style.left = ''



    //🦶 INICIA CTAS
    this.initCTA()

    // Vuelve a estar disponible
    this.busy = 0

    this.lenis.scrollTo(0, { immediate: true, lock: true, force: true })
    this.lenis.start()
  }




}


//SCROLL 
App.prototype.setSLL = setSLL
App.prototype.initSLL = initSLL

//EVENTS
App.prototype.setEVT = setEVT
App.prototype.setOBS = setOBS
// App.prototype.setCustom = setCustom

//CTA
App.prototype.setCTA = setCTA
App.prototype.initCTA = initCTA

//FRMs
App.prototype.setFRMs = setFRMs

//SPT
App.prototype.setSPT = setSPT
// App.prototype.doSPT = doSPT
// App.prototype.cleanSPT = cleanSPT



// App.prototype.initGL = initGL
// App.prototype.addTX = addTX
// App.prototype.initTX = initTX
