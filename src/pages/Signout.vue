<template>
  <div
    class="q-pa-md row justify-center align-center"
  >
    <q-card
      class="my-card text-black  col-12 col-sm-6 fixed-center"
    >
      <q-card-section>
        <div class="text-h6">Leave the site?</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
            <q-btn
              label="Sign out"
              color="primary"
              :disable="blockSubmit"
              @click="click_SignOut"
            />
            <q-btn
              label="Cansel"
              type="reset"
              color="primary"
              flat
              class="q-ml-sm"
            />
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      password: null,
      email: null,
      blockSubmit: false
    }
  },
  computed: {
    ...mapGetters({
      get_errorRegistration: 'get_errorRegistration',
      get_isAutorizate: 'get_isAutorizate'
    })
  },
  watch: {
    get_isAutorizate: function (newval, oldval) {
      if (!newval) {
        this.blockSubmit = true
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'error_outline',
          message: 'You sign out'
        })
        this.$router.push({ path: '/' })
      }
    }
  },
  methods: {
    ...mapActions({
      signOutUser: 'signOutUser'
    }),
    click_SignOut () {
      console.log('click_SignOut in front')
      this.blockSubmit = true
      this.signOutUser()
    }
  }
}
</script>
