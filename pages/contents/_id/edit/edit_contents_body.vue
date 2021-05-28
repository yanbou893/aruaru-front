<template>
    <div>
      <div style="border:solid 1px black;margin:10px;padding:10px;background-color:pink">
        <div class="contents_docmentacion">作品の内容について</div>
        <div class="contents_docmentacion_sub">こだわった点や、どういった発想で生まれたサービスなのかを教えてください。</div>
      </div>
          <div class="mavonEditor">
            <no-ssr>
              <mavon-editor :toolbars="markdownOption" v-model="model" :language="'ja'"/>
            </no-ssr>
          </div>
      <div @click="savenote">save</div>
    </div>
</template>
<script>
import axios from "@/plugins/axios"
export default {
  data:function(){
      return{
          model: '',
          app_id:null
      }
  },
  methods:{
      	savenote:function(){
            axios.put('v1/apps/' + this.$route.params.id,{
      	        body:this.model})
            this.$router.push({ name: 'contents-id', params: { id: this.app_id }});
      	}
  },
  created() {
              axios.get('v1/apps',{params: {appid: this.$route.params.id}})
              .then(res => {
                this.model = res.data.body,
                this.app_id = res.data.app_id
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