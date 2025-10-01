
export async function callFRM(global, func = 'sendForm') {

  //🧹 CLEAN GLOBAL
  if (global.lenis) delete global.lenis
  if (global.SLL) delete global.SLL
  if (global.initCTA) delete global.initCTA

  if (global.cookies && isNaN(global.cookies)) delete global.cookies

  if (global.form) console.log(global.form)
  return new Promise((resolve) => {


    let url = window.location.pathname
    url = url != '/' ? url.replace(/\/$/, "") : url

    const urlParams = new URL(window.location.href)
    url = urlParams.searchParams.has('uC') ? urlParams.searchParams.get('uC') : url

    if (global.files) {

      global.form.append('views', url)

    }

    // console.log(global.base)
    const callUrl = global.base + "wp-json/csskiller/v1/sendForm",
      method = 'POST',
      headers = undefined,
      body = global.form,
      thenFn = async (response) => {
        const data = await response.json()
        resolve(data)
      }

    fetch(callUrl, {
      method,
      headers,
      body,
    })
      .then(async (response) => thenFn(response))
      // .catch(error => console.error('Error:', error))
      .catch(error => console.error(error))


  })
}


