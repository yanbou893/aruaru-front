<template>
    <div class="contentsform">
        <form>
            <p>サービス名</p>
            <input type="text" v-model="title" />
            <p>サービスの内容</p>
            <input type="text" v-model="intro" />
            <p>URL</p>
            <input type="text" v-model="URL" />
            <p>アイコン</p>
            <input type="file" @change="onUpload($event)"/>
              <div v-if="icon" style="display:flex">
                <img class="image_icon" :src="icon">
                <div @click="icon=null">削除</div>
              </div>
            <p>Twitter</p>
            <input type="text" v-model="twitter" />
            <p>ビジネスモデル</p>
            <div  style="display:flex">
              <div v-for="(aa, i) in aaa" :key="i">
                <input
                  :id="'aa' + i"
                  type="checkbox"
                  :value="aa"
                  v-model="bm"
                  
                >
                <label :for="'aa' + i">{{aa}}</label>
              </div>
              </div>
            <p>プラットフォーム</p>
            <div  style="display:flex">
              <div v-for="(bb, i) in bbb" :key="i">
                <input
                  :id="'bb' + i"
                  type="checkbox"
                  :value="bb"
                  v-model="pf"
                  
                >
                <label :for="'bb' + i">{{bb}}</label>
              </div>
              </div>
                <div style="border:solid 1px black;margin:10px;padding:10px;background-color:pink">
                  <div class="contents_docmentacion">作品の内容について</div>
                  <div class="contents_docmentacion_sub">こだわった点や、どういった発想で生まれたサービスなのかを教えてください。</div>
                </div>
                <div class="mavonEditor">
                  <no-ssr>
                    <mavon-editor :toolbars="markdownOption" v-model="model" :language="'ja'"/>
                  </no-ssr>
                </div>
            <p><nuxt-link to="/user/${id}/product/newcontents_doc" @click.native="next_doc">次へ</nuxt-link></p>
        </form>
    </div>
</template>
<script>
import axios from "@/plugins/axios"
import uuid from 'uuid'

export default {
  data:function(){
      return{
          user:[],
          markdownOption: {
            bold: true,
             // more params
          },
          model: "#### how to use mavonEditor in nuxt.js",
          title:'',
          intro:'',
          URL:'',
          icon:'',
          twitter:'',
          aaa:["広告モデル","課金モデル","ECモデル","仲介モデル","定額課金モデル","なし"],
          bm:[],
          bbb:["iOS","Android","Desktop","仲介モデル"],
          pf:[],
          bisinesmodel:'',
          pratform:'',
          input:this.icon
      }
  },
  methods:{
    onUpload: function(e) {
      // アップロード対象は1件のみとする
      const file = (e.target.files || e.dataTransfer.files)[0]
      if (file) {
        const fileName = uuid()
        this.$store
          .dispatch('contents/uploadImage', {
            name: fileName,
            file: file
          })
          .then(url => {
            console.log(url)
            // アップロード完了処理 (ローカルメンバに保存したり)
            this.icon = url
          })
      }
    },
      	next_doc:function(){
      	    this.bisinesmodel=this.bm.join(',')
      	    this.pratform=this.bbb.join(',')
      	    console.log(this.user)
      	    const app ={
      	        user_id:this.$store.state.user.id,
      	        title:this.title,
      	        semititle:this.intro,
      	        URL:this.URL,
      	        icon:this.icon,
      	        twitter:this.twitter,
      	        bisinessmodel:this.bisinesmodel,
      	        pratform:this.pratform,
      	        release:'',
      	        body:this.model,
      	        user_name:this.$store.state.user.displayName
      	    }
            axios.post('v1/apps',{app})
            this.$router.push("/");
      	}
  }
  
}
</script>
<style scoped>
.mavonEditor {
  width: 100%;
  height: 100%;
}
</style>