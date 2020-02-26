<template>
  <div class="backgroundMobile">
    <q-layout>
      <div>ffff</div>
    </q-layout>
  <!--
  <q-img
      class="absolute"
      src="~assets/img/mobile/background/IMG_2592.jpg"
      style="height: 100vh;"
    />
    <q-carousel
      v-model="slide"
      :autoplay="5000"
      animated
      infinite
      height="100vh"
      class="absolute-top"
    >
      <q-carousel-slide
        v-for="(img, index) in imgsCaruselHorisontal"
        :key="index"
        :name="img"
        :img-src="require(`assets/img/slaid/hor/${img}.jpg`)"
      />
    </q-carousel>
    -->
  </div>
</template>
<script>
export default {
  data () {
    return {
      slide: 1,
      imgsCaruselHorisontal: [
        1, 2, 3, 4, 5, 6, 7, 8, 9
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  .backgroundMobile {
    background: url('../assets/img/mobile/background/IMG_2592.jpg')
  };
</style>
