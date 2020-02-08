<template>
  <q-layout
    class="absolute-center z-max backgroundPage"
  >
    <q-img
      @click="$emit('clickShow')"
      class="absolute-center"
      src='~assets/background/LogoDublin.png'
      style="max-width: 50%"
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
