<template>
  <div>
    <QrReaderVue />
  </div>
</template>
    
    <script>
import QrReaderVue from '@/components/QrReader.vue';
// @ is an alias to /src


export default {
  name: "HomeView",
  components:{QrReaderVue}
};
</script>
    