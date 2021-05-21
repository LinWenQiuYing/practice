<template>
  <div>
    <p>购物车</p>
    <div>
      <button class="cart-button" @click="reduction">-</button>
      {{$store.state.counter}}
      <button class="cart-button" @click="addition">+</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Cart",
  data() {
   return {
     
   }
  },
  mounted() {
    
  },
  methods:{
    addition() {
      this.$store.commit('addition');
    },
    reduction() {
      this.$store.commit('reduction');
    },
  },
}
</script>
<style lang="scss" scoped>
  .cart-button {
    width: 15px;
  }
</style>