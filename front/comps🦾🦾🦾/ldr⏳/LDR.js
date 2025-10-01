import { timeout, swiftOut } from '/front/js🧠🧠🧠/🔧utils.js'


export function setRVL(ops = null) {
  // 💡💡💡
  // SET LOADER, especifica contenidos, crea animación entrada y salida.




}

export async function initRVL(resolve = null) {

  const colorsArr = ['#FBBC1F', '#1979F4', '#FFA8A7', '#EF4D26', '#8A71DB', '#6BAFAF']
  // 💡💡💡
  // INIT LOADER : Lanzaría la primera animación.
  const el = document.querySelector('.ldr')
  const h = window.innerHeight
  let timeldr = import.meta.env.DEV == true ? 1 : 4
  // timeldr = 4


  const ANMstart = anime.createTimeline({ autoplay: false })
    // 💡 El waiter es para que no se vean mierdas raras, se elimina y listo.
    .add(document.querySelector('.waiter'), {
      opacity: 0, duration: .2, delay: .01,
      onComplete: () => {
        document.querySelector('.waiter').remove()
      }
    }, 0)
    .add(el.querySelector('.ldr_cnt span:first-child'), {
      innerHTML: '80',
      modifier: anime.utils.roundPad(0),
      duration: timeldr,
      ease: swiftOut
    }, 0)

    .add(el.querySelector('.ldr_bar'), {
      '--ldr-w': ['0%', '80%'],
      '--ldr-clr': colorsArr,
      duration: timeldr,
      ease: swiftOut
    }, 0)
  ANMstart
    .init()


  const obj = {
    speed: 1,
  }
  ANMstart.play()

  anime.animate(obj, {
    speed: 0.3, duration: 2, delay: 1,
    ease: swiftOut,
    onUpdate: () => {
      ANMstart.speed = obj.speed
    }
  })


  await timeout((timeldr + .1) * 1000)

  resolve != null ? resolve([ANMstart]) : null


}


// END LOADER
export function endLDR(ANMin, resolve = undefined) {
  // DOM

  const el = document.querySelector('.ldr')
  const h = window.innerHeight


  // Paramos el ANMin

  const obj = {
    speed: ANMin.speed,
  }
  ANMin.play()
  anime.animate(obj, {
    speed: 0, duration: .3, onUpdate: () => {
      ANMin.speed = obj.speed
    }
  })

  const ANMout =
    anime.createTimeline({
      autoplay: false,
      delay: .3,
      onComplete: () => {
        el.remove()
        // resolve != null ? resolve() : null
      },
    })
      .add(el, {
        opacity: 0,
        duration: 1,
        ease: 'inOut(3)'
      }, 0)
      .add(el.querySelector('.ldr_cnt span:first-child'), {
        innerHTML: '100',
        modifier: anime.utils.roundPad(0),
        duration: .4,
        ease: 'inOut(3)'
      }, 0)
      .add(el.querySelector('.ldr_bar'), {
        '--ldr-w': ['80%', '100%'],
        duration: .4,
        ease: 'inOut(3)'
      }, 0)
      .add('.ldr_cnt span', {
        y: '-100%',
        duration: .4,
        ease: swiftOut
      }, .2)

  // .init()

  // ANMout.play()
  // await timeout(900) o await a la animación


  if (resolve == null) {
    return ANMout
  }
}