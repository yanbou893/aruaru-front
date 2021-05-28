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
          model: '# なぜつくったのか等',
          title:""
      }
  },
  methods:{
      	savenote:function(){
            axios.post('v1/notes',{
                user_id:this.$store.state.user.id,
      	        app_id:this.$route.params.id,
      	        title:this.title,
      	        body:this.model})
            this.$router.push("/");
      	}
  },
}
</script>