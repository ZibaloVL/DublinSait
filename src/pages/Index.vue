<template>
<!--
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-full.svg"
    >
-->
<div>
  <loade-page 
    v-if="show"
    @click="loadPageShow" ></loade-page>
  <main-carusel
    v-else
  >
  </main-carusel>
  <dialog-menu></dialog-menu>
  <dialog-map></dialog-map>
</div>
</template>

<script>
import MainCarusel from '../components/mainCarusel'
import DialogMenu from '../components/dialogMenu'
import DialogMap from '../components/dialogMap'
import loadePage from '../components/loadePage'
export default {
  name: 'PageIndex',
  components: {
    MainCarusel,
    DialogMenu,
    DialogMap,
    loadePage
  },
  data () {
    return {
      show: true
    }
  },
  methods:{
    loadPageShow() {
      this.show=!this.show
    }
  }
}
</script>
<style>
  .bg_tran-enter {
    opacity: 0;
  }
  .bg_tran-enter-active {
    transition: opacity 4s;
  }
  .bg_tran-enter-to {
  }
  .bg_tran-leave {
    opacity: 1;
  }
  .bg_tran-leave-active {
    transition: opacity 4s;
    opacity: 0;
  }
  .bg_tran-leave-to {
  }
/*--------------------------*/
  .logo_tran-enter {
    opacity: 0;
  }
  .logo_tran-enter-active {
    transition: opacity 4s;
  }
  .logo_tran-enter-to {
  }
  .logo_tran-leave {
    opacity: 1;
  }
  .logo_tran-leave-active {
    transition: opacity 4s;
    opacity: 0;
  }
  .logo_tran-leave-to {
  }
</style>

