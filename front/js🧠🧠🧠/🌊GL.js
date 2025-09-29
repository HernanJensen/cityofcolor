import { Renderer, Camera, Transform, Texture } from "ogl"




export class GL{
  constructor (OPS) {

    this.SCR = [
      window.innerWidth,
      window.innerHeight
    ]


    this.createRenderer()
    this.createCamera()
    this.createScene()

    this.resizeFn()

    // console.log(this.gl)

  }
  
  

  
  createRenderer() {
    const canvas = document.createElement('canvas')
    canvas.id = 'gl'

    document.body.insertAdjacentElement('afterbegin',canvas)
    

    this.renderer = new Renderer({
      canvas,
      alpha: true,
      antialias: true,
      dpr: Math.min(window.devicePixelRatio, 2),
    })

    this.renderer.setSize(this.SCR[0], this.SCR[1])


    this.gl = this.renderer.gl
  }
  createCamera() {
    this.camera = new Camera(this.gl)
    this.camera.fov = 45
    this.camera.position.z = 20
    
  }

  createScene() {
    this.scene = new Transform()
  }

  createGeometry() {
    this.planeGeometry = new Plane(this.gl, {
      heightSegments: 1,
      widthSegments: 100,
    })
  }



  updFn(){

    this.renderer.render({
      scene: this.scene,
      camera: this.camera
    })

  }

  resizeFn() {
    

    this.renderer.setSize(this.SCR[0], this.SCR[1])

    this.camera.perspective({
      aspect: this.gl.canvas.width / this.gl.canvas.height,
    })

    const fov = this.camera.fov * (Math.PI / 180)
    const h = 2 * Math.tan(fov / 2) * this.camera.position.z
    const w = h * this.camera.aspect

    this.VP = [
      h,
      w
    ]

   
    this.renderer.render({
      scene: this.scene,
      camera: this.camera
    })
  }

}




export async function initGL(){

  // console.log(this.TX)




}




export async function addTX(media=undefined){

  // console.log(this.TX)
  // console.log(media)
  const src = media.src ? media.src : false
  
  // console.log('tiene la tx '+src+':'+this.TX.has(src))

  if( this.TX.has(src) ){

    // console.log(this.TX.get(src))
    // this.TX.get(src).media = media
    if(import.meta.env.DEV == true && media.tagName == 'IMG') media.crossOrigin = ''
    // if(media.tagName == 'VIDEO') media.crossOrigin='anonymous'
    // CREAR TEXTURA
    const texture = await new Texture( this.GL.gl, {
      generateMipmaps: false,
      image:media,
      needsUpdate :media.tagName == 'VIDEO' ? true : false
    })

    // texture.image = media
    // if(media.tagName == 'VIDEO'){

    //   texture.needsUpdate = true
    //   // texture.image = media
    // }

    this.TX.get(src).texture = texture


    // console.log(this.TX.get(src))
    // console.log('create texture')
    // this.TX.get(src).active = 1
  }

  // console.log(this.IOS[0].has('CLS'))

  // const arr = this.IOS.filter((io) => {
  //   console.log('pachuca')
  //   console.log(io)
  //   if(io.has('CLS')){

  //     if(io.get('CLS').TX){
  //       return io.get('CLS')
  //     }


  //   }
  //   return false
  
  // })
  

}

// esto habrá que lanzarlo después del initIOS, que lo que hará será buscar 
// Si el img viene undefined, buscamos todas las tx, y si no están iniciadas, las iniciamos. 
export async function initTX(img=undefined){
  
  // console.log('get textures')
  if(img == undefined){


    const IOTX = this.IOS.filter((io) => {

      if(io.has('CLS')){

        if(io.get('CLS').TX){
          
          
          return true
        }


      }
  
  })


  for(let io of IOTX){

    const CLS = io.get('CLS')
    // CLS.VP = this.GL.VP
    for(let tx of CLS.TX ){
      // console.log(tx.src)
      tx.texture = this.TX.get(tx.src).texture


      console.log(tx)
      
    }

    CLS.createShape()

    
  }
  // let url = a.dataset.src || a.dataset.oi
  // let exists = this.TX.find((element)=> element.src == url)





  }

}