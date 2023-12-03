<template>
  <div class="title">Verify Document here</div>
  <div style="padding-block:20px">
    <router-link to="/stream" style="padding: 10px; font-weight: bold"
      ><button class="btn green"> Scan QR </button>
    </router-link>

 
  </div>
  <router-view />
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
};
</script>

<style scoped>
.btn{
  padding: 10px;
  color: white;
  
}

.green{
  background-color: rgb(48, 197, 48);
}
.title{
  font-size: 2em;
  padding-block: 10px;
  font-weight: bold;
}
</style>