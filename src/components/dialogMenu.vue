<template>
  <div class="q-pa-md q-gutter-sm">
    <!-- <q-btn label="Carousel" color="primary" @click="carousel = true" /> -->
    <q-dialog
      v-model="icon"
      full-width
      full-height
    >
      <q-carousel
        v-model="slide"
        transition-prev="fade"
        transition-next="fade"
        swipeable
        animated
        control-color="green-9"
        navigation-icon="radio_button_unchecked"
        navigation
        padding
        class="bg-white shadow-1 rounded-borders "
      >
        <q-carousel-slide
          v-for="(img, index) in images"
          :key="index"
          :name="img"
          class="column no-wrap flex-center backgroundPage "
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
          <q-img
            :src="require(`assets/menu/pagesMenuDuble/menuDoblle${img}.jpg`)"
            style="max-width: 1100px; height: auto;"
            class="shadow-15"
          />
        </q-carousel-slide>
      </q-carousel>
    </q-dialog>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data () {
    return {
      icon: false,
      images: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
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
