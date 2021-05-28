<template>
    <div class="newproduct">
    <nuxt-link  to="/contents/${id}"  style="text-decoration: none ;color:white">
        <div class="user_img"></div>
        <div class="update_title"></div>
    </nuxt-link>
    </div>
</template>
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
        box-shadow: 0 3px 6px #ccc;
        background-color:Whitesmoke;
        display: flex;
    }
    .box4 {
        margin-top:20px;
        margin-bottom:20px;
    }
    .contentsitem{
        display: flex;
        padding-bottom:30px;
    }
    .producticon {
        width: 50px;
        height: 50px;
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