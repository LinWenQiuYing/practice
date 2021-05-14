<template>
  <div class="tab-bar-item" @click="changeView">
    <div v-if="!isActive" class="item-icon"><slot name="item-icon"></slot></div>
    <div v-else class="item-icon-active"><slot name="item-icon-active"></slot></div>
    <div class="item-text" :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>
<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: '#f4ea2a',
    }
  },
  data() {
   return {

   }
  },
  mounted() {
    
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
      // 不使用this.$route.path === this.path 作为判断条件是因为，倘若为二级路由，如'/home/hot',则会失效
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor} : {}
    },
  },
  methods:{
    changeView() {
      if (this.path === this.$route.path) {
        return false;
      } else {
        this.$router.replace(this.path)
      }
    },
  },
}
</script>
<style lang="scss">
.tab-bar-item {
  flex: 1;
  text-align: center;

  .item-icon, .item-icon-active {
    display: inline-block;
    width: 20px;
    height: 20px;
  }
}
</style>