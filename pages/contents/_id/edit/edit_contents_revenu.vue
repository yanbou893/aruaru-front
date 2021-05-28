<template>
    <div>
        <div :key="index" v-for="(monetize,index) in monetizes">
            {{monetize.date}}{{monetize.money}}
            <div @click="monetize_delete(monetize.id)">×</div>
        </div>
    </div>
</template>
<script>
import axios from "@/plugins/axios"
export default {
  data:function(){
      return{
          monetizes: null,
      }
  },
  methods:{
      	monetize_delete:function(id){
            axios.delete('v1/monetizes/' + id)
            this.$router.push({ name: 'contents-id', params: { id: this.$route.params.id }});
      	}
  },
  created() {
              axios.get('v1/monetizes',{params: {app_id: this.$route.params.id}})
              .then(res => {
                  console.log(res)
                  console.log(res.data)
                  
                this.monetizes = res.data
              })
  
  }
}
</script>
<style>
.contents_docmentacion{
    font-size:20px;
    padding-left:70px;
    padding-bottom:20px;
}
.addcontentsdoc{
	padding-top:20px;
	padding-bottom:40px;
}
    .bodyformat, .outputformat{
        width:35%;
        margin:0 auto;
        border : solid 1px black;
    }
    .bodyformat{
        height:500px;
    }
    .next_money{
        float:right;
        padding-right:70px;
        padding-bottom:30px;
    }
    .bodycontents{
        padding-bottom:20px;
    }
</style>