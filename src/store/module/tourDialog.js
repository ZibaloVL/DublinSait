// import Vue from 'vue'
// import firebase from 'firebase'
// import Vue from 'vue'

export default {
  state: {
    tourOnOff: false
  },
  getters: {
    get_tourOnOff: (state) => state.tourOnOff
  },
  mutations: {
    set_tourOnOff (state) {
      state.mapsOnOff = !state.tourOnOff
    }
  }
}
