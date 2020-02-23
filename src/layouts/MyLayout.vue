<template>
  <q-layout
    view="lHh lpr lFf"
  >
    <!--class="backgroundPage"-->
    <q-header
      class="transparent"
    >
      <q-toolbar
        style="padding: 10px;"
      >
        <q-btn
          v-show="false"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <span>
          <q-img
            style="width:128px; height:50px;"
            src="~assets/logo/LogoDublin128.png"
          />
        </span>
        <q-toolbar-title />
        <!-- start btn navigation -->
        <q-btn
          :label="$t('menuFood')"
          flat
          @click="menuFoodOnOff()"
        />
        <q-btn
          :label="$t('location')"
          flat
          @click="set_mapsOnOff()"
        />
        <q-btn
          :label="$t('photoTur')"
          flat
          @click="set_tourOnOff()"
        />
        <q-btn
          :label="$t('contact')"
          flat
          @click="set_contactOnOff()"
        />
        <q-separator
          v-show="showEn"
          dark
          vertical
        />
        <q-btn
          v-show="showEn"
          stretch
          flat
          label="EN"
          @click="changeLang('en-us')"
        />
        <q-separator
          v-show="showRo"
          dark
          vertical
        />
        <q-btn
          v-show="showRo"
          stretch
          flat
          label="RO"
          @click="changeLang('ro')"
        />
        <q-separator
          v-show="showRu"
          dark
          vertical
        />
        <q-btn
          v-show="showRu"
          stretch
          flat
          label="RU"
          @click="changeLang('ru')"
        />
        <q-separator
          dark
          vertical
        />
        <!-- end btn navigation -->
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      behavior="mobile"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item
          clickable
          tag="a"
          to="/registration"
        >
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>
              {{ $t('registration') }}
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          tag="a"
          to="/sign"
        >
          <q-item-section avatar>
            <q-icon name="code" />
          </q-item-section>
          <q-item-section>
            <q-item-label>
              {{ $t('sigIn') }}
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          tag="a"
          to="/signout"
        >
          <q-item-section avatar>
            <q-icon name="chat" />
          </q-item-section>
          <q-item-section>
            <q-item-label>
              {{ $t('signOut') }}
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          tag="a"
          target="_blank"
          href="https://forum.quasar.dev"
        >
          <q-item-section
            avatar
          >
            <q-icon name="record_voice_over" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Forum</q-item-label>
            <q-item-label
              caption
            >
              forum.quasar.dev
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          tag="a"
          target="_blank"
          href="https://twitter.quasar.dev"
        >
          <q-item-section avatar>
            <q-icon name="rss_feed" />
          </q-item-section>
          <q-item-section>
            <q-item-label>
              Twitter
            </q-item-label>
            <q-item-label
              caption
            >
              @quasarframework
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          tag="a"
          target="_blank"
          href="https://facebook.quasar.dev"
        >
          <q-item-section
            avatar
          >
            <q-icon name="public" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Facebook</q-item-label>
            <q-item-label
              caption
            >
              @QuasarFramework
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer
      class="transparent"
    >
      <q-toolbar>
        <q-toolbar-title>
          <q-btn
            type="a"
            href="https://www.facebook.com/RestaurantDublin/"
            target="_blank"
            icon="fab fa-facebook-square"
          />
          <q-btn
            type="a"
            href="https://m.me/RestaurantDublin?fbclid=IwAR2sf_l8P4EVxLzHRq35qVMA_YIgeOZbGS9nBlwXtnrWcyoW272PYMYlAz4"
            target="_blank"
            icon="fab fa-facebook-messenger"
          />
          <q-btn
            type="a"
            href="https://m.me/RestaurantDublin?fbclid=IwAR2sf_l8P4EVxLzHRq35qVMA_YIgeOZbGS9nBlwXtnrWcyoW272PYMYlAz4"
            target="_blank"
            icon="fab fa-instagram"
          />
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
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
      mapsOnOff: 'get_mapsOnOff', // from mapsDialog
      tourOnOff: 'get_tourOnOff', // from tourDialog
      contactOnOff: 'get_contactOnOff' // from contactDialog
    })
  },
  methods: {
    ...mapMutations({
      menuFoodOnOff: 'set_menuOnOff',
      set_mapsOnOff: 'set_mapsOnOff',
      set_tourOnOff: 'set_tourOnOff',
      set_contactOnOff: 'set_contactOnOff'

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
