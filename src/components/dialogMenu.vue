<template>
  <div>
    <q-dialog
      v-model="icon"
      maximized
    >
      <!--start dialog desktop-->
      <q-carousel
        v-model="slide"
        transition-prev="fade"
        transition-next="fade"
        infinite
        arrows
        swipeable
        animated
        control-color="green-9"
        navigation-icon="radio_button_unchecked"
        padding
        class="bg-white shadow-1 rounded-borders desktop-only"
      >
        <q-carousel-slide
          v-for="(img, index) in images"
          :key="index"
          :name="img"
          class="flex-center column no-wrap backgroundMenu"
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
        </q-carousel-slide>
      </q-carousel>
      <!--start menu mobile-->
      <div
        class="row mobile-only q-gutter-sm"
      >
        <q-header
        class="row justify-end"
        style="background:rgba(255,255,255,0); absolute-top fixed-top"
        >
          <q-btn
            v-close-popup
            icon="close"
            flat
            round
            dense
            color="green-9"
            size="sm"
            style="background:rgba(255,255,255,0.2); margin:15px 20px;"
          />
        </q-header>
        <div
          v-for="(img, index) in imagesMobile"
          :key="index"
          :name="img"
          class="col-12"
        >
          <q-img
            :src="require(`assets/menu/pagesMenuMobile/menuMobile${img}.jpg`)"
            class="shadow-15"
          />
        </div>
      </div>
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
