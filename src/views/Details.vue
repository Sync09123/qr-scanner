<template>
  <div >
    {{documents}}
  </div>
</template>

<script>

import {  useRoute } from 'vue-router'
import documents from '@/data/data.json'
export default {

    setup(){

        const route = useRoute()

        console.log(route.params.id)


        return{
            documents
        }
    }

}
</script>

<style>

</style>