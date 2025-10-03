export function sldSnapFn({ slider, speed = 1.4, isTouch = false, blts = false, slidesClass = false }) {

  console.log('te meto una torta paiaso')
  let sll = 0,
    start = 0,
    down = 0,
    obj = { x: 0 }


  const els = slidesClass ? slider.querySelectorAll(`${slidesClass}`) : slider.querySelectorAll('.sld_el')

  const ANM = anime.createAnimatable(slider, { scrollLeft: .36, ease: 'out(3)' })
  // Si hay bullets
  let blt = blts ? (slider.querySelector('.bltA') ? slider.querySelector('.bltA') : blts[0]) : false

  // Si no existe bltActivo, al primero ( Se puede hacer para que busque el centrado y tal )
  if (blt)
    blt.classList.add('bltA')


  slider.onmousedown = isTouch ? undefined : (e) => {
    down = 1
    slider.classList.add('A')
    start = e.pageX - slider.offsetLeft
    sll = slider.scrollLeft

  }

  const outFn = isTouch ? undefined : () => {
    if (down == 0) return false
    down = 0
    slider.style.pointerEvents = 'none'
    const old = slider.scrollLeft
    slider.classList.remove('A')
    // console.log(slider.scrollLeft)
    const to = slider.scrollLeft
    slider.classList.add('A')

    anime.animate(slider, {
      scrollLeft: [old, to],
      duration: .6,
      ease: 'out(3)',
      onComplete: () => {
        slider.style.pointerEvents = ''
        slider.classList.remove('A')

        ANM['scrollLeft'](to)
        if (blts) {
          // posición final del slider para comprobar 
          const end = slider.getBoundingClientRect().left
          for (let [i, a] of els.entries()) {

            // Busca el más cercano al principio del slider ( Resta igual entre -10 y 10 ), 
            // console.log(a.getBoundingClientRect().left - end+' pos:'+i)
            const calc = a.getBoundingClientRect().left - end
            if (calc >= -10 && calc <= 10) {
              // cambia por el nuevo si son distintos borra el activo
              if (blt != blts[i]) {
                blt.classList.remove('bltA')
                blt = blts[i]
                blt.classList.add('bltA')
              }
              // al encontrar, rompe for
              break
            }

          }

        }
      }
    })

  }

  slider.onmouseleave = outFn
  slider.onmouseup = outFn

  slider.onmousemove = isTouch ? undefined : (e) => {
    if (down == 0) return false
    e.preventDefault()
    const x = e.pageX - slider.offsetLeft,
      walk = (x - start) * speed
    // slider.scrollLeft = sll - walk

    ANM['scrollLeft'](sll - walk)
  }
}