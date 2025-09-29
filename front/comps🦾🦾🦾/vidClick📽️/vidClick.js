import { 
  cleanVID
} from '/front/doom🛡️🛡️🛡️/loads.js'



export function vidclickFn({anm,ass, enter='bottom', leave=false}){
    // 💡 Si tiene botón, con botón, si no, al video
    const clicker = 
      ass.parentNode.querySelector('.vidClick') ? ass.parentNode.querySelector('.vidClick') : ass
    console.log(clicker)
    // setVID(ass)
    ass.oncanplay = () => {

      if (ass.isPlaying) {
        ass.classList.add('L')
        cleanVID(ass)
      }

    }
    clicker.onclick = () =>{
      console.log(this.size)
      const url = ass.dataset['src'+this.size] ? ass.dataset['src'+this.size] :
      (ass.dataset.src ? ass.dataset.src : ass.src) 

      if(url != ass.src){
        // setVID(ass)
        ass.src = url
        ass.muted = false
        ass.loop = false
        ass.load()
      }
      ass.play(),ass.parentNode.classList.add('run','A'),anm.play()
      // ass.paused == true ? 
      // [ass.play(),ass.classList.add('run'),anm.play()] : 
      // [ass.pause(),ass.classList.remove('run')]

    }

    return anime.animate(ass, {
      duration: 0,
      autoplay: anime.onScroll({
        enter,
        leave,
        onLeave:(self) => {
          ass.paused == false ? [ass.pause(),ass.currentTime = 0,ass.parentNode.classList.remove('A','run')] : false
        }
      })

    })

  }



export function setCtr(ass) {
  if (ass.parentNode.querySelector('.vid_Ctr_mute')) {
    const muteCtr = ass.parentNode.querySelector('.vid_Ctr_mute')
    muteCtr.onclick = () => {


      muteCtr.classList.contains('A') ?
        [muteCtr.classList.remove('A'), ass.muted = false]
        : [muteCtr.classList.add('A'), ass.muted = true]


    }

  }
  if (ass.parentNode.querySelector('.vid_Ctr_pl')) {
    
    const mutePL = ass.parentNode.querySelector('.vid_Ctr_pl')
    mutePL.onclick = () => {
      const vid = ass.parentNode
      vid.classList.contains('run') ?
        [vid.classList.remove('run'), ass.pause()]
        : [vid.classList.add('run'), ass.play()]


    }
  }
}