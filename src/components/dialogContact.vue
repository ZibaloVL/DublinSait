<template>
  <q-dialog
    v-model="icon"
    full-width
  >
    <div
      class="row content-center justify-center"
      style="box-shadow: none;"
    >
      <q-card class="my-card"
        flat
        bordered
      >
        <q-img
          src="~assets/img/titul/IMG_2560.jpg"
          style="width: 100%;"
        />
        <q-card-section>
          <q-tab-panels v-model="tab" animated>
            <q-tab-panel
              name="address"
            >
              <div :class="tabPanelClass">
                <q-icon name="location_on"/>
              </div>
              <div :class="tabPanelClass">
                {{ $t('address') }}
              </div>
              <div :class="tabPanelClass">
                <q-icon name="phone" />
                +373 671 27 674
              </div>
            </q-tab-panel>
            <q-tab-panel name="mails">
              <div :class="tabPanelClass">
                <q-icon name="mail" />
              </div>
              <div :class="tabPanelClass">
                dublin_md@mail.ru
              </div>
            </q-tab-panel>
            <q-tab-panel name="alarm">
              <div :class="tabPanelClass">
                <q-icon name="alarm" />
              </div>
              <div :class="tabPanelClass">
                {{ $t('alarm.Sanday')}}
              </div>
              <div :class="tabPanelClass">
                {{ $t('alarm.MondaySartuday')}}
              </div>
            </q-tab-panel>
          </q-tab-panels>
          <q-separator />
          <q-tabs
            v-model="tab"
            dense
            class="bg-grey-3"
            align="justify"
            narrow-indicator
          >
            <q-tab name="address" icon="location_on" />
            <q-tab name="mails" icon="mail" />
            <q-tab name="alarm" icon="alarm" />
          </q-tabs>
        </q-card-section>
        <!--
        <q-card-section>
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
        -->
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
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      tab: 'mails',
      tabPanelClass: 'text-h5 text-center'
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
  width: 100%;
  max-width: 1000px;
</style>
