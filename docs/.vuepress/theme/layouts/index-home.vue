<template>
  <div class="m-home">
    <div class="m-home-text">
      <img src="/img/deno_logo_3.svg" alt="">
      <span>Deno Notes</span>
    </div>
    <!-- <div class="u-home-links">
      <a href="/posts/">Tutorial →</a>
    </div> -->
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
.m-home {
  position: absolute;
  left: 0;
  right: 0;
  top: $headerHeight;
  bottom: 0;
}
.m-home-text {
  position: absolute;
  top: 44%;
  left: 50%;
  transform: translate(-50%, -50%);

  text-align: center;
  & > img {
    width: 160px;
  }
  & > span {
    display: block;
    font-size: 72px;
    font-family: PT Serif, Serif;
  }
  /*font-weight: lighter;*/
}
/*
.u-home-links {
  position: absolute;
  top: calc(44% + 80px);
  left: 50%;
  transform: translate(-50%, -50%);
  & > a {
    font-size: 22px;
    font-weight: 300;
    text-decoration: none;
  }
}
*/
</style>
