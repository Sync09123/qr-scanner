<template>
  <div  style="padding: 15px;">
    <div v-if="data"> 
        <div class="flex-col " >
            <div  class="item">
                <span ><strong>Date Requested :</strong> {{data[0].created_at}}</span>
               
            </div>
            <div  class="item">
                <span ><strong>Reference Number :</strong> {{data[0].ref_id}}</span>
               
            </div>
            <div  class="item">
                <span ><strong>Requested By :</strong> {{data[0].user_info.full_name}}</span>
               
            </div>
            <div  class="item">
                <span ><strong>Document Type :</strong> {{data[0].document_type.name}}</span>
               
            </div>


        </div>

    </div>
    <div v-else>
        Document Not Found

    </div>
  </div>
</template>

<script>

import {  useRoute } from 'vue-router'
import documents from '@/data/data.json'
import { computed } from 'vue'
export default {

    setup(){

        const route = useRoute()

        console.log(route.params.id)

        const data = computed(()=>{


            return documents.filter(item=>{
                console.log(item.ref_id==route.params.id)
                return item.ref_id ==route.params.id
            })
            
        })


        return{
            documents,
            data
        }
    }

}
</script>

<style>
.item{
    padding: 5px;
}
.flex{

    display: flex;

}
.flex-col{
    display: flex;
    flex-direction: column;
}
.items-start{
    align-items: flex-start;
}
</style>