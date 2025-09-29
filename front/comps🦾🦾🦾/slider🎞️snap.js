export function Sld(main) {

    const hold = main.querySelector('.sld_h'),
    els = [...main.querySelectorAll('.sld_h > .sld_el')],
    w = window.innerWidth,
    infinite = false
    
    
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


    return fakeH.clientWidth
  }

  function createSlider(main,hold,els,infinite){
    
    const style = getComputedStyle(els[0]),
    marginL = parseInt(style.marginLeft),
    arr = els.map($el => -$el.offsetLeft + marginL),
    snap = () => {

      const arr = els.map($el => -$el.offsetLeft + marginL)
      // arr.push(-hold.clientWidth)
      // arr.pop()

      return arr
    
    },
    last = els.at(-1),
    // limitR =  arr.at(-1) + (arr.at(-1) + ( last.offsetLeft + last.clientWidth))
    // limitR =  hold.clientWidth - arr.at(-1)
    limitR = hold.clientWidth - hold.parentNode.clientWidth
    
    els.forEach(el => {
      let startX = 0; // Posición inicial del toque
      let startY = 0; // Posición inicial del toque
    
      el.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX; // Registrar la posición inicial X
        startY = e.touches[0].clientY; // Registrar la posición inicial Y
      });
    
      el.addEventListener('touchend', (e) => {
        const endX = e.changedTouches[0].clientX; // Registrar la posición final X
        const endY = e.changedTouches[0].clientY; // Registrar la posición final Y
    
        const deltaX = Math.abs(endX - startX); // Diferencia en X
        const deltaY = Math.abs(endY - startY); // Diferencia en Y
    
        // Si el movimiento es significativo, prevenir el clic
        if (deltaX > 10 || deltaY > 10) {
          e.preventDefault(); // Prevenir el clic en el enlace
        }
      });
    });

    return anime.createDraggable(hold, {
      trigger: main,
      container:[0,0,0,-limitR],
      y: false,
      // releaseMass: 1.2,
      // releaseStiffness: 60,
      // dragSpeed: .72,

      releaseStiffness: 20,
      velocityMultiplier: 1.5,
      
      // x: { modifier:  anime.utils.wrap(snapTo[snapTo.length - 1], 0)},
      // x: { modifier:  anime.utils.wrap(snapTo[snapTo.length - 1], 0)},
      x: {
        snap, 
        // modifier
      },
      //Por ahora quitamos speed
      // onGrab: () => anime.animate(carousel, { speedX: 0, duration: .5 }),
      // onRelease: () => anime.animate(carousel, { speedX: 2, duration: .5 }),
      // onResize: (self) => { 
      //     if(infinite) this.cloneEls()
      //     // const snapTo = this.els.map($el => -$el.offsetLeft)

          

      // },
      onSnap:(self)=>{

      },
      onAfterResize:(self)=>{

        if(infinite) cloneEls(main,els)
        self.setX(anime.utils.snap(self.x, self.snapX))
      },
     
      releaseStiffness: 20,
      velocityMultiplier: 1.5
    })

  }


// Si sales fuera de la pantalla, tienes que tener el -carousel.width
// un check para el desplazamiento de cada uno? 
// al final es, si estás a la izq, tienes que restar el total - xPos, si estás por delante, solo - xPos