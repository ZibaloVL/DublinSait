// import Vue from 'vue'
// import firebase from 'firebase'
// import Vue from 'vue'

export default {
  state: {
    contactOnOff: false
  },
  getters: {
    get_contactOnOff: (state) => state.contactOnOff
  },
  mutations: {
    set_contactOnOff (state) {
      state.contactOnOff = !state.contactOnOff
      // console.log('state.contactOnOff', state.contactOnOff)
    }
  }
}
