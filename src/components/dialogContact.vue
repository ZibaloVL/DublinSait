<template>
  <q-dialog
    v-model="icon"
  >
    <div class="row item-center">
      <q-card class="my-card"
        flat
        bordered
      >
        <q-img
          src="~assets/img/titul/IMG_2560.jpg"
          style="width: 100%;"
        />
        <q-card-section>
          <div class="text-h5 q-mt-sm q-mb-xs">
            Dublin Pub
          </div>
          <div class="text-h6 text-grey">
            <q-icon name="location_on" />
            {{ $t('adress')}}
          </div>
          <div class="text-h6 text-grey">
            <q-icon name="phone" />
            +373 671 27 674
          </div>
          <div class="text-h6 text-grey">
            <q-icon name="mail" />
            dublin_md@mail.ru
          </div>
          <div>
            <i
              class="fab fa-facebook-square"
              style="font-size: 1.5rem; color: grey;"
            ></i>
          </div>
        </q-card-section>
        <q-card-section>
        </q-card-section>
        <q-card-actions>
          <q-space />
          <q-btn
            color="grey"
            round
            flat
            dense
            :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
            @click="expanded = !expanded"
          />
        </q-card-actions>
        <q-slide-transition>
          <div v-show="expanded">
            <q-separator />
            <q-card-section class="text-subitle2">
              {{ lorem }}
            </q-card-section>
          </div>
        </q-slide-transition>
      </q-card>
    </div>
  </q-dialog>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data () {
    return {
      icon: false,
      expanded: false,
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  },
  computed: {
    ...mapGetters({
      contactOnOff: 'get_contactOnOff'
    })
  },
  watch: {
    contactOnOff: function (val, oldVal) {
      if (val) {
        this.icon = true
        this.set_contactOnOff()
      }
    }
  },
  methods: {
    ...mapMutations({
      set_contactOnOff: 'set_contactOnOff'
    })
  }
}
</script>
<style lang="sass" scoped>
.my-card
  width: auto;
  min-width: 500px;
</style>
