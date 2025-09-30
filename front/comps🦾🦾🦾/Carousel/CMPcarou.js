import * as lib from '/front/js🧠🧠🧠/🔧utils.js'
import Splide from '@splidejs/splide'

export default class Carousel{
  constructor (el) {
    this.el = el

    this.pos = -1
  }


  set(OPS){
    
    if(!this.slider){

      let type = this.el.dataset.type ? this.el.dataset.type : 'loop'
      let focus = this.el.dataset.focus ? this.el.dataset.focus : 'center'
      let autoWidth = this.el.dataset.autoWidth ? this.el.dataset.autoWidth : true
      let pagination = this.el.dataset.pagination ? this.el.dataset.pagination : false

      let bar = this.el.querySelector('.prgEl')

      // let dir = bar == null ? 'center' : 'left'

      this.slider = new Splide( this.el,
      {
        type   : type,
        autoWidth: autoWidth,
        // drag:false,
        focus:focus,
        pagination:pagination,
        paginationType: 'bullets',
        omitEnd  : true,
        arrows:false,

      } ).mount()
      
      const lgt = this.el.querySelectorAll('.splide__slide').length - 1

      if (this.el.querySelector('.TL')) this.el.querySelector('.TL').onclick = ()=> this.slider.go('-${i}')
      if (this.el.querySelector('.TR')) this.el.querySelector('.TR').onclick = ()=> { if(this.slider.index < lgt) this.slider.go('+${i}')}

      // if(bar!=null){
      //   this.slider.on( 'mounted move', ()=> {
      //     var end  = this.slider.Components.Controller.getEnd() - 1
      //     var rate = Math.min( ( this.slider.index  ) / end, 1 )
      //     bar.style.width = String( 100 * rate ) + '%'
      //   } )
      // }

    }
    this.setEVT(OPS)
    
  }

  async kill(){
    // this.killEVT()
  }


  setEVT(OPS){

  }
  killEVT(){
    
  }


  resizeFn(SCLLy = window.scrollY,OPS){


    this.set(OPS)

  }

}