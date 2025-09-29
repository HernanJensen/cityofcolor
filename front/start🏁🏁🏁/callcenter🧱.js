
export async function callCenter(global, func = 'callCenter') {

  //🧹 CLEAN GLOBAL
  if (global.lenis) delete global.lenis
  if (global.initCTA) delete global.initCTA
  if (global.SLL) delete global.SLL

  return new Promise((resolve) => {
    // let url = window.location.pathname.replace('.php','')
    let view = import.meta.env.DEV ? window.location.pathname : global

    let url = view
    const urlParams = new URL(window.location.href)

    // SANITY
    // const method = import.meta.env.DEV ? 'POST' : 'GET'

    //WP
    global.params = urlParams.search
    url = urlParams.searchParams.has('uC') ? urlParams.searchParams.get('uC') : url
    let callUrl = import.meta.env.DEV == true ? window.location.origin.replace('1234', '8888') + '/php/main.php' : global.base



    // PARAMS FETCH
    const method = 'POST'


    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
    }

    const body = import.meta.env.DEV == true ? new URLSearchParams({
      functionToCall: func,
      views: JSON.stringify(url),
      ops: JSON.stringify(global)
    }) : null

    // END WP

    fetch(callUrl, {
      method,
      headers,
      body,
    })
      .then(async (response) => {
        const data = import.meta.env.DEV ? await response.json() : await response.text()
        resolve(data)
      })
      .catch(error => console.error('Error:', error))


  })
}


