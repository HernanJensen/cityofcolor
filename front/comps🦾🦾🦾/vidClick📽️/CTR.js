

export default class Video {
  constructor(el) {
    this.el = el

    this.video = this.el.querySelector('video')
    
    this.ctrl = this.el.querySelector('.vCtrl')
    this.ctrlPlay = this.el.querySelector('.vCtrl_pl')
    this.ctrlProg = this.el.querySelector('.vCtrl_prog')
    this.ctrlMute = this.el.querySelector('.vCtrl_mute')
    this.ctrlScrn = this.el.querySelector('.vCtrl_scrn')

    this.ended = 1


    this.isIphone = /iPhone|iPad|iPod/i.test(navigator.userAgent)

    if (this.isIphone) {
      // Eliminar el atributo 'controls' en iPhone
      this.video.removeAttribute('controls')
    }
    
   
    
    this.video.oncanplay = () => {
      this.setEVT()
    }

    
  }


  async setEVT() {

    this.proganim = anime.createTimeline({autoplay:false})
      .add(this.ctrlProg, {
        '--videoprog': ['0%', '100%'],
        duration: this.video.duration,
        ease: 'linear',
      }, 0).init()

    const progFn = ()=>{
      if (this.video.currentTime === 0 ){
        this.proganim.reset()
      }
      this.proganim.play()

      this.ended = 0
    }


		this.video.onclick = () => {
      
			if (this.video.classList.contains('onfullscreen')) return
			if (this.video.paused) {
				// this.video.play()
        progFn()
				
				this.video.classList.remove('paused')
				this.ctrlPlay.classList.add('A')
				this.ctrl.classList.add('A')
				
        this.el.querySelector('.btn').classList.add('A')
			} else {
				// this.video.pause()
        this.proganim.pause()
				
				this.video.classList.add('paused')
				this.ctrlPlay.classList.remove('A')
			}
		}

		this.ctrlPlay.onclick = () => {
			if (this.video.paused) {
				this.video.play()
        progFn()
				
				this.video.classList.remove('paused')
				this.ctrlPlay.classList.add('A')
				this.ctrl.classList.add('A')
			} else {
				this.video.pause()
        this.proganim.pause()
				
				this.video.classList.add('paused')
				this.ctrlPlay.classList.remove('A')
			}
		}

    this.video.onplay = () => {

			// this.video.play()
      progFn()
      this.el.querySelector('.btn').classList.add('A')
      this.video.classList.remove('paused')
      this.ctrlPlay.classList.add('A')
      this.ctrl.classList.add('A')
		}

		// let hideControls
		this.el.onmouseleave = ()=>{
      if (this.video.paused) return
	    this.ctrl.classList.remove('A')
		}

		this.el.onmousemove = ()=>{
      
      if (this.ctrl.classList.contains('A') || this.ended) return
			this.ctrl.classList.add('A')
			
		}
	
		this.video.onpause = () => {
		  this.video.classList.add('paused')
		  
		  this.ctrlPlay.classList.remove('A')
      this.proganim.pause()
		}
	
		this.video.onended = () => {
      this.ended = 1
			this.video.classList.add('paused')
      this.ctrlPlay.classList.remove('A')
      this.ctrl.classList.remove('A')
      this.el.querySelector('.btn').classList.remove('A')
      this.proganim.pause()
		}

		// this.video.ontimeupdate = (e) => {
		// 	const pr = Math.round(e.target.currentTime * 100)
    //   anime.utils.set(this.ctrlProg, {'--videoprog': (pr / e.target.duration) + '%'})
		// }

		// Seek functionality
    this.ctrlProg.onclick =  (e) => {
      const rect = this.ctrlProg.getBoundingClientRect()
      const clickX = e.clientX - rect.left
      const width = rect.width
      const newTime = (clickX / width) * this.video.duration
      this.video.currentTime = newTime
      this.proganim.seek(this.video.currentTime)
    }

		this.ctrlScrn.onclick = ()=>{
      
      if (this.isIphone) {
        this.video.setAttribute('controls', true)
        if (this.video.webkitEnterFullscreen) {
          this.video.webkitEnterFullscreen()
        }
        
      }else{
        if (this.video.requestFullscreen) {
          this.video.requestFullscreen()
        } else if (this.video.mozRequestFullScreen) { /* Firefox */
          this.video.mozRequestFullScreen()
        } else if (this.video.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
          this.video.webkitRequestFullscreen()
        } else if (this.video.msRequestFullscreen) { /* IE/Edge */
          this.video.msRequestFullscreen()
        }
        else {
    
        }
      }
			
		}

		this.ctrlMute.onclick = () => {
			if (this.video.muted) {
				this.video.muted = false
				this.ctrlMute.classList.remove('A')
			}
			else {
				this.video.muted = true
				this.ctrlMute.classList.add('A')
			}
		}
		
    // Añadir listener para fullscreenchange
		const handleFullscreenChange = () => {
			if (document.fullscreenElement === this.video || 
					document.webkitFullscreenElement === this.video || 
					document.mozFullScreenElement === this.video || 
					document.msFullscreenElement === this.video) {
				this.video.classList.add('onfullscreen')
			} else {
				this.video.classList.remove('onfullscreen')
       
			}
		}

		document.addEventListener('fullscreenchange', handleFullscreenChange)
		document.addEventListener('webkitfullscreenchange', handleFullscreenChange)
		document.addEventListener('mozfullscreenchange', handleFullscreenChange)
		document.addEventListener('msfullscreenchange', handleFullscreenChange)

    // Eventos específicos de Safari en iOS
    this.video.addEventListener('webkitbeginfullscreen', () => {
      // El video entró en pantalla completa en iPhone
      this.video.classList.add('onfullscreen')
    })

    this.video.addEventListener('webkitendfullscreen', () => {
      // El video salió de pantalla completa en iPhone
      this.video.classList.remove('onfullscreen')
      this.video.removeAttribute('controls') // Eliminar controles nativos
    })
  }

}

