<template>
    <div class="newproduct">
    <nuxt-link  v-bind:to="{name:'contents-id',params:{id:content.id}}"  style="text-decoration: none ;color:white">
    <div class="productcard">
    <div class="box4" style="float: left">
        <div class="contentsitem">
            <div v-if="!(content.icon)">
                <img class="producticon" src="~/assets/image/unnamed.png">
            </div>
            <div v-if="content.icon">
                <img class="producticon" :src="content.icon">
            </div>
        <div class="text" style="text-align:left;padding-left:10px;padding-right:10px;">
            <p class="producttitle">{{content.title}}</p>
            <p class="productcontent">{{content.semititle}}</p>
        </div>
        </div>
        <!--    <hr>-->
        <!--<div class="contentsvalue">-->
        <!--    <i class="far fa-heart"></i>-->
        <!--    <p class="good">2</p>-->
        <!--    <i class="far fa-comment"></i>-->
        <!--    <p class="comment">2</p>-->
        <!--</div>-->
    </div>
    </div>
    </nuxt-link>
    </div>
</template>
<script>
export default {
    props:{
        content:Array,
    },
    
}
</script>
<style type="text/css">
    .newproduct{
        display: flex;
	    flex-wrap:wrap;
    	justify-content: center;
    }
    .productcard {
        width: 300px;
        height: 170px;
        margin: 20px;
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 0 3px 6px #ccc;
        background-color:gray;
        display: flex;
    }
    .box4 {
        margin-top:20px;
        margin-bottom:20px;
    }
    .contentsitem{
        display: flex;
        padding-bottom:20px;
    }
    .producticon {
        width: 70px;
        height: 70px;
        margin-top:10px;
        margin-left:30px;
        border: 0px solid black;
        border-radius: 50%;
        line-height: 50px;
    }
    .text{
        margin-left:10px;
        justify-content:initial;
    }
    .producttitle {
        font-size: 125%;
        margin-top:10px;
        color:white;
    }
    .productcontent {
        font-size: 80%;
        color:white;
    }
    .contentsvalue{
        display:flex;
        padding-top:10px;
        float:right;
        color: white;
        padding-right:5px;
        margin-left: 5px;
    }
    .good, .comment{
        margin:0 5px 0 5px;
    }
</style>