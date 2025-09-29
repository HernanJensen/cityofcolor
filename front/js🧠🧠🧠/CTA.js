
import { POPin } from './POP.js'
import { SETdifference } from '/front/js🧠🧠🧠/🔧utils.js'



// 💡💡💡
// SET CTAs
export function setCTA() {


  //🦶 POP ( para ir hacia adelante y hacia detrás )
  this.popFn = POPin.bind(this)

  window.addEventListener('popstate', (e) => {
    e.preventDefault()

    const urlcheck = window.location.host.includes('168.68.') ? `http://192.168.68.113:1234/` : `http://192.168.0.113:1234/`
    const backurl = new URL(window.location.pathname, urlcheck)

    this.popFn(backurl.pathname, false, true)
  }, { passive: true })




}



// 💡💡💡
// Búsqueda de CTAs ( links, modales,OBS, FRMs etc etc)
export function initCTA() {


  //LINKS
  const LINKS = new Set(document.querySelectorAll('a'))


  //🦶 Limpia si hay antiguos que no existen
  const OLDlinks = this.CTAlinks.size > 0 ? SETdifference(this.CTAlinks, LINKS) : undefined
  if (OLDlinks) {
    for (const val of OLDlinks) {
      val.onclick = null
      this.CTAlinks.delete(val)
    }
  }



  // 💡💡💡
  // onclick del link
  const actual = new URL(document.baseURI)
  // console.log(actual)


  for (let link of LINKS) {
    if (import.meta.env.DEV) {
      const global = Object.fromEntries(this.OPS)
      if (link.href.includes(global.base)) {
        link.href = link.href.replace(global.base, '/');
      }
    }


    if (link.closest('.BLNK') || link.classList.contains('BLNK') || link.getAttribute('target') == '_blank') {
      link.setAttribute('target', '_blank')
      continue
    }

    if (link.closest('.noCTA') || link.classList.contains('noCTA')) {
      continue
    }


    // check si tiene href
    if (!link.href || link.getAttribute('href') == '' || link.target == '_blank') continue

    let lhref = new URL(link.href, document.baseURI)

    // check si tiene la misma base
    const chkrel = actual.origin === lhref.origin

    if (chkrel == false) {
      link.target = '_blank'
      link.href = link.classList.contains('SHA') ? link.href.replace('MYURL', window.location.href) : link.href

      continue
    }

    // check si es la misma URL
    // const sameurl = actual.href == lhref.href

    if (actual.href == lhref.href || actual.href + '/' == lhref.href) {
      link.classList.add('ALK')
    }
    else {
      link.classList.remove('ALK')
    }


    link.onclick = async (e) => {
      e.preventDefault()

      let href = link.getAttribute('href')
      if (href.startsWith('#')) {
        this.lenis.scrollTo(href, { offset: -100, force: true })
        return false
      }

      this.popFn(href, link, false)

    }

    this.CTAlinks.add(link)

  }
  // OBS
  this.setOBS()

  // FRMs
  this.setFRMs(this.OPS)

  //CPY
  const CPY = document.querySelectorAll('.CPY')

  for (let btn of CPY) {
    btn.onclick = (e) => {
      e.preventDefault()


      // anime.animate(btn,{
      //   scale:[1,.9,1],
      //   ease:'inOutQuint',
      //   duration:.22,
      //   onComplete:anime.utils.cleanInlineStyles
      // })

      var dummy = document.createElement('input'),
        text = window.location.href

      document.body.appendChild(dummy)
      dummy.value = text
      dummy.select()
      document.execCommand('copy')
      document.body.removeChild(dummy)
    }
  }



  const toTop = document.querySelectorAll('.SLLTop')

  for (let btn of toTop) {
    btn.onclick = (e) => {
      e.preventDefault()

      this.lenis.scrollTo(0, { offset: 0, force: true })
    }
  }


}