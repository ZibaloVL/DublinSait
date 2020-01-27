// import Vue from 'vue'
import firebase from 'firebase'

export default {
  state: {
    dataUserRegistration: {
      name: null,
      email: null,
      password: null
    },
    errorRegistration: {
      code: null,
      message: null
    },
    isAutorizate: false
  },
  getters: {
    get_errorRegistration: (state) => state.errorRegistration,
    get_isAutorizate: (state) => state.isAutorizate
  },
  mutations: {
    set_dataUserRegistration (state, payload) {
      state.dataUserRegistration.name = payload.name
      state.dataUserRegistration.email = payload.email
      state.dataUserRegistration.password = payload.password
    },
    set_errorRegistration (state, payload) {
      state.errorRegistration.code = payload.code
      state.errorRegistration.message = payload.message
    },
    set_isAutorizate (state, payload) { state.isAutorizate = payload }
  },
  actions: {
    regUser ({ commit }, payload) {
      // console.log(payload)
      commit('set_dataUserRegistration', payload)
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then((data) => {
          console.log(data.user.uid)
          if (data.user.uid) {
            commit('set_isAutorizate', true)
            commit('set_errorRegistration', { code: null, message: null })
          }
        })
        .catch(
          function (error) {
          // Handle Errors here.
          // console.log(error.code)
          // console.log(error.message)
            console.log('ERRROO')
            commit('set_errorRegistration', error)
          // ...
          }
        )
    }
  }
}
