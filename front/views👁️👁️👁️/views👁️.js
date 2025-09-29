//🟠🔴🔵🟢🟣🟡⚪⚫🟤
import {home} from './⚪home/homemain';
// import {page} from './🔵page/pagemain';
// import {works} from './🟡works/worksmain';
// import {project} from './🟡🟡project/projectmain';
// import {about} from './🟢about/aboutmain';
import {legal} from './🟣legal/legalmain';
import {doom} from '/front/doom🛡️🛡️🛡️/doom🛡️'

export const views = new Map()

// const home = 'meh'
views.set('home',home)
// views.set('page',page)
// views.set('work',works)
// views.set('project',project)
// views.set('about',about)
views.set('legal',legal)
// views.set('error',error)
// views.set('legal',legal)
//podemos hacer que doom sea estandar
views.set('default',doom)
