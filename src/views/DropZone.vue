<template>
    drop
  <qr-dropzone class="dropzone mb" @decode="onDecode">
  Drop image here.
</qr-dropzone>
<div class="result">
  Result: {{data}}
</div>
</template>

<script>
import { reactive, toRefs } from 'vue';
import {   QrDropzone } from 'vue3-qr-reader';
export default {
    components: {
    QrDropzone
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