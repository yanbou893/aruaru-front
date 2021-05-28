<template>
<div class="user">
    <User :user="user" />
    <product style="clear: left" 
    :user="user"
    />
</div> 
</template>

<script>
import User from '~/components/user/user_card.vue'
import product from '~/components/main/product_tab_user.vue'
import axios from "@/plugins/axios"

export default {
  components: {
    product,
    User
  },
  data:function(){
    return{
        user:[],
        
    }
  },
    created() {
        axios.get('v1/users',{params: {uid: this.$route.params.id}})
        .then(response => {
              console.log(response.data);
              console.log(response.data.id);
              this.user = response.data;
        })
        .catch(error => {
              console.log(error);
        });
    }
}
</script>

<style type="text/css">
    
</style>