<template>
  <qr-stream @decode="onDecode" class="mb">
    <div style="color: red;" class="frame"></div>
  </qr-stream>
<div class="result">
  Result: {{data}}
</div>
</template>
    
    <script>
import { reactive, toRefs } from 'vue';

// @ is an alias to /src
import { QrStream } from 'vue3-qr-reader';

export default {
  name: "HomeView",
  components:{QrStream},
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
};
</script>
    