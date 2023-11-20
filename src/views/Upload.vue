<template>
  <qr-capture @decode="onDecode" class="mb"></qr-capture>
<div class="result">
  Result: {{data}}
</div>
</template>

<script>
import { reactive, toRefs } from 'vue';
import {  QrCapture } from 'vue3-qr-reader';
export default {
    components: {
    QrCapture
  },
    setup() {
    const state = reactive({
      data: null
    })
    function onDecode(data) {
      state.data = data
    }
    return {
      ...toRefs(state),
      onDecode
    }
  }
}
</script>

<style>

</style>