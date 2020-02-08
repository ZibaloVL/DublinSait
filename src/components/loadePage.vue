<template>
  <div>
    <q-avatar
      square
      size="800px"
      class="absolute-center z-max"
      @click="closeName()"
    >
<!--      <transition
          appear
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
      > -->
      <transition name="logo_tran" appear>
        <q-img
          v-show="close"
          src='~assets/background/LogoDublin.png'
        />
      </transition>
    </q-avatar>
    <transition name="bg_tran">
      <q-img  v-show="close"
        class="absolute-top z-top"
        height="100vh"
        src='~assets/background/Background.png'
      />
    </transition>
  </div>
</template>
<script>
// add animation style
export default {
  data () {
    return {
      close: true
    }
  },
  methods: {
    closeName () {
      console.log('close')
      this.close = !this.close
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
