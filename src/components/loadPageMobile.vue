<template>
  <div class="backgroundMobile">
    <q-layout>
      <div
        class="row justify-center align-end wrap"
        style="height: 100vh;"
      >
        <div
          class="col-12"
          style="text-align: center"
        >
          <q-img
            src="~assets/logo/LogoDublin800.png"
            style="width: 80%; margin: 100px 0 30px 0;"
          />
        </div>
        <div class="col-10">
          <div class="buttomDivMobile">
            <q-btn class="glossy btnMenuMobile" rounded  :label="$t('menuFood')" />
          </div>
          <div class="buttomDivMobile">
            <q-btn class="glossy btnMenuMobile" rounded  :label="$t('location')" />
          </div>
          <div class="buttomDivMobile">
            <q-btn class="glossy btnMenuMobile" rounded  :label="$t('photoTur')" />
          </div>
          <div class="buttomDivMobile">
            <q-btn class="glossy btnMenuMobile" rounded  :label="$t('contact')" />
          </div>
        </div>
      </div>
    </q-layout>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
  .backgroundMobile {
    background: url('../assets/img/mobile/background/IMG_2592.jpg')
  };
  .buttomDivMobile {
    color: #ffffff;
    text-align: center;
    margin-top: 20px;
  }
  .btnMenuMobile {
    background: rgba(42,123,107, 0.9);
    width: 70%;
  }
</style>
