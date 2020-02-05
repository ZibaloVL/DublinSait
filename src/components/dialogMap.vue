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
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5440.696013410322!2d28.844146528558337!3d47.01377364022865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa288dde7720fd594!2sDublin%20Pub!5e0!3m2!1sru!2s!4v1580889167340!5m2!1sru!2s" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
          <q-btn class="fixed-top-right, absolute-top-right" icon="close" flat round dense v-close-popup />
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
      mapsOnOff: 'get_mapsOnOff'
    })
  },
  watch: {
    mapsOnOff: function (val, oldVal) {
      if (val) {
        this.icon = true
        this.set_mapsOnOff()
      }
    }
  },
  methods: {
    ...mapMutations({
      set_mapsOnOff: 'set_mapsOnOff'
    })
  }
}
</script>
