<template>
  <div class="backgroundMobile">
    <q-layout>
      <div
        class="row justify-center align-end wrap"
        style="height: 100vh;"
      >
        <div
          class="col-12"
          style="text-align: center"
        >
          <q-img
            src="~assets/logo/LogoDublin800.png"
            style="width: 80%; margin: 70px 0 30px 0;"
          />
        </div>
        <div class="col-10">
          <div class="buttomDivMobile">
            <q-btn
              class="glossy btnMenuMobile"
              rounded
              :label="$t('menuFood')"
              @click="menuFoodOnOff()"
            />
          </div>
          <div class="buttomDivMobile">
            <q-btn
              class="glossy btnMenuMobile"
              rounded
              :label="$t('location')"
              @click="set_mapsOnOff()"
            />
          </div>
          <div class="buttomDivMobile">
            <q-btn
              class="glossy btnMenuMobile"
              rounded
              :label="$t('photoTur')"
               @click="set_tourOnOff()"
            />
          </div>
          <div class="buttomDivMobile">
            <q-btn
              class="glossy btnMenuMobile"
              rounded
              :label="$t('contact')"
              @click="set_contactOnOff()"
            />
          </div>
        </div>
      </div>
    </q-layout>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data () {
    return {
      leftDrawerOpen: false,
      showRo: true,
      showEn: false,
      showRu: true
    }
  },
  computed: {
    ...mapGetters({
      menuFoodOnOf: 'get_menuOnOff', // from module "foodMenu"
      mapsOnOff: 'get_mapsOnOff', // from mapsDialog
      tourOnOff: 'get_tourOnOff', // from tourDialog
      contactOnOff: 'get_contactOnOff' // from contactDialog
    })
  },
  methods: {
    ...mapMutations({
      menuFoodOnOff: 'set_menuOnOff',
      set_mapsOnOff: 'set_mapsOnOff',
      set_tourOnOff: 'set_tourOnOff',
      set_contactOnOff: 'set_contactOnOff'
    }),
    changeLang (locale) {
      this.$i18n.locale = locale
      switch (locale) {
        case 'ro':
          this.showRo = false
          this.showEn = true
          this.showRu = true
          break
        case 'en-us':
          this.showEn = false
          this.showRo = true
          this.showRu = true
          break
        case 'ru':
          this.showRu = false
          this.showEn = true
          this.showRo = true
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .backgroundMobile {
    background: url('../assets/img/mobile/background/IMG_2592.jpg');
    margin-bottom: -50px;
  };
  .buttomDivMobile {
    color: #ffffff;
    text-align: center;
    margin-top: 20px;
  }
  .btnMenuMobile {
    background: rgba(42,123,107, 0.9);
    width: 70%;
  }
</style>
