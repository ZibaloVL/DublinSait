<template>
  <q-layout
    class="absolute-center z-max backgroundPage"
  >
    <q-avatar
      square
      size="800px"
      @click="$emit('clickShow')"
      class="absolute-center"
    >
      <q-img src='~assets/background/LogoDublin.png'/>
    </q-avatar>
      <!--
        <q-img
          class="absolute-top z-top"
          height="100vh"
          src='~assets/background/Background.png'
        />
      -->
  </q-layout>
</template>
<script>
// add animation style
export default {
  data () {
    return {}
  },
  methods: {
  }
}
</script>
