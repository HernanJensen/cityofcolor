
export function showCookies(state = 0, cookiesToAccept = undefined){

  if(state==0){
    return false
  }
  else if(state == 1){

    getCookies(cookiesToAccept)
    return false
  }

  const 
  alert = document.querySelector('.cooklrt'),
  dialog = document.querySelector('.cookpnl'),
  config = alert.querySelector('.cook_config'),
  reject = alert.querySelector('.cook_reject'),
  acceptAll = document.querySelectorAll('.cook_acceptall'),
  acceptSel = dialog.querySelector('.cook_acceptsel'),
  close = dialog.querySelector('.cookpnl_c')


  // ANMs
  const 
  cookiesANM = anime.createTimeline({
    autoplay:false,
    onComplete:()=>{
      
    }
  })
  .add(alert,{
    y:[100+'%',0+'%'],
    duration:1,
    ease:swiftOut
  },0)

  const 
  cookiesOutANM = anime.createTimeline({
    autoplay:false,
    onComplete:()=>{
      alert.remove()
    }
  })
  .add(alert,{
    y:100+'%',
    duration:1,
    ease:swiftOut
  },0)

  const
  dialoginANM = anime.createTimeline({
    autoplay:false,
    onBegin:()=>{
      
      dialog.showModal()
    
    },
    onComplete:()=>{

      // dialoginANM.cancel()
    }
  })
  .add(dialog,{
    opacity:1,
    duration:.6,
    ease:swiftOut
  },0)
  
  // METER LAS X
  const
  dialogOutANM = anime.createTimeline({
    autoplay:false,
    onComplete:()=>{
      
      dialog.close()
      dialog.remove()
      dialoginANM.cancel()
      dialogOutANM.cancel()
    }
  })
  .add(dialog,{
    opacity:[1,0],
    duration:.6,
    ease:swiftOut
  },0)

  // EVTs
  if(config){
    config.onclick = () =>{
      cookiesOutANM.init().play()
      dialoginANM.play()
    
    }
  }
  if(reject){
    reject.onclick = () =>{
      cookiesOutANM.init().play()
      dialog.remove()
      setCookies([])
      getCookies([])


    
    }
  }
  if(close){

    dialoginANM.add(
      close.querySelectorAll('span'),{
      duration:.6,
      ease:swiftOut,
      '--scx0':1,
      '--scx1':{
        to:1,delay:.2
      },
    },.6)

    close.onclick = () =>{

      dialogOutANM.play()
      // setCookies([])
      // getCookies([])
    
    }
  }


  if(acceptAll){
    for(let a of acceptAll){

      a.onclick = () =>{

        
        setCookies(cookiesToAccept)
        getCookies(cookiesToAccept)

        if(dialog && dialog.open)
          dialogOutANM.init().play()

          if(alert){

            cookiesOutANM.init().play()
          }
        }

        

    }
  }




  if(acceptSel){

      acceptSel.onclick = () =>{
        // Checkear si está open
        for(let [i,a] of cookiesToAccept.entries()){

          if(!dialog.querySelector('input#'+a.ckID+'check').checked){
          // if(dialog.querySelector('input#'+a.ckID+'check')){
          cookiesToAccept.splice(i,1)
          }
        }


        setCookies(cookiesToAccept)
        getCookies(cookiesToAccept)
        if(dialog && dialog.open)
          dialogOutANM.init().play()



    }
  }
  


  return cookiesANM


}

export function setCookies(cookiesToAccept = []){

  let arr = []

  
  if(cookiesToAccept.length <= 0){
    localStorage.setItem('martinon_cookies',0)

  }
  else{
    localStorage.setItem('martinon_cookies',1)
    for(let a of cookiesToAccept){

      
      arr.push(a.ckID)
    }

    localStorage.setItem('martinon_cookiesID',arr.join())
    // console.log(arr)
    // console.log(arr.join())
    // console.log(arr.join().split(','))
  }

}
export function getCookies(cookiesToAccept = [], state = -1){

  let IDs = localStorage.getItem('martinon_cookiesID') ? localStorage.getItem('martinon_cookiesID') : ''
  // localStorage.setItem('martinon_cookies',state)
  if(state == 0){
    return false
  }
  else{

    
  }
  
  



  for(let[i,a] of cookiesToAccept.entries()){
    
    if(a.cKscript && IDs.includes(a.ckID) ){
      
      const node = document.createRange().createContextualFragment((import.meta.env.DEV == true) ? '<script>console.log("Youareinlocal")</script>' : a.cKscript)
      document.body.prepend(node)

    }

  }


}
