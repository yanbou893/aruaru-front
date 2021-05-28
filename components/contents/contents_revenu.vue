<template>
  <div class="small">
    
        <input type="date" v-model="date" class="titlearea">
        <input type="number" v-model="money" class="titlearea">
      <div @click="savemon">save</div>
  </div>
</template>
<script>
import axios from "@/plugins/axios"
  
export default {
    props:{
        content:Object,
        user:Object,
        datalength:Object
    },
    components: {
      
    },
    data(){
    return {
      monetize:"",
      date:"",
      money:"",
    }
  },
  methods:{
      	savemon:function(){
            axios.post('v1/monetizes',{
                user_id:this.$store.state.user.id,
      	        app_id:this.content.id,
      	        date:this.date,
      	        money:this.money})
      	}
  },
    
}
</script>
<style>
  div{
    color:black;
  }
</style>