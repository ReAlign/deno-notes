<template>
  <div class="home">
    Home
  </div>
</template>

<script>
export default {
  mounted () {
    //
  },
}
</script>

<style lang="stylus" scoped>
.home {
  position: absolute;
  left: 0;
  right: 0;
  top: $headerHeight;
  bottom: 60px;
  background: linear-gradient(-90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / 50px 50px, linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / 50px 50px;
}
</style>
