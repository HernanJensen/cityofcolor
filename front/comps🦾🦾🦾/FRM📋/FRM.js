import { deleteFn, dragOff, changeOn, dropFn } from '/front/atoms🧿🧿🧿/filenpt.js'
import { swiftOut as ease, timeout } from '/front/js🧠🧠🧠/🔧utils.js'


import { callFRM } from './callFRM.js'









function frmFn(OPS, FRM, ANMs) {
  const base = OPS.get('base')

  if (FRM.onsubmit) return false


  if (FRM.querySelector('.file')) {

    FRM.allFiles = []

    const file = FRM.querySelector('.file input')
    const drop = FRM.querySelector('.file_drop')


    file.addEventListener('change', (e) => changeOn(e, file, ANMs))
    drop.addEventListener('dragover', (e) => dragOff(e))
    drop.addEventListener('drop', (e) => dropFn(e, file, ANMs))
    drop.addEventListener('click', (e) => { file.click() })



  }

  FRM.onsubmit = async (ev) => {
    ev.preventDefault()

    // para el primer submit, para que salgan los errores.
    FRM.classList.add('subm')
    if (FRM.checkValidity()) {
      // if(1 == 1){


      const info = []
      const formData = new FormData()
      formData.append('functionToCall', 'sendForm')
      // Se rellena en PHP
      formData.append('ops', JSON.stringify([]))
      formData.append('base', base)
      // por si necesitamos adjuntar subjetct, to, captcha
      // formData.append('subject','')
      // formData.append('to',')
      // formData.append('captcha','')
      const tit = {
        label: 'Título',
        value: FRM.dataset.title ?? ''
      }
      if (tit.value != '')
        info.push(tit)
      // LABEL Y VALUE
      for (let a of FRM.querySelectorAll('input[type="text"],input[type="email"],input[type="tel"],textarea,input[type="radio"]:checked')) {
        if (a.type == 'file') continue
        const ob = {
          label: a.type == 'radio' ? a.parentNode.parentNode.parentNode.dataset.label : (a.parentNode.querySelector('label') ? a.parentNode.querySelector('label').innerHTML : a.name),
          value: a.type == 'radio' ? a.parentNode.querySelector('label').innerHTML : a.value
        }

        if (ob.value != '')
          info.push(ob)

      }

      formData.append('form', JSON.stringify(info))

      // Por si hay archivos
      if (FRM.allFiles) {
        for (let file of FRM.allFiles) {

          formData.append('files[]', file)

        }
      }

      // El files 1 es por si trae archivos ??
      const infomail = {
        base,
        form: formData,
        // files: FRM.allFiles ? 1 : 0
        files: 1
      }

      const DATA = await callFRM(infomail, 'sendForm')
      FRM.classList.add('frmDone')

      await timeout(2600)

      for (let a of FRM.querySelectorAll('input[type="text"],input[type="email"],input[type="tel"],textarea,input[type="radio"]:checked,input[type="checkbox"]:checked')) {
        a.value = ''
        if (a.type == 'radio' || a.type == 'checkbox') a.checked = false
      }
      FRM.classList.remove('frmDone')

    }

  }

}





export function setFRMs(OPS, hold = false) {

  const ANMs = new Map()
  ANMs.set('setOBS', () => this.setOBS())

  const FRMstd = new Map()
  FRMstd.set('default', (OPS, el) => frmFn(OPS, el, ANMs))

  const FRMviu = this.VIU.setFRM()
  const FRMmap = new Map([...FRMstd, ...FRMviu])


  hold = hold == false ? document : hold

  const FRMs = hold.querySelectorAll('form') ? hold.querySelectorAll('form') : [hold]

  for (let frm of FRMs) {
    // const FRM = FRMmap.has(frm.id) ? FRMmap.get(frm.id) : FRMmap.get('default')
    const FRM = FRMmap.has(frm.dataset.type) ? FRMmap.get(frm.dataset.type) : FRMmap.get('default')

    FRM(OPS, frm)

  }
}