// import Vue from 'vue'
// import firebase from 'firebase'
// import Vue from 'vue'

export default {
  state: {
    menuOnOff: false
  },
  getters: {
    get_menuOnOff: (state) => state.menuOnOff
  },
  mutations: {
    set_menuOnOff (state) {
      state.menuOnOff = !state.menuOnOff
    }
  },
  actions: {
    // maybe get and set menuPages
  }
}
