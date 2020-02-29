<template>
  <div>
    <!--start dialog desktop-->
    <q-dialog
      v-model="icon"
      full-width
      full-height
      class="desktop-only"
    >
      <q-carousel
        v-model="slide"
        transition-prev="fade"
        transition-next="fade"
        arrows
        swipeable
        animated
        control-color="green-9"
        navigation-icon="radio_button_unchecked"
        padding
        class="bg-white shadow-1 rounded-borders "
      >
        <q-carousel-slide
          v-for="(img, index) in images"
          :key="index"
          :name="img"
          class="flex-center column no-wrap"
        >
          <q-btn
            v-close-popup
            class="fixed-top-right, absolute-top-right"
            icon="close"
            flat
            round
            dense
            color="green-9"
          />
          <div class="row fit justify-center items-center q-gutter-xs q-col-gutter no-wrap">
            <q-img
              :src="require(`assets/menu/pagesMenuDuble/menuDoblle${img}.jpg`)"
              class="shadow-15"
              style="height: auto; max-width: 1000px; overflow: hidden;"
            />
          </div>
          <!--style="max-width: 1100px; height: auto;"-->
        </q-carousel-slide>
      </q-carousel>
    </q-dialog>
    <!--end dialog desktop-->
    <!--start dialog mobile-->
    <q-dialog
      v-model="icon"
      full-width
      full-height
      class="mobile-only"
    >
      <q-carousel
        v-model="slide"
        transition-prev="fade"
        transition-next="fade"
        arrows
        swipeable
        animated
        control-color="green-9"
        navigation-icon="radio_button_unchecked"
        padding
        class="bg-white shadow-1 rounded-borders "
      >
        <q-carousel-slide
          v-for="(img, index) in imagesMobile"
          :key="index"
          :name="img"
          class="flex-center column no-wrap"
        >
          <q-btn
            v-close-popup
            class="fixed-top-right, absolute-top-right"
            icon="close"
            flat
            round
            dense
            color="green-9"
          />
          <div class="row fit justify-center items-center q-gutter-xs q-col-gutter no-wrap">
            <q-img
              :src="require(`assets/menu/pagesMenuMobile/menuMobile${img}.jpg`)"
              class="shadow-15"
              style="height: auto; max-width: 1000px; overflow: hidden;"
            />
          </div>
        </q-carousel-slide>
      </q-carousel>
    </q-dialog>
    <!--end dialog mobile-->
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data () {
    return {
      icon: false,
      images: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
      imagesMobile: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24 ],
      slide: 1
    }
  },
  computed: {
    ...mapGetters({
      menuOnOff: 'get_menuOnOff'
    })
  },
  watch: {
    menuOnOff: function (val, oldVal) {
      if (val) {
        this.icon = true
        this.set_menuOnOff()
      }
    }
  },
  methods: {
    ...mapMutations({
      set_menuOnOff: 'set_menuOnOff'
    })
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
