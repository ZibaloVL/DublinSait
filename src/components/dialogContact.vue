<template>
  <div class="q-pa-md q-gutter-sm">
    <q-dialog
      v-model="icon"
    >
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab
            name="mails"
            label="Mails"
          />
          <q-tab
            name="alarms"
            label="Alarms"
          />
          <q-tab
            name="movies"
            label="Movies"
          />
        </q-tabs>
        <q-separator />
        <q-tab-panels
          v-model="tab"
          animated
        >
          <q-tab-panel name="mails">
            <div class="text-h6">
              Mails
            </div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
          <q-tab-panel name="alarms">
            <div class="text-h6">
              Alarms
            </div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
          <q-tab-panel name="movies">
            <div class="text-h6">
              Movies
            </div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data () {
    return {
      icon: false,
      tab: 'mails'
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
