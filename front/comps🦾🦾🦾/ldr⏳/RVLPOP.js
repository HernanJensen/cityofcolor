import {timeout} from '/front/js🧠🧠🧠/🔧utils.js'


export function setRVL(ops = null) {
  
  

  // const ANM =
  //   anime.createTimeline({
  //     autoplay: false,
      
  //   })
    // .add(el,{
    //   opacity:0,
    // },0)
    

    return false
}

export async function initRVL(ANM, resolve) {
  
  const initANM = anime.createTimeline({
    onComplete: () => {
      resolve != null ? resolve([ANM]) : null
    }
  })
  .add(document.documentElement.querySelector('.VIU'), {
    opacity: 0,
    duration: .3,
    ease: 'inOut(2)',
  },0)

}


// END LOADER
export async function endRVL() {



}



// import {timeout,swiftOut} from '/front/js🧠🧠🧠/🔧utils.js'


// export function setRVL(ops = null) {
//   // 💡💡💡
//   // SET LOADER, especifica contenidos, crea animación entrada y salida.
//   const el = document.createElement('div')
//   el.classList.add('ldr-pop')
//   document.body.insertAdjacentElement('beforeend', el)
    
  
// }

// export async function initRVL(resolve = null) {
//   // 💡💡💡
//   // INIT LOADER : Lanzaría la primera animación.
//   const el = document.querySelector('.ldr-pop')
//   const h = window.innerHeight

//   let duration = .6

//   const ANMstart = anime.createTimeline({
//     autoplay: false,
//   })
//   .add(el, { opacity: [0, 1], '--blur': [0 + 'px', 10 + 'px'], duration, ease: 'inOut(4)' }, 0)
//   .init()

//   await ANMstart.play()

    
//   resolve != null ? resolve([ANMstart]) : null


// }


// // END LOADER
// export function endRVL(ANMin,resolve = null) {
//   // DOM

//   const el = document.querySelector('ldr-pop')
//   const h = window.innerHeight

//   console.log(el)
//   // Paramos el ANMin

//   const obj = {
//     speed:ANMin.speed,
//   }
//   ANMin.play()
//   anime.animate(obj,{speed:0,duration:.3,onUpdate:()=>{
//     ANMin.speed = obj.speed
//   }
//   })

//   const ANMout =
//   anime.createTimeline({
//     autoplay: false,
//     onComplete: () => {
//       el.remove()
//     }
//   })
//   .add(el, { opacity: [1, 0], '--blur': [10 + 'px', 0 + 'px'], duration: .6, ease: 'inOut(4)' }, .2)


//   // .init()

//   // ANMout.play()
//   // await timeout(900) o await a la animación


//   if(resolve == null){
//     return ANMout
//   }
// }