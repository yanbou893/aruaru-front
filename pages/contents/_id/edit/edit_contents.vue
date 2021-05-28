<template>
  
<div class="contentsform">
<div class="field">
  <label class="label">サービス名</label>
  <div class="control">
    <input class="input" type="text" v-model="title">
  </div>
</div>

<div class="field">
  <label class="label">URL</label>
  <div class="control">
    <input class="input" type="text"  v-model="URL" >
  </div>
</div>

<div class="field">
  <label class="label">サービスの内容</label>
  <div class="control">
    <input class="input" type="text" v-model="intro" >
  </div>
</div>

<div class="field">
  <label class="label">アイコン</label>
  <div class="control">
      <input type="file" @change="onUpload($event)"/>
      <div v-if="icon" style="display:flex">
        <img class="image_icon" :src="icon">
        <div @click="icon=null">削除</div>
      </div>
  </div>
</div>

<div class="field">
  <label class="label">Twitter</label>
  <div class="control">
    <input class="input" type="text" v-model="twitter" >
  </div>
</div>
      
<div class="field">
  <label class="label">ビジネスモデル</label>
  <div class="control" style="display:flex">
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
</div>
      
<div class="field">
  <label class="label">プラットフォーム</label>
  <div class="control" style="display:flex">
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
</div>
            <p><div @click.native="next_doc">次へ</div></p>
    </div>
</template>
<script>

import axios from "@/plugins/axios"
import uuid from 'uuid'

export default {
  data:function(){
      return{
          title:'',
          semititle: '',
          url:'',
          icon: '',
          bisinessmodel:'',
          pratform: '',
          twitter:'',
          aaa:[],
          bbb:[],
          app_id:null
      }
  },
  methods:{
      	savenote:function(){
            axios.put('v1/apps/' + this.$route.params.id,{
      	        body:this.model})
            this.$router.push({ name: 'contents-id', params: { id: this.app_id }});
      	},
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
      	    this.pratform=this.pf.join(',')
      	    console.log(this.user)
            axios.put('v1/apps' + this.app_id,{
      	        title:this.title,
      	        semititle:this.semititle,
      	        URL:this.URL,
      	        icon:this.icon,
      	        twitter:this.twitter,
      	        bisinessmodel:this.bisinesmodel,
      	        pratform:this.pratform,
      	        release:''})
            this.$router.push("/");
      	}
  },
  created() {
              axios.get('v1/apps',{params: {appid: this.$route.params.id}})
              .then(res => {
                this.title = res.data.title,
                this.semititle = res.data.semititle,
                this.URL = res.data.URL,
                this.icon = res.data.icon,
                this.twitter = res.data.twitter,
                this.aaa = res.data.bisinessmodel.split( ',' ),
                this.bbb = res.data.pratform.split( ',' ),
                this.app_id = res.data.id
                console.log(this.aaa)
              })
  
  }
}
</script>
<style>
    .contents_items{
        display:flex;
        margin-left: auto;
        margin-right: auto;
        width:40%;
        padding-left:5%;
        padding-right:5%;
    }
    .image_icon{
      width:25%;
      height:25%;
      padding:30px;
    }
</style>