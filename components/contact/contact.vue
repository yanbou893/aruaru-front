<template>
    <div class="contact">
        <button class="sns" @click="add_contact" v-if="this.$nuxt.$route.params.id==this.$store.state.user.uid">編集する</button>
        <div class="cp_iptxt" style="margin:0 auto" v-if="add_contact_tf">
        	<label class="ef">
        	<input type="text" placeholder="Facebook" v-model="facebook">
        	<input type="text" placeholder="Twitter" v-model="twitter">
        	<input type="text" placeholder="Mail" v-model="mail">
        	<input type="text" placeholder="GitHub" v-model="github">
        	<input type="text" placeholder="ブログ" v-model="blog">
        	</label>
        	<div style="padding-bottom:20px">
        <button class="sns_go" @click="result_sns">確定</button>
        </div>
        </div>
   <div id="social-icon" class="clear" style="text-align: left">
     <div class="snsicon">
  <p><a href="#" target="_blank" style="display:flex;text-decoration: none;"><i class="fab fa-facebook fa-lg"></i><div class="contact_font">{{facebook}}</div></a></p>
  <p><a href="#" target="_blank" style="display:flex;text-decoration: none;"><i class="fab fa-twitter fa-lg"></i><div class="contact_font">{{twitter}}</div></a></p>
  <p><i class="far fa-envelope fa-lg"></i><div class="contact_font"></div></p>
  <p><a href="https://github.com/yanbou893" target="_blank" style="display:flex;text-decoration: none;"><i class="fab fa-github fa-lg"></i><div class="contact_font">{{github}}</div></a></p>
  <p><a href="#" target="_blank" style="display:flex;text-decoration: none;"><i class="fas fa-file-alt fa-lg"></i><div class="contact_font">{{blog}}</div></a></p>
  </div>
</div>
</div>
</template>

<script>
import axios from "@/plugins/axios"

export default {
    props:{
        user:Array,
        contact:Array
    },
data:function(){
  	return{
  		add_contact_tf:false,
  		facebook:"",
  		twitter:"",
  		mail:"",
  		github:"",
  		blog:""
  	}
},
mounted() {
        axios.get('v1/contacts',{params: {id: this.user.id}})
        .then(response => {
              console.log(response);
            this.facebook = response.data.facebook;
            this.twitter = response.data.twitter;
            this.mail = response.data.mail;
            this.github = response.data.github;
            this.blog = response.data.blog;
        })
        .catch(error => {
              console.log(error);
        });
        
      console.log(this.contact)
  	  
  },
  methods:{
  	add_contact:function(){
  		if(this.add_contact_tf){
  			this.add_contact_tf=false;
  		}else{
  			this.add_contact_tf=true;
  		}
  	},
  	result_sns:function(){
  	  axios.post('v1/contacts',{user_id:this.user.id,facebook:this.facebook,twitter:this.twitter
  	  ,mail:this.mail,github:this.github,blog:this.blog})
  			this.add_contact_tf=false;
  	  
  	}
  }
}
</script>
<style>
.contact{
  justify-content: center;
  text-align: center;
}
.sns{
  margin-bottom:20px;
}
.cp_iptxt {
	width: 50%;
	margin-top: 10px 3%;
  text-align: center;
}
.ef{
  text-align: center;
  
}
input{
  margin-bottom:10px;
}
.cp_iptxt input[type='text'] {
	font: 15px/24px sans-serif;
	box-sizing: border-box;
	width: 100%;
	padding: 0.3em;
	letter-spacing: 1px;
	color: #aaaaaa;
	border: 1px solid #1b2538;
	border-radius: 4px;
}
.ef input[type='text']:focus {
	border: 1px solid #da3c41;
	outline: none;
	box-shadow: 0 0 5px 1px rgba(218,60,65, .5);
}
#social-icon a {
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  margin: 0 5px 5px 0;
  padding: 0;
  color: white;
}
#social-icon i {
  width: 50px;
  height: 50px;
  margin-left: 15%;
  border: 1px solid white;
  border-radius: 50%;
  line-height: 50px;
  text-align: center;
  
}
.clear{
  margin-left: auto;
  margin-right: auto;
        width:40%;
        padding-left:5%;
        padding-right:5%;
        border:solid 1px black;
}
.snsicon{
        padding-top:10px;
        padding-bottom:10px;
  
}
.contact_font{
        color:black;
        padding-top:10px;
        padding-left:10px;
        font-size:20px;
  
}

#social-icon .fa-twitter { background: #00a1e9; }
#social-icon .fa-facebook { background: #3b5998; }
#social-icon .fa-envelope { background: #c53727; }
#social-icon .fa-github { background: black; }
#social-icon .fa-file-alt { background: green; }
</style>