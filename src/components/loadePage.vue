<template>
  <q-layout
    class="absolute-center z-max backgroundPage"
  >
    <q-img
      class="absolute-center"
      src="~assets/background/LogoDublin.png"
      style="max-width: 70%"
      @click="$emit('clickShow')"
    />
  </q-layout>
</template>
<script>
// add animation style
export default {
  data () {
    return {
      an: true
    }
  },
  methods: {
  }
}
</script>
