<template>
  <q-dialog
    v-model="icon"
    full-width
    :content-style="{ color: '#ffffff'}"
  >
    <div
      class="row content-center justify-center"
      style="box-shadow: none;"
    >
      <q-card
        class="my-card styleCardsContact"
        flat
        bordered
      >
        <q-img
          src="~assets/img/titul/IMG_2560.jpg"
          style="width: 100%;"
        />
        <q-card-section
          style="padding: 5px 0px 0px 0px"
        >
          <q-tab-panels
            v-model="tab"
            animated
            class="styleCardsContact"
          >
            <q-tab-panel
              name="address"
            >
              <div :class="tabPanelClass">
                <q-icon
                  name="location_on"
                  :class="tabPanelClassM"
                />
              </div>
              <div
                :class="tabPanelClass"
              >
                {{ $t('address') }}
              </div>
            </q-tab-panel>
            <q-tab-panel
              name="mails"
            >
              <div
                :class="tabPanelClass"
              >
                <q-icon
                  name="mail"
                  :class="tabPanelClassM"
                />
              </div>
              <div
                :class="tabPanelClass"
              >
                dublin_md@mail.ru
              </div>
            </q-tab-panel>
            <q-tab-panel
              name="alarm"
            >
              <div
                :class="tabPanelClass"
              >
                {{ $t('alarm.Sanday') }}
              </div>
              <div
                :class="tabPanelClass"
              >
                {{ $t('alarm.MondaySartuday') }}
              </div>
            </q-tab-panel>
            <q-tab-panel
              name="phone"
            >
              <div
                :class="tabPanelClass"
              >
                <q-icon
                  name="phone"
                  :class="tabPanelClassM"
                />
              </div>
              <div
                :class="tabPanelClass"
              >
                +373 691 27 674
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
            <q-tab
              name="address"
              class="styleCardsContact"
              icon="location_on"
            />
            <q-tab
              name="alarm"
              class="styleCardsContact"
              icon="alarm"
            />
            <q-tab
              name="phone"
              class="styleCardsContact"
              icon="phone"
            />
            <q-tab
              name="mails"
              class="styleCardsContact"
              icon="mail"
            />
            <!--
            <q-tab name="facebook" icon="ion-logo-facebook" />
            -->
          </q-tabs>
        </q-card-section>
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
      tab: 'address',
      tabPanelClass: 'text-h5 text-center',
      tabPanelClassM: 'text-h4 text-center'
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
<style lang="scss" scoped>
.my-card {
  width: 100%;
  max-width: 1000px;
};
.styleCardsContact {
  background-color: $green-10;
}
</style>
