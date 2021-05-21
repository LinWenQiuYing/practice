import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { http } from './shared/http'

// axios({
//   url: 'http://123.207.32.32:8000/home/multidata'
// }).then(res => {
//   console.log(res)
// })

// axios.all([
//   axios.get('http://123.207.32.32:8000/home/multidata'),
//   axios.get('http://123.207.32.32:8000/home/data?type=sell&page=1')
// ]).then(results => {
//   console.log(results);
// })

http({
  url: '/home/multidata'
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})

// createApp(App).use(router).mount('#app')

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')