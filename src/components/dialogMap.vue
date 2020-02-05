<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn label="Card" color="primary" @click="card = true" />
    <q-dialog v-model="card">
      <q-card class="my-card">
        <q-card-section>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5440.696013410322!2d28.844146528558337!3d47.01377364022865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa288dde7720fd594!2sDublin%20Pub!5e0!3m2!1sru!2s!4v1580889167340!5m2!1sru!2s" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      card: false,
      slide: 1,
      lorem: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, ratione eum minus fuga, quasi dicta facilis corporis magnam, suscipit at quo nostrum!',

      stars: 3,

      slideVol: 39,
      slideAlarm: 56,
      slideVibration: 63
    }
  }
}
</script>
