<template>
  <div class="q-pa-md q-gutter-sm">
    <q-dialog
      v-model="icon"
      full-width
      full-height
    >
      <q-card>
        <q-card-section
          style="height: 100%"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!4v1581923663655!6m8!1m7!1sCAoSK0FGMVFpcE9RZ1FFUkh4UGlmM0E0YWV5RElsdmh1Q1JHZXljYnVjX09nX0U.!2m2!1d47.0150541!2d28.8362359!3f181.06638378289003!4f0!5f0.7820865974627469"
            width="100%"
            height="100%"
            frameborder="0"
            style="border:0;"
            allowfullscreen=""
          />
          <q-btn
            v-close-popup
            class="fixed-top-right, absolute-top-right"
            icon="close"
            flat
            round
            dense
          />
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data () {
    return {
      icon: false
    }
  },
  computed: {
    ...mapGetters({
      tourOnOff: 'get_tourOnOff'
    })
  },
  watch: {
    tourOnOff: function (val, oldVal) {
      if (val) {
        this.icon = true
        this.set_tourOnOff()
      }
    }
  },
  methods: {
    ...mapMutations({
      set_tourOnOff: 'set_tourOnOff'
    })
  }
}
</script>
