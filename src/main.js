import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faGear, faDownload } from '@fortawesome/free-solid-svg-icons'
import { faDocker, faJenkins } from '@fortawesome/free-brands-svg-icons'
//import { faDocker } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faGear, faDownload, faDocker, faJenkins)


createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
