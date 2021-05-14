<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="pink">
      <template v-slot:item-icon>
        <img src="@/assets/img/tabbar/index.png" alt="首页">
      </template>
      <template v-slot:item-icon-active>
        <img src="@/assets/img/tabbar/index-active.png" alt="首页">
      </template>
      <template v-slot:item-text>
        <div>首页</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="blue">
      <template v-slot:item-icon>
        <img src="@/assets/img/tabbar/category.png" alt="分类">
      </template>
      <template v-slot:item-icon-active>
        <img src="@/assets/img/tabbar/category-active.png" alt="分类">
      </template>
      <template v-slot:item-text>
        <div>分类</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="red">
      <template v-slot:item-icon>
        <img src="@/assets/img/tabbar/cart.png" alt="购物车">
      </template>
      <template v-slot:item-icon-active>
        <img src="@/assets/img/tabbar/cart-active.png" alt="购物车">
      </template>
      <template v-slot:item-text>
        <div>购物车</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <template v-slot:item-icon>
        <img src="@/assets/img/tabbar/profile.png" alt="我的">
      </template>
      <template v-slot:item-icon-active>
        <img src="@/assets/img/tabbar/profile-active.png" alt="我的">
      </template>
      <template v-slot:item-text>
        <div>我的</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>
<script>
import TabBar from './tabbar/TabBar'
import TabBarItem from './tabbar/TabBarItem'

export default {
  name: "MainFooter",
  data() {
   return {}
  },
  components: {
    TabBar,
    TabBarItem,
  },
  methods:{},
}
</script>
<style lang="scss" scoped>
</style>