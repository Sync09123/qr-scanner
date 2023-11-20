<template>
 <div class="stream">
  <qr-stream @decode="onDecode" class="mb">
    <div style="color: red;" class="frame"></div>
  </qr-stream>
</div>
<div class="result">
  Result: {{data}}
</div>
</template>

<script>
import { reactive } from 'vue';
import { QrStream, QrCapture, QrDropzone } from 'vue3-qr-reader';

export default {
    components:{
        QrStream,
    QrCapture,
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