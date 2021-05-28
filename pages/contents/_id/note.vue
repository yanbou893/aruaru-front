<template>
    <div>
        
        <div v-if="user_id == this.$store.state.user.uid">
          <nuxt-link v-bind:to="{name:'contents-id-edit-edit_contents_note',params:{id:this.id}}" style="text-decoration: none ;color:white">
              <div class="plusbtn" style="float: right;"><i class="fas fa-plus" style="float: right;color:white"></i></div>
          </nuxt-link>
        </div>
          
              <div class="update_contents">
                <div>
                    <div v-html="$md.render(String(body))" class="outputformat"></div>
                </div>
              </div>
    </div>
</template>

<script>
import axios from "@/plugins/axios"
export default {
  data:function(){
      return{
          body: '',
          id:null,
          user_id:null
      }
  },
  created(){
            axios.get('v1/notes',{params: {id: this.$route.params.id}})
        .then(response => {
            console.log(response.data)
            this.body = response.data.body
            this.id = response.data.id
            this.user_id=response.data.user_id
        })
      	
  },
}
</script>
<style>
    .update_contents{
        color:black;
        border: 1px solid black;
        padding:20px;
        text-align:left;
    }
    
    .plusbtn a {
  
  padding: 0;
  color: white;
}
.plusbtn i {
  width: 25px;
  height: 25px;
  border: 1px solid white;
  border-radius: 50%;
  line-height: 25px;
  font-size: 0.7em;
  text-align: center;
}
.plusbtn .fa-plus { background: #EF5350; }
</style>