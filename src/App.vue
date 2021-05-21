<template>
  <div id="app">
    <router-view></router-view>
    <main-footer></main-footer>
    <button @click="updateInfo">修改信息</button>
  </div>
</template>

<script>
import MainFooter from 'components/MainFooter'

export default {
  name: "App",
  components: {
    MainFooter,
  },
  data() {
    return {
      
    }
  },
  mounted() {
    this.promisePracticeV1();

    setTimeout(function () {
      console.log('three');
    }, 0);

    Promise.resolve().then(function () {
      console.log('two');
    });

    console.log('one');
    /*
      上面代码中，setTimeout(fn, 0)在下一轮“事件循环”开始时执行，
      Promise.resolve()在本轮“事件循环”结束时执行，
      console.log('one')则是立即执行
      因此输出顺序为 one two three
    */

    this.promisePracticeV2();

    this.promisePracticeV3();

    this.promisePracticeV4();
  },
  methods: {
    // 推荐第一种写法，因为其为链式写法，看起来更友好
    promisePracticeV1() {
      new Promise((resolve) => {
        setTimeout(() => {
          resolve("Hello World");
        }, 1000)
      }).then(data => {
        console.log(data); // Hello World
        return Promise.resolve(data + '111')
      }).then(data => {
        console.log(data); // Hello World111
        return Promise.resolve(data + '222')
      }).then(data => {
        console.log(data); // Hello World111222
        return Promise.reject(data + 'error');
      }).catch(data => {
        console.log(data); // Hello World111222error
        return Promise.resolve(data + '333');
      }).then(data => {
        console.log(data); // Hello World111222error333
      })
    },
    promisePracticeV2() {
      new Promise((resolve) => {
        setTimeout(() => {
          resolve("Hello World");
        }, 1000)
      }).then(data => {
        console.log(data); // Hello World
        return new Promise((resolve) => {
          resolve(data + '111')
        }) // then也可以放在这里，但是推荐放在下面一行
      }).then(data => {
        console.log(data); // Hello World111
        return new Promise((resolve) => {
          resolve(data + '222')
        }).then(data => {
          console.log(data); // Hello World111222
        })
      })
    },
    promisePracticeV3() {
      new Promise((resolve) => {
        setTimeout(() => {
          resolve("Hello World");
        }, 1000)
      }).then(data => {
        console.log(data); // Hello World
        throw data + '111' // 最简写，直接return
      }).then(data => {
        console.log(data); // Hello World111
        return data + '222' // 最简写，直接return
      }).then(data => {
        console.log(data); // Hello World111222
      }).catch(err => {
        console.log(err)
      })
    },
    promisePracticeV4() {
      Promise.all([
        new Promise(resolve => {
          setTimeout(() => {
            resolve({userName: '111'})
          }, 2000)
        }),
        new Promise(resolve => {
          setTimeout(() => {
            resolve({password: '222'})
          }, 1000)
        })
      ]).then(results => {
        console.log(results)
      })
    },
    updateInfo() {
      this.$store
        .dispatch('aUpdateInfo', '我是信息message')
        .then(res => {
          console.log('已经完成了');
          console.log(res)
        })
    }
  }
};
</script>

<style lang="scss">
@import url('assets/css/base.css');
</style>
