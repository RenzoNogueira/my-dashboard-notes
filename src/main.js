import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* importa os ícones que serão utilizados */
import { faTimes } from '@fortawesome/free-solid-svg-icons'
/* Adiciona o ícone ao componente */
library.add( faTimes )

/* add font awesome icon component */
Vue.component( 'font-awesome-icon', FontAwesomeIcon )

// Bootstrap
import 'bootstrap/dist/js/bootstrap.min.js'
// import 'bootstrap/dist/css/bootstrap.min.css' // Bootstrap CSS customizado aplicado no pela pasta frameworks

Vue.config.productionTip = false

new Vue( {
	router,
	render: h => h( App )
} ).$mount( '#app' )
