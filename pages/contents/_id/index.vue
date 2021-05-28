<template>
  <div class="contents_all">
    <!--<nuxt-link   v-bind:to="{name:'contents-id-edit-edit_contents',params:{id:content.id}}"  style="text-decoration: none ;color:white">aaa</nuxt-link>-->
     
      <ContentsTitle :content="content" :user="user" />
      <ContentsBar :content="content" :user="user" />
      <!--<div class="contents_like" style="float:left">-->
      <!--  <i class="far fa-heart"></i>-->
      <!--</div>-->
      <!--<div class="contents_commentform">-->
      <!--  <form>-->
      <!--    <input type="text" name=""/>-->
      <!--    <input type="submit" value="Submit"/>-->
      <!--  </form>-->
      <!--</div>-->
      <!--<div class="contents_comment">-->
      <!--  コメント-->
      <!--</div>-->
  </div>
</template>

<script>
import ContentsBar from '~/components/contents/contents_bar.vue'
import ContentsTitle from '~/components/contents/contents_title.vue'
import axios from "@/plugins/axios"
  
export default {
  components: {
    ContentsBar,
    ContentsTitle
  },
  data:function(){
    return{
        content:[],
        user:[]
    }
  },
    created() {
        axios.get('v1/apps',{params: {appid: this.$route.params.id}})
        .then(response => {
              console.log(response.data);
              this.content = response.data;
              
            axios.get('v1/users',{params: {id: response.data.user_id}})
            .then(res => {
                  console.log(res.data);
                  this.user = res.data
                  
            })
            .catch(error => {
                  console.log(error);
            });
        })
        .catch(error => {
              console.log(error);
        });
    }
}
</script>

<style>
.contents_all{
  text-align:center;
  color:white;
  background-color:gray;
  padding-top:0;
}
</style>