<template>
  <div
    id="sign"
    class="q-pa-md row justify-center align-center"
  >
    <q-card
      class="my-card text-black  col-12 col-sm-6 fixed-center"
    >
      <q-card-section>
        <div class="text-h6">
          Sign in
        </div>
        <div class="text-subtitle2">
          by Admin
        </div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-form
          ref="registrationForm"
          class="q-gutter-md"
          @submit="onSubmit"
          @reset="onReset"
        >
          <q-input
            v-model="email"
            filled
            type="email"
            label="Your email"
            :rules="[
              val => val !== null && val !== '' || 'Please type your email',
              val => val.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i) || 'Please type a real email'
            ]"
          />
          <q-input
            v-model="password"
            filled
            label="You password"
            lazy-rules
            :rules="[
              val => val !== null && val !== '' || 'Please type your age',
            ]"
          />
          <div>
            <q-btn
              label="Sign"
              type="submit"
              color="primary"
              :disable="blockSubmit"
            />
            <q-btn
              label="Cansel"
              type="reset"
              color="primary"
              flat
              class="q-ml-sm"
            />
          </div>
        </q-form>
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
      if (newval) {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'account_box',
          message: 'You logged in'
        })
        this.onReset()
        this.$router.push({ path: '/' })
      }
    }
  },
  methods: {
    ...mapActions({
      signUser: 'signUser'
    }),
    onSubmit () {
      this.blockSubmit = true
      this.signUser({
        email: this.email,
        password: this.password
      })
    },

    onReset () {
      this.name = null
      this.password = null
      this.email = null
    }
  }
}
</script>
