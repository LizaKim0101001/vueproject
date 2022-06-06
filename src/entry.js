import App from './App.vue'
import router from '@/router'

// Register local assets & components globally
require('@/utils/register-assets')
require('@/utils/register-components')

new Vue({
    el: '.vue-app',
    router: router(),
    render: h => h(App),
  })