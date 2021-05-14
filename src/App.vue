<template>
  <div id="app">
    <router-view></router-view>
    <main-footer></main-footer>
  </div>
</template>

<script>
import MainFooter from './components/MainFooter'

export default {
  name: "App",
  components: {
    MainFooter,
  },
  data() {
    return {
      
    }
  },
};
</script>

<style lang="scss">
@import url('./assets/css/base.css');
</style>
