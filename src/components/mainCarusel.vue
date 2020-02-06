<template>
  <div>
    <q-carousel
      v-model="slide"
      :autoplay="4000"
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
      <template v-slot:control>
        <q-carousel-control
          position="bottom-right"
          :offset="[18, 18]"
        >
        </q-carousel-control>
      </template>
    </q-carousel>
  </div>
</template>
<script>
export default {
  data () {
    return {
      slide: 1,
      fullscreen: false,
      imgsCaruselHorisontal: [
        1, 2, 3, 4, 5, 6, 7, 8, 9
      ]
    }
  }
}
</script>
