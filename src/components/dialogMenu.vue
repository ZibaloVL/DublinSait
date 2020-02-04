<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn label="Click me" color="primary" @click="layout = true" />
    <q-dialog
      v-model="layout"
     :content-style="{ color: '#ff0000' }"
    >
      <q-layout
        view="Lhh lpR fff"
        container
        class="bg-white"
      >
        <q-header class="bg-primary">
          <q-toolbar>
            <q-toolbar-title>Header</q-toolbar-title>
            <q-btn flat @click="drawerR = !drawerR" round dense icon="menu" />
            <q-btn flat v-close-popup round dense icon="close" />
          </q-toolbar>
        </q-header>
        <q-drawer side="right" bordered v-model="drawerR" :width="200" :breakpoint="300" content-class="bg-grey-3 q-pa-sm">
          <div v-for="n in 12" :key="n">Drawer {{ n }} / 12</div>
        </q-drawer>
        <q-page-container
          style="height: 100vh"
        >
            <q-img v-for="n in contentSize"
              :key="n"
              :src="require(`assets/menu/pagesMenuDuble/menuDoblle${n}.jpg`)"
              style="width: 100%;"
            />
        </q-page-container>
      </q-layout>
    </q-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      layout: false,
      moreContent: true,
      drawer: false,
      drawerR: false
    }
  },

  computed: {
    contentSize () {
      return this.moreContent ? 12 : 1
    }
  }
}
</script>
