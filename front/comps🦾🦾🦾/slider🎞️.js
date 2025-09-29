import {initCTA } from '../js🧠🧠🧠/CTA'


export function Sld(main) {

    const hold = main.querySelector('.sld_h'),
    els = [...main.querySelectorAll('.sld_h > .sld_el')],
    w = window.innerWidth,
    infinite = true
    
    
    const fakeWwrap = cloneEls(main,els)
    
    return createSlider(main,hold,els,infinite)


}
  function cloneEls(main,els){
    if(!main.querySelector('.sld_fake')) return false

    const fakeH = main.querySelector('.sld_fake')
    for(let a of fakeH.querySelectorAll('.sld_el')){
      a.remove()
    }
    // fakeH.innerHTML = ''

    const w = window.innerWidth

    let total = 0
    for(let [i,el] of els.entries()){

      const style= getComputedStyle(el)
      const marginsWidth = parseInt(style.marginLeft) + parseInt(style.marginRight)

      const cloned = el.cloneNode(true)
      fakeH.insertAdjacentElement('beforeend',cloned)


      total += el.offsetWidth + marginsWidth
      if(total > w){
        break
      }


    }


    // initCTA()
    
    

    return fakeH.clientWidth
  }

  function createSlider(main,hold,els,infinite){
    
    // const getTotalWidth = (total, $el) => {

    //   const style= getComputedStyle($el)
    //   const marginsWidth = parseInt(style.marginLeft) + parseInt(style.marginRight)
    //   return total + $el.offsetWidth + marginsWidth

    // }

    const w = window.innerWidth



    const carousel = { width: hold.clientWidth, speedX: .8, wheelX: 0, wheelY: 0 };
    let wheelTimeout;

    const animatable = anime.createAnimatable(hold, {
      x: 0, modifier: v => {

        const wrapLimitStart = 1
        const wrapLimitEnd = -hold.clientWidth
        return anime.utils.wrap(v,wrapLimitEnd, wrapLimitStart) 
      },

      
    })
    


    const draggable = anime.createDraggable(carousel, {
      trigger: main,
      y: false,



      onGrab: () => anime.animate(carousel, { speedX: 0, duration: .5 }),
      onRelease: () => anime.animate(carousel, { speedX: .8, duration: .5 }),
      
      // onResize: () => carousel.width = carouselItems.reduce(getTotalWidth, 0),
      releaseStiffness: 20,
      velocityMultiplier: 1.5,
      onAfterResize:(self)=>{
        carousel.width = hold.clientWidth
        if(infinite){ 
          cloneEls(main,els)
        }
        // self.setX(anime.utils.snap(self.x, self.snapX))
      },
     
      releaseStiffness: 20,
      velocityMultiplier: 1.5
    })

  

    return [
      draggable,
      anime.createTimer({
        // frameRate: 60,
        autoplay:anime.onScroll({
          target:main
        }),
        // onUpdate: () => {
        //   animatable.x(/** @type {Number} */(animatable.x()) - carousel.speedX + draggable.deltaX - carousel.wheelX - carousel.wheelY)
        // }
        onUpdate: () => {
          animatable.x(
            animatable.x() -
            carousel.speedX +
            draggable.deltaX -
            carousel.wheelX -
            carousel.wheelY
          );
        },

      })
    ]
  }


// Si sales fuera de la pantalla, tienes que tener el -carousel.width
// un check para el desplazamiento de cada uno? 
// al final es, si estás a la izq, tienes que restar el total - xPos, si estás por delante, solo - xPos