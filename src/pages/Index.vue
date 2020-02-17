<template>
  <div>
    <transition name="bg_tran">
      <loade-page
        v-if="show"
        @clickShow="loadPageShow()"
      />
      <main-carusel v-else />
    </transition>
    <dialog-menu />
    <dialog-map />
    <dialog-tour />
    <dialog-contact />
  </div>
</template>

<script>
import loadePage from '../components/loadePage'
import MainCarusel from '../components/mainCarusel'
import DialogMenu from '../components/dialogMenu'
import DialogMap from '../components/dialogMap'
import DialogTour from '../components/dialogTour'
import DialogContact from '../components/dialogContact'

export default {
  name: 'PageIndex',
  components: {
    MainCarusel,
    DialogMenu,
    DialogMap,
    DialogTour,
    DialogContact,
    loadePage
  },
  data () {
    return {
      show: true
    }
  },
  methods: {
    loadPageShow () {
      console.log('loadPageShow')
      this.show = !this.show
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
</style>
