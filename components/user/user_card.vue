<template>
<div class="card3">
        <div v-if="String(user.uid) == this.$store.state.user.uid">
          <nuxt-link v-bind:to="{name:'user-id-edit_user',params:{id:user.id}}" style="text-decoration: none ;color:white">
              <div class="plusbtn" style="float: right;">ユーザー情報を編集する</div>
          </nuxt-link>
        </div>
    <div class="box3" style="float: left">
        <div v-if="!(user.photoURL)">
            <img class="image3" src="~/assets/image/240ec862387d03003cb4c41cd93cb0be.png">
        </div>
        <div v-if="user.photoURL">
            <img class="image3" :src="user.photoURL">
        </div>
        <div>
            <p class="title3">{{user.displayName}}</p>
            <p class="content3">{{user.intro}}</p>
        </div>
    </div>
</div> 
</template>

<script>

export default {
    props:{user:Object}
    ,
    beforeMount(){
        console.log(this.user)
    }
}

</script>

<style type="text/css">
    .card3 {
        width: 70%;
        border-radius: 5px;
        background-color: #72b5b7;
    	margin:  0 auto;
    }
    .box3 {
        display: flex;
        margin-top:20px;
        margin-bottom:20px;
    }
    .image3 {
        width: 80px;
        height: 80px;
        margin-top:20px;
        margin-left:50px;
        border: 1px solid black;
        border-radius: 50%;
        line-height: 80px;
        object-fit: cover;
    }
    .title3 {
        font-size: 100%;
        margin-top:25px;
        margin-left:10px;
        color: #444;
    }
    .content3 {
        font-size: 80%;
        padding: 10px;
        margin-left:10px;
        color: #666;
    }
</style>