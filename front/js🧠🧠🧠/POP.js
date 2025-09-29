import { timeout } from '/front/js🧠🧠🧠/🔧utils.js'



// 💡💡💡
// Se puede utilizar el mismo del LDR, o crear uno diferente con el RVLPOP.js
// import {setRVL, initRVL } from '/front/ldr⏳/LDR'
import { setRVL, initRVL, endRVL } from '/front/comps🦾🦾🦾/ldr⏳/RVLPOP.js'

// Fn para trincar el SKIN
import { callCenter } from '/front/start🏁🏁🏁/callcenter🧱.js'

import { views } from '/front/views👁️👁️👁️/views👁️'

export async function POPin(
  url = null,
  link = null,
  back = null,
) {
  if (this.busy == 1) { return false }

  // const urlcheck = import.meta.env.DEV == true ? '' : `http://192.168.0.113:1234/`
  const urlcheck = window.location.host.includes('168.68.') ? `http://192.168.68.113:1234/` : `http://192.168.0.113:1234/`
  // url = url.replace(window.location.origin, '')
  const acturl = new URL(this.URL, urlcheck)
  const newurl = new URL(url, urlcheck)

  //💡 Si hay menú
  // if (this.nav.isOpen == 1) await this.nav.closeFn(document.querySelector('.nav'))

  //💡 Si la URL es igual sin hash
  // if (acturl.href.replace(newurl.hash, '') === newurl.href.replace(newurl.hash, '')) {

  //   //💡 Si la URL contiene un hash
  //   if (newurl.hash && document.querySelector(newurl.hash)) this.lenis.scrollTo(newurl.hash, { offset: -100, force: true })

  //   return false
  // }


  //💡 Entramos en busy para que no puedas clicar
  this.busy = 1


  //💡 La barra de scroll, para no cambiarla tan brusca
  // let duration = .45
  if (this.SLLbar) anime.animate(this.SLLbar, { value: 0 })


  if (import.meta.env.DEV == true) {

    // url = '.' + url
    url = url == './' ? urlcheck : urlcheck + '?uC=' + url
  }


  if (!back) window.history.pushState({}, document.title, url)

  this.URL = url

  this.lenis.stop()
  // DELAY FOR SCROLL
  let delay = 0
  // DECLARE GLOBAL, estos son elementos que puede necesitar el RVL + los OPS normales.
  // Si es un back en popstate, el link, etc
  const global = Object.fromEntries(this.OPS)
  // global.back = back
  // global.link = link
  // global.delay = delay

  //EL LOADER y que se pire la VISTA.


  //💡 Outro nos devuelve la animación de salida + parámetro de espera.
  // O se lanza a la vez ( FALSE )
  // Si no tiene la función outro, no devuelve nada y el RVL hace el await ( por eso [false,true] ) 

  //Lo idóneo es que lo lleve siempre para que se cargue el Scope y borre el main. 

  this.VIU.main.classList.add('old')



  // por si el POP tiene una animación como un velo o algo, 
  // si no, con un false, nos vale.
  const ANMrvl = setRVL({ global })





  // 💡💡💡 Aquí se podría hacer un promise para animaciones, como por ejemplo, 
  // si necesitas que un elemento de una vista se quede para la siguiente vista. 
  // const ANMpromise = new Promise((resolve, reject) => ANM(resolve))

  console.log(this.URL)
  const POPprom = new Promise((resolve, reject) => initRVL(ANMrvl, resolve))
  const HEADprom = new Promise((resolve, reject) => getHEAD(this.URL, resolve))
  const DATAprom = new Promise((resolve, reject) => getDATA(global, this.URL, resolve))
  const OUTLDRprom = this.VIU.outroLDR ? new Promise((resolve, reject) => this.VIU.outroLDR(this.OPS, resolve))
    : new Promise((resolve, reject) => resolve())

  const promisIn = await Promise.all([
    POPprom,
    HEADprom,
    DATAprom,
    // ANMprom
    OUTLDRprom
  ])

  // return false

  //SCROLL TO 0
  // this.lenis.scrollTo(0, { immediate: true, lock: true, force: true })


  const newVIU = promisIn[2]

  const deliveries = [
    newVIU
  ]
  // RESET APP
  this.popApp(deliveries)

}

// GET DATA NEW VIEW
async function getDATA(global, url, resolve) {

  const parser = new DOMParser()
  const DATA = await callCenter(import.meta.env.DEV ? global : url, 'getSkin')
  // const html = parser.parseFromString(DATA['skin'], 'text/html')
  const html = parser.parseFromString(import.meta.env.DEV ? DATA['skin'] : DATA, 'text/html')

  // let finalHtml = html

  // if (import.meta.env.DEV == false) {

  //   const removes = html.querySelectorAll('#videoLow,.waiter,.ldr,.nav,.head,.fixBtn')

  //   for (let a of removes) {
  //     a.remove()
  //   }
  //   finalHtml = html.querySelector('body')
  // }

  //new append
  // await document.querySelector('#app').insertAdjacentHTML('beforeend', html.body.textContent)

  let newHTML = document.createElement('div')
  newHTML.innerHTML = html.body.textContent
  const main = import.meta.env.DEV ? newHTML.querySelector('.VIU') : html.querySelector('body .VIU')

  //🦶 Le podemos hacer lo que queramos aquí al HTML
  // anime.utils.set(main,{top:0,position:'fixed',left:0})
  main.style.position = 'fixed'
  main.style.left = '0%'
  main.style.top = '0%'


  await timeout(24)
  //🦶 Podemos hacerle aquí todo lo que queramos al main
  // const h = window.innerHeight
  // main.style.clipPath = 'polygon(0% '+h+'px,100% '+h+'px ,100% 100%,0% 100%)'


  //🦶 se busca en el Map views ( views👁️👁️👁️/views👁️ )
  const skin = main.dataset.skin ?? 'default'
  const vClass = views.has(skin) ? views.get(skin) : views.get('default')
  const viu = new vClass(main)

  await viu.loadFn()


  resolve(viu)


}


// GET HEAD NEW VIEW
async function getHEAD(url, resolve) {

  const parser = new DOMParser()
  const request = await window.fetch(url, {
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
    },
  })
  const response = await request.text()
  const headinfo = document.createElement('div')
  // // headinfo.innerHTML = headinfo
  // headinfo.innerHTML = response

  // // document.title = headinfo.title
  // document.title = headinfo.querySelector('title').textContent

  if (import.meta.env.DEV) {
    headinfo.innerHTML = response
    document.title = headinfo.querySelector('title').textContent
  } else {
    headinfo.innerHTML = headinfo
    document.title = headinfo.title
  }

  resolve()
}