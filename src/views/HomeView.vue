<template>
    <div>

<router-link to="/stream" style="padding: 10px; font-weight:bold">Stream </router-link>

<router-link to="/drop" style="padding: 10px; font-weight:bold"> Drop Zone</router-link>
</div>
<router-view/>

</template>

<script>

// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
    
  }
}
</script>
