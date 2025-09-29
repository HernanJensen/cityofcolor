const loadPosts = document.getElementById('loadPosts')
const holdPosts = document.getElementById('holdPosts')
const holdPages = document.getElementById('holdPages')

if (loadPosts) {

  loadPosts.onclick = async () => {

    if (this.busy) return false
    this.busy = 1

    // SEND INFO
    const global = {
      base: OPS.get('base'),
      type: 'post',
      page: 1,
      ishtml: 1,
      cats: '',

    }

    // Data prom
    const DATAprom = new Promise(async (resolve, reject) => {
      const DATA = await callCenter(global, 'getPosts')
      resolve(DATA)
    })


    // SLL stuff, ANM, ETC
    lenis.stop()
    const navH = anime.utils.get(document.documentElement, '--headH', false) ?? 0,
      H = window.innerHeight,
      SLLprom = new Promise((resolve, reject) =>
        lenis.scrollTo(holdPosts, { offset: -navH, duration: .6, force: true, lock: true, onComplete: () => resolve() })
      ),
      //ANM before
      ANMholdpost =
        anime.animate(holdPosts, { height: H + 'px', opacity: 0, duration: .6, ease: swiftOut })


    // Promesas : DATA y SLL, y animación del holdPost
    const promsStart = await Promise.all([
      DATAprom,
      SLLprom,
      ANMholdpost

    ])



    holdPosts.innerHTML = ''

    const DATA = promsStart[0]

    // console.log(DATA)
    const parser = new DOMParser()
    const htmlPosts = parser.parseFromString(DATA['posts'], 'text/html')
    await holdPosts.insertAdjacentHTML('beforeend', htmlPosts.body.textContent)
    const htmlPages = parser.parseFromString(DATA['pages'], 'text/html')
    await holdPages.insertAdjacentHTML('beforeend', htmlPages.body.textContent)




    const promsEnd = await Promise.all([

      this.loadFn(0, holdPosts)

    ])


    // END
    holdPosts.style.height = ''

    anime.animate(holdPosts, {
      opacity: 1,
      height: {
        from: H + 'px',
        to: holdPosts.clientHeight + 'px',
      },
      duration: .6, ease: swiftOut,
      onComplete: () => {
        holdPosts.style.height = ''
        holdPosts.style.opacity = ''
      },
      // 
    })


    this.LZY.methods.lazy(this.LZY, holdPosts)
    lenis.start()
    initCTA()

    delete this.busy

  }
}