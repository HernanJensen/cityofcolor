//🟠🔴🔵🟢🟣🟡⚪⚫🟤
import { home } from './⚪home/homemain';
import { about } from './🔵about/aboutmain';
import { que } from './🟢que/quemain';
import { quien } from './🟤quien/quienmain';
import { contact } from './🟠contact/contactmain';
import { legal } from './🟣legal/legalmain';
import { error } from './🔴error/errormain';
import { doom } from '/front/doom🛡️🛡️🛡️/doom🛡️'

export const views = new Map()

// const home = 'meh'
views.set('home', home)
views.set('about', about)
views.set('que', que)
views.set('quien', quien)
views.set('contact', contact)
views.set('legal', legal)
views.set('error', error)
// views.set('legal',legal)
//podemos hacer que doom sea estandar
views.set('default', doom)
