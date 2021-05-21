<template>
  <div>
    <div>首页</div>
    <ul>
      <li @click="changeMenu('hot')">爆款推荐</li>
      <li @click="changeMenu('new')">新品上架</li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>

export default {
  name: "Home",
  data() {
   return {}
  },
  mounted() {
    
  },
  methods:{
    changeMenu(path) {
      let pathArr = this.$route.path.split('/');
      if (path === pathArr[pathArr.length - 1]) {
        return false;
      } else {
        this.$router.push(path)
      }
    },
  },
}
</script>
<style lang="scss" scoped>
</style>