<template>
    <div class="contents_title">
        
        <div v-if="String(user.uid) == this.$store.state.user.uid">
          <nuxt-link v-bind:to="{name:'contents-id-edit-edit_contents',params:{id:this.content.id}}" style="text-decoration: none ;color:white">
              <div class="plusbtn" style="float: right;">基本情報を編集する</div>
          </nuxt-link>
          <div @click="deletethis">この投稿を削除する</div>
        </div>
        <div class="box5">
          <div class="contents_item">
            <div v-if="!(content.icon)">
                <img class="contents_icon" src="~/assets/image/unnamed.png">
            </div>
            <div v-if="content.icon">
                <img class="contents_icon" :src="content.icon">
            </div>
            <div class="contents_text" style="text-align:left;padding-top:20px;padding-left:20px">
              <p class="contents_name" style="padding-bottom:10px">{{content.title}}</p>
              <p class="contents_content">{{content.semititle}}</p>
            </div>
            <div class="contents_tag" style="margin:0 20% 0 auto">
                <p class="model">{{content.bisinessmodel}}</p>
                <p class="pratform">{{content.pratform}}</p>
            </div>
            <div v-if="content.twitter"> 
            <a :href="content.twitter" target="_blank"><i class="fab fa-twitter fa-lg"></i></a>
            </div>
          </div>
        </div>
        </a>
      </div>
</template>
<script>
import axios from "@/plugins/axios"
export default {
    props:{
        content:Array,
        user:Array
    },
  methods:{
      	deletethis:function(){
            axios.delete('v1/apps/' + this.content.id)
            this.$router.push("/");
      	}
  },
    
}
</script>
<style>
    
.contents_title {
        width: 80%;
        height: 200px;
        margin:10px auto;
        border-radius: 5px;
        background-color: #fff;
        padding-top:10px;
        background-color:gray;
        justify-content: center;
        align-items: center;
    }
    .box5 {
        margin-top:10px;
        margin-bottom:10px;
    }
    .contents_item{
        display: flex;
        padding-bottom:30px;
        align-items: center;
    }
    .contents_icon {
        width: 100px;
        height: 100px;
        margin-left:40px;
        border: 0px solid black;
        border-radius: 50%;
        line-height: 50px;
        margin-top:50px;
    }
    .contents_text{
        align-items: center;
        margin-left:10px;
    }
    .contents_name {
        font-size: 125%;
        margin-top:10px;
        color:white;
    }
    .contents_content {
        font-size: 80%;
        color:white;
    }
    .contents_tag{
        display:flex;
    }
    .contents_tag p{
        padding-right:10px;
        border: 1px solid black;
        
    }
</style>