<template>
    <div>
      <div style="border:solid 1px black;margin:10px;padding:10px;background-color:pink">
        <div class="contents_docmentacion">作品の内容について</div>
        <div class="contents_docmentacion_sub">こだわった点や、どういった発想で生まれたサービスなのかを教えてください。</div>
      </div>
      タイトル
        <input type="text" v-model="title" class="titlearea">
      
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
          app_id: null,
          title:''
      }
  },
  methods:{
      	savenote:function(){
            axios.put('v1/notes/' + this.$route.params.id, {
                app_id:this.app_id,
      	        title:this.title,
      	        body:this.model})
            this.$router.push({ name: 'contents-id', params: { id: this.app_id }});
      	}
  },
  created() {
              axios.get('v1/notes',{params: {id: this.$route.params.id}})
              .then(res => {
                this.model = res.data.body
                this.title = res.data.title
                this.app_id = res.data.app_id
              })
  
  }
}
</script>