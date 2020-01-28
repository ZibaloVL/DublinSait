// import Vue from 'vue'
import firebase from 'firebase'
import Vue from 'vue'

export default {
  state: {

    user: {
      // central object user
      name: null,
      email: null,
      uid: null
      // status: null may bi in element
    },
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
    get_isAutorizate: (state) => state.isAutorizate,
    get_User: (state) => state.user
  },
  mutations: {
    set_User (state, payload) {
      for (let key in payload) {
        Vue.set(state.user, key, payload[key])
      }
    },
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

    // registration user in sait---------------------------------------------------------------
    regUser ({ commit }, payload) {
      commit('set_dataUserRegistration', payload)
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then((data) => {
          console.log('data.user.uid', data.user.uid)
          var user = firebase.auth().currentUser
          user.updateProfile({
            displayName: payload.name
          }).then
          return user
        })
        .then((data) => {
          console.log('data', data)
          commit('set_isAutorizate', true)
          commit('set_errorRegistration', { code: null, message: null })
          commit('set_dataUserRegistration', {
            name: null,
            email: null,
            password: null
          })
          commit('set_User', {
            name: data.displayName,
            email: data.email,
            uid: data.uid
          })
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
    },
    // sign in user in sait--------------------------------------------------------------------
    signUser ({ commit }, payload) {
      commit('set_dataUserRegistration', payload)
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then((data) => {
          if (data.user.uid) {
            commit('set_isAutorizate', true)
            commit('set_errorRegistration', { code: null, message: null })
            // else add element in User require in this commit
            commit('set_User', {
              name: data.user.displayName,
              email: data.user.email,
              uid: data.user.uid
            })
            commit('set_dataUserRegistration', {
              name: null,
              email: null,
              password: null
            })
          }
        })
        .catch(
          function (error) {
          // Handle Errors here.
          // console.log(error.code)
          // console.log(error.message)
            console.log('ERRROO')
            commit('set_errorSignIn', error)
          // ...
          }
        )
    },
    // sign out user --------------------------------------------------------------------
    signOutUser ({ commit }) {
      let payload = {
        name: null,
        email: null,
        password: null
      }
      commit('set_dataUserRegistration', payload)
      firebase.auth().signOut()
        .then(() => {
          console.log('SIGN OUT!!!')
          commit('set_dataUserRegistration', {
            name: null,
            email: null,
            password: null
          })
          commit('set_isAutorizate', false)
          commit('set_errorRegistration', {
            code: null,
            message: null
          })
        })
        .catch(
          function (error) {
          // Handle Errors here.
          // console.log(error.code)
          // console.log(error.message)
            console.log('ERRROO')
            commit('set_errorSignOut', error)
          // ...
          }
        )
    }

  }
}
