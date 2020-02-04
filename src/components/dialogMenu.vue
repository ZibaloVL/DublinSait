<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn label="Carousel" color="primary" @click="carousel = true" />
    <q-dialog
      v-model="carousel"
      full-width
      full-height
    >
      <q-carousel
        transition-prev="fade"
        transition-next="fade"
        swipeable
        animated
        v-model="slide"
        control-color="primary"
        navigation-icon="radio_button_unchecked"
        navigation
        padding
        class="bg-white shadow-1 rounded-borders "
      >
        <q-carousel-slide
          v-for="(img, index) in images"
          :key="index"
          :name="img"
          class="column no-wrap flex-center "
        >
          <q-img
              :src="require(`assets/menu/pagesMenuDuble/menuDoblle${img}.jpg`)"
              style="max-width: 1100px; height: auto;"
              class="shadow-15"
            />
        </q-carousel-slide>
      <!--
        <q-carousel-slide :name="2" class="column no-wrap flex-center">
        </q-carousel-slide>
        <q-carousel-slide :name="3" class="column no-wrap flex-center">
          <q-icon name="layers" color="primary" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="4" class="column no-wrap flex-center">
          <q-icon name="terrain" color="primary" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
      -->
      </q-carousel>
    </q-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      carousel: false,
      images: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],

      slide: 1,
      lorem: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, ratione eum minus fuga, quasi dicta facilis corporis magnam, suscipit at quo nostrum!'
    }
  }
}
</script>

<!--

 <q-img v-for="n in contentSize"
              :key="n"
              :src="require(`assets/menu/pagesMenuDuble/menuDoblle${n}.jpg`)"
              style="width: 100%;"
            />
-->
