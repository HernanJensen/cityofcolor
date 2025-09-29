export function SldCenter(main) {

    const hold = main.querySelector('.sld_h'),
    els = [...main.querySelectorAll('.sld_h > .sld_el')],
    w = window.innerWidth,
    infinite = true
    
    
    // const fakeWwrap = cloneEls(main,els)
    
    


    return createSlider(main,hold,els)


}
  function cloneEls(main,els){

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

  function createSlider(main,hold,els){
5
    const obj = {x:0}
    const animatables = []

    const w = window.innerWidth
    const total = hold.clientWidth
    const widths = els.map($el => $el.clientWidth)
    const outs =  els.map($el => -$el.offsetLeft)
    

    const snap = () => {

      const w = window.innerWidth
      const arr = els.map(($el,i) => {
       
        return (-$el.offsetLeft + ((w - $el.clientWidth))* .5 )
        
      })



      return arr.sort(function(a, b){return b-a})

    }

    
    // const snapArr = snap()
    // const wrapLimitStart = -total + w*.5
    // const wrapLimitEnd = w*.5

    // console.log(wrapLimitStart + ' '+ wrapLimitEnd)
    

    const modifier =(v)=> {
      const snapArr = snap()
      const total = hold.clientWidth

      // const wrapLimitStart = snapArr[0] + widths[widths.length-1]
      // const wrapLimitEnd = snapArr[snapArr.length-1]

      const wrapLimitStart = -total + w*.5
      const wrapLimitEnd = w*.5

      return anime.utils.wrap(v,wrapLimitEnd, wrapLimitStart) 
      // return v
    }



    const onUpdate =(v)=> {
      
    }


    for(let el of els){

      animatables.push(

        anime.createAnimatable(el,{x:0,ease:'linear'})

      )

    }


    const slider = anime.createDraggable(obj, {
      trigger: main,
      y: false,
      
      // x: { modifier:  anime.utils.wrap(snapTo[snapTo.length - 1], 0)},
      // x: { modifier:  anime.utils.wrap(snapTo[snapTo.length - 1], 0)},
      x: {
        snap, 
        modifier
      },
      onUpdate:(self)=>{

        const snapTo = self.snapX

        const w = window.innerWidth
        const total = hold.clientWidth
        const widths = els.map($el => $el.clientWidth)
        const outs =  els.map($el => -$el.offsetLeft)
        const pos = snapTo.indexOf( anime.utils.snap(self.x, snapTo) )

        for(let [i,el] of animatables.entries()){


          
          // const actual = (self.x - snapTo[i]) < ( w ) ? self.x : (i > pos) ? self.x - total : self.x - total + snapTo[i]
          // const actual = ((self.x - (snapTo[i] - widths[i])) > 0 )  ? self.x : self.x - total + snapTo[i]
          
          const actual = ((self.x - (outs[i] - widths[i])) > 0 ) && ((self.x - w ) < outs[i]) ? self.x 
          :
          (self.x >= outs[i]) ? (self.x - total) : (self.x + total)

          
          if(i == 0){
            // console.log((self.x - snapTo[i]))
            // if((self.x - snapTo[i]) < ( w )){
            //   console.log('ini')
            // } else{
            //   console.log('autie'+(self.x + total))
            // }
          
            // console.log(actual)
          }
          
          el.x(actual)
          // el.x(self.x)
        }

        
      },
      
      //Por ahora quitamos speed
      // onGrab: () => anime.animate(carousel, { speedX: 0, duration: .5 }),
      // onRelease: () => anime.animate(carousel, { speedX: 2, duration: .5 }),
      // onResize: (self) => {
      //     if(infinite) this.cloneEls()
      //     // const snapTo = this.els.map($el => -$el.offsetLeft)

          

      // },
      // onSnap:(self)=>{
      //   const snapTo = self.snapX
      //   const pos = snapTo.indexOf( anime.utils.snap(self.x, snapTo) )
        
      // },
      onAfterResize:(self)=>{
        // if(infinite) this.cloneEls()
        if(!main){
          self.revert()
          return false
       }
        self.setX(anime.utils.snap(self.x, self.snapX))
      },
     
      releaseStiffness: 20,
      velocityMultiplier: 1.5
    })


    slider.setX(anime.utils.snap(w * .5, slider.snapX))

    return slider
  }


// Si sales fuera de la pantalla, tienes que tener el -carousel.width
// un check para el desplazamiento de cada uno? 
// al final es, si estás a la izq, tienes que restar el total - xPos, si estás por delante, solo - xPos