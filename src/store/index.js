import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  // modules: {
  //   menuNodes,
  //   common
  // },
  state: {
    counter: 0,
    info: {
      name: 'zhangsan',
      age: 18,
      height: 1.98,
    }
  },
  mutations: {
    addition(state) {
      state.counter++;
    },
    reduction(state) {
      state.counter--;
    },
    updateInfo(state) {
      state.info.name = 'lisi';
    }
  },
  actions: {
    // aUpdateInfo(context, payload) {
    //   setTimeout(() => {
    //     context.commit('updateInfo');
    //     console.log(payload.message);
    //     payload.success();
    //   }, 1000)
    // },
    aUpdateInfo(context, payload) {
      return new Promise((resolve) => {
        setTimeout(() => {
          context.commit('updateInfo');
          console.log(payload);
          resolve('test111111')
        }, 1000)
      })
    },
  },
  getters: {},
  modules: {},
  strict: debug
})

export default store