<template>
  <q-layout
    view="lHh Lpr lFf"
  >
    <q-img height="100vh" class="absolute-top" src='~assets/background/Background.png'/>
    <q-header
      class="transparent"
    >
      <q-toolbar
        style="padding: 10px;"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />
        <span>
          <q-img style="width:128px; height:50px;" src='~assets/logo/LogoDublin128.png'/>
        </span>
        <q-toolbar-title>
        </q-toolbar-title>
        <q-btn
          :label="$t('menuFood')"
          flat
          @click="menuFoodOnOff()" />
        <q-btn :label="$t('location')" flat @click="set_mapsOnOff()" />
        <q-separator v-show="showEn" dark vertical />
        <q-btn v-show="showEn" @click="changeLang('en-us')" stretch flat label="EN"/>
        <q-separator v-show="showRo" dark vertical />
        <q-btn v-show="showRo" @click="changeLang('ro')" stretch flat label="RO"/>
        <q-separator v-show="showRu" dark vertical />
        <q-btn v-show="showRu" @click="changeLang('ru')" stretch flat label="RU"/>
        <q-separator dark vertical />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item clickable tag="a"  to="/registration">
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{$t('registration')}}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a"  to="/sign">
          <q-item-section avatar>
            <q-icon name="code" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{$t('sigIn')}}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" to="/signout">
          <q-item-section avatar>
            <q-icon name="chat" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{$t('signOut')}}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://forum.quasar.dev">
          <q-item-section avatar>
            <q-icon name="record_voice_over" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Forum</q-item-label>
            <q-item-label caption>forum.quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://twitter.quasar.dev">
          <q-item-section avatar>
            <q-icon name="rss_feed" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Twitter</q-item-label>
            <q-item-label caption>@quasarframework</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://facebook.quasar.dev">
          <q-item-section avatar>
            <q-icon name="public" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Facebook</q-item-label>
            <q-item-label caption>@QuasarFramework</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false,
      showRo: true,
      showEn: false,
      showRu: true
    }
  },
  computed: {
    ...mapGetters({
      menuFoodOnOf: 'get_menuOnOff', // from module "foodMenu"
      mapsOnOff: 'get_mapsOnOff'// from mapsDialog
    })
  },
  methods: {
    ...mapMutations({
      menuFoodOnOff: 'set_menuOnOff',
      set_mapsOnOff: 'set_mapsOnOff'

    }),
    changeLang (locale) {
      this.$i18n.locale = locale
      switch (locale) {
        case 'ro':
          this.showRo = false
          this.showEn = true
          this.showRu = true
          break
        case 'en-us':
          this.showEn = false
          this.showRo = true
          this.showRu = true
          break
        case 'ru':
          this.showRu = false
          this.showEn = true
          this.showRo = true
          break
      }
    }
  }
}
</script>
