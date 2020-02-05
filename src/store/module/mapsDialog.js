// import Vue from 'vue'
// import firebase from 'firebase'
// import Vue from 'vue'

export default {
  state: {
    mapsOnOff: false
  },
  getters: {
    get_mapsOnOff: (state) => state.mapsOnOff
  },
  mutations: {
    set_mapsOnOff (state) {
      state.mapsOnOff = !state.mapsOnOff
    }
  }
}
