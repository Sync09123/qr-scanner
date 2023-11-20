<template>
  <div class="stream">
    <qr-stream @decode="onDecode" class="mb">
      <div style="color: red" class="frame"></div>
    </qr-stream>
  </div>
  <div class="result">Result: {{ qr }}</div>
</template>

<script>
import { ref } from "vue";
import { QrStream, QrCapture, QrDropzone } from "vue3-qr-reader";

export default {
  components: {
    QrStream,
    QrCapture,
    QrDropzone,
  },
  setup() {
    const qr = ref(null);
    const onDecode = (data) => {
      qr.data = data;
    };
    return {
      qr,
      onDecode,
    };
  },
};
</script>

<style>
</style>