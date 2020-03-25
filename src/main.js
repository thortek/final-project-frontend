import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { createProvider } from './vue-apollo'
import VueTruncate from 'vue-truncate-filter'
import router from './router'

Vue.use(VueTruncate)

Vue.config.productionTip = false

new Vue({
  vuetify,
  apolloProvider: createProvider(),
  router,
  render: h => h(App)
}).$mount('#app')
