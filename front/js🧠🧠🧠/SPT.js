import { parseCustomData } from '/front/js🧠🧠🧠/🔧utils.js'

export async function setSPT(first = 0, hold = false){
  

  hold = hold == false ? document : hold

  const
  PROMs = [],
  splits = first == 0 ? hold.querySelectorAll('[data-split]') : document.querySelectorAll('[data-split]')

  for (let spt of splits) {
    if(spt.classList.contains('aTit')) continue

    const PROM = doSPT(spt)
    PROMs.push(PROM)
  }

  await Promise.all(PROMs)
  .then((data)=>{
    for(let a of data){
      if(!a.$target)
        continue
      this.splits.set(a.$target,a)

    }

  })

}


export function doSPT(spt) {
  

    const ops = spt.dataset.split != 'true' ? parseCustomData(spt.dataset.split) : {}
    delete spt.dataset.split

    return new Promise((resolve, reject) => {

      anime.text.split(spt,ops)
      .addEffect(self => resolve(self))

    })

}
export async function cleanSPT(spt = false){
  spt = spt == false ? this.splits : spt 

  // console.log(spt.size)

  for (const [key, a] of spt) {

    if(!document.contains(a.$target)){
      spt.delete(key)
    }

  }
  // console.log(spt.size)

}