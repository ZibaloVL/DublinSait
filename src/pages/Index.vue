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
</div>
</template>

<script>
import MainCarusel from '../components/mainCarusel'
import DialogMenu from '../components/dialogMenu'
export default {
  name: 'PageIndex',
  components: {
    MainCarusel,
    DialogMenu
  }
}
</script>
