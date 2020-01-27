<template>
  <div
    class="q-pa-md row justify-center align-center"
  >
    <q-card
      class="my-card text-black  col-12 col-sm-6 fixed-center"
    >
      <q-card-section>
        <div class="text-h6">
          Registration for Admin
        </div>
        <div class="text-subtitle2">
          by John Doe
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
            v-model="name"
            filled
            label="Имя"
            hint="Name and surname"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type something']"
          />
          <q-input
            v-model="age"
            filled
            type="number"
            label="Your age *"
            lazy-rules
            :rules="[
              val => val !== null && val !== '' || 'Please type your age',
              val => val > 0 && val < 100 || 'Please type a real age'
            ]"
          />
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
          <div>
            <q-btn
              label="Submit"
              type="submit"
              color="primary"
              :disable="blockSubmit"
            />
            <q-btn
              label="Reset"
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
export default {
  data () {
    return {
      name: null,
      age: null,
      email: null,
      accept: false,
      blockSubmit: false
    }
  },
  computed: {
  },
  methods: {
    onSubmit () {
      this.blockSubmit = true
      this.$q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done',
        message: 'Submitted'
      })
    },

    onReset () {
      this.name = null
      this.age = null
      this.accept = false
      this.email = null
    }
  }
}
</script>
