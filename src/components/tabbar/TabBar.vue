<template>
  <div>
    <div id="tab-bar">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabBar",
  data() {
   return {}
  },
  methods:{},
}
</script>
<style lang="scss" scoped>
#tab-bar {
  bottom: 0;
  left: 0;
  right: 0;
  height: 49px;
  display: flex;
  position: fixed;
  align-items: center;
  background-color: #f6f6f6;
  box-shadow: 0 -1px 1px rgba($color: #f6f6f6, $alpha: 0.5);
}
</style>