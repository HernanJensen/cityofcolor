import { filelist } from '/front/js🧠🧠🧠/HTML.js'
import { timeout } from '/front/js🧠🧠🧠/🔧utils.js'

export const deleteFn = async (e,el,form) =>{
    // console.log(el.dataset.pos)
    console.log(form.allFiles)

    form.allFiles.splice(el.dataset.pos,1)
    el.classList.remove('A')
    await timeout(460)
    
    console.log(form.allFiles)
    el.remove()

}

export const dragOff = (e) =>{
  e.preventDefault()
}



export const changeOn = (e,npt,viuFn) =>{
    const parent = npt.parentNode
    parent.classList.remove('file-err')
    e.preventDefault()
    if(!e.target.files && !e.dataTransfer.files) return false
    let reader = new FileReader()
    const file = e.target.files ? e.target.files[0] : e.dataTransfer.files[0]
    if(file == undefined) return false
    // console.log(file)
    reader.readAsText(file)
    // console.log(reader)
    // console.log(file.size)

    if(
      ['png','webp','jpg','jpeg'].indexOf(file.name.split('.').pop()) === -1
      || (file.size > 2000000)
    ){

      parent.classList.add('file-err')
      
      // console.log(file.name)
      // console.log(file.name.split('.').pop())
      // console.log('no in')
      // console.log(file.size > 2000000)
      return false
    }
    else{

      const pos = npt.form.allFiles.length,
      url = URL.createObjectURL(file),
      title = file.name,
      html = filelist(title,url,pos)
      parent.querySelector('.file_list').insertAdjacentHTML('beforeend',html)
      const el = document.querySelector('.file_list_el[data-pos="'+pos+'"]')
      viuFn.get('setOBS')([el])
      
      el.classList.add('A')
      npt.form.allFiles.push(file)

      el.querySelector('button').onclick = (e) => deleteFn(e,el,npt.form)
      npt.value = ''

    }


      // console.log(e.dataTransfer.files[0].name)
      // npt.parentNode.file = e.target.files[0]
      
  }


  export const dropFn = (e,npt,viuFn) =>{
    e.preventDefault()

    // console.log(e)
    changeOn(e,npt,viuFn)
  }


  // export const getFileExtension = (file)=> {
  //   return file.name.split('.').pop()
  // }