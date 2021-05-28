<template>
    <div>
     
       <p>名前</p>
       <input type="text" v-model="name" />
       <p>アイコン</p>
       <input type="file" @change="onUpload($event)"/>
       <p>自己紹介</p>
       <input type="text" v-model="intro" />
      <div @click="saveuser">save</div>
    </div>
</template>
<script>
import axios from "@/plugins/axios"
import uuid from 'uuid'
export default {
  data:function(){
      return{
          name: '',
          photo: '',
          intro: '',
      }
  },
  methods:{
      	saveuser:function(){
            axios.put('v1/users/' + this.$route.params.id,{
      	        displayName:this.name,
                photoURL:this.photo,
                intro:this.intro
            })
            const user = {
              id :  this.$store.state.user.id,
              uid : this.$store.state.user.uid,
              email : this.$store.state.user.email,
              displayName : this.name,
              photoURL : this.photo,
              intro : this.intro
            }
            this.$store.commit('user/setSignInState', user)
            this.$router.push("/");
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
            this.photo = url
          })
      }
    }
  },
  created() {
                this.name = this.$store.state.user.displayName,
                this.photo = this.$store.state.user.photoURL,
                this.intro = this.$store.state.user.intro
  
  }
}
</script>