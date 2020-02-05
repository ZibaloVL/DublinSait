<template>
<!--
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-full.svg"
    >
-->
<div>
  <main-carusel></main-carusel>
  <dialog-menu></dialog-menu>
  <dialog-map></dialog-map>
</div>
</template>

<script>
import MainCarusel from '../components/mainCarusel'
import DialogMenu from '../components/dialogMenu'
import DialogMap from '../components/dialogMap'
export default {
  name: 'PageIndex',
  components: {
    MainCarusel,
    DialogMenu,
    DialogMap
  }
}
</script>
