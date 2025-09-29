import {timeout,swiftOut} from '/front/js🧠🧠🧠/🔧utils.js'

export function hovANM(a){


  return anime.createAnimatable(a,{
    '--first':.5,
    '--last':.5,
    ease:'out(2.4)',
  })

}

export function split(el=false,to='lines'){
  return el ? new SplitType(el, { types: 'lines,words' }) : false

}

export function linesShow(el=false,ops = { duration:1, start:'110%', autoplay:false }){

  const splitText = split(el)

  const elw = el.clientWidth

  const ANM = anime.createTimeline({autoplay:ops.autoplay,onComplete:()=>{
    // splitText.revert()
  }})

  const totaldur = .8


  for(let [i,line] of el.querySelectorAll('.line').entries() ){
    
    const dur = (totaldur * line.clientWidth) / elw
    // const dur = .8
    ANM.add(line,{
      '--yLine':[1,0],
      duration:dur,
      ease:'in(1.6)',
      // delay:(.14*i) + (totaldur - dur),
      delay:(totaldur - dur),

    },0)
    .add(line.querySelectorAll('.word'),{
      
      y:['110%','0%'],
      duration:totaldur,
      ease:swiftOut,
      delay:(.14*i) + (totaldur * .75),

    },0)
  }

  ANM.init()

  return ANM

}


export function elY100(el=false,ops = { duration:1,delay:0, autoplay:false }){

  const ANM = anime.animate(el,{
      
    autoplay:ops.autoplay,
      y:['100%','0%'],
      duration:ops.duration,
      delay:ops.delay,
      ease:swiftOut,

    },0)

  return ANM

}

// LAZY ANM
// 💡 Modificar si quieres cambiar la animación de entrada lazy. 
  // por ahora solo default ( un opacity normal ) y 'none', que es para que respete los clicks.
  // para añadir nuevos, se insertan con el set, y en el elemento endiñamos el dataset-xx
export const lazyanm = new Map()

lazyanm
  .set(
  'default',
    (el)=> anime.animate(el, {
        opacity:[0,1],
        duration:.6,
        autoplay:false,
        // onComplete:()=>{
        //   anime.utils.set(el,{opacity:1})
        // }
        // delay:.01,

        // delay:4,

      })

  )
  .set(
  'none',
  (el)=>
    anime.animate(el, {
      visibility:'visible',
      duration:0.0001,
      autoplay:false,
      
    })
  )
  .set(
  'revIm',
  (el)=>{

    const parent = el.parentNode
    const anm = anime.createTimeline({autoplay:false})
    .add(parent, {
      opacity:{
        to:[0,1],
        duration:.6,
        ease:'inOut(2)'
      },
      '--timer1':{
        to:[1,0],
        duration:.8,
        delay:.2,
        ease:'inOut(2.4)'
      },
      
      
    },0)
    return anm
    
  })