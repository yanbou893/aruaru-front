<template>
    <div class="Backend">
        <div class="title">
        <h3>Backend</h3>
          <div class="plusbtn" style="float: right;" @click="addskill"><i class="fas fa-plus" style="float: right;color:white"></i></div>
        </div>
        <hr>
        
      <div class="Header_search" v-if="backend_skill">
          <input class="sbox"  id="s" name="s" type="text" v-model="items" placeholder="フリーワードを入力" />
          <button class="sbtn" type="submit" @click="addskill_items">追加</button>
      </div>
      <ul class="skill_items">
          <li class="skill_item" v-for="item in skill_item">{{item}}</li>
      </ul>
    </div>
</template>
<script>
import axios from "@/plugins/axios"
export default {
    props:{
        user:Array,
        back:Array
    },
  data:function(){
  	return{
  		backend_skill:false,
  		items:"",
  		skill_item:[],
  		id:""
  	}
  },
  methods:{
  	addskill:function(){
  		if(this.backend_skill){
  			this.backend_skill=false;
  		}else{
  			this.backend_skill=true;
  		}
  		console.log(this.user.id)
  	},
  	addskill_items:function(){
  	  axios.post('v1/skills',{name: this.items})
  	  axios.get('v1/skills',{params: {id: this.items}}).then(response => {
  	      console.log(response.data[0])
  	      axios.post('v1/fronts',{user_id:this.user.id,skill_id:response.data[0]})
  	  });
  	      
  	  this.skill_item.push(this.items);
  	  this.items="";
  	  
  	}
  }
}
</script>
<style>
.Backend{
    padding-bottom:10px;
}
.title{
    display:flex;
    justify-content:space-between;
}
    .plusbtn a {
  
  padding: 0;
  color: white;
}
.plusbtn i {
  width: 25px;
  height: 25px;
  border: 1px solid white;
  border-radius: 50%;
  line-height: 25px;
  font-size: 0.7em;
  text-align: center;
}
.plusbtn .fa-plus { background: #EF5350; }
    .cp_tab *, .cp_tab *:before, .cp_tab *:after {
	-webkit-box-sizing: border-box;
	        box-sizing: border-box;
}
.skill_items{
    list-style:none;
    display:flex;
    flex-wrap: wrap;
    padding:10px;
}
.skill_item{
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  margin:3px;
}
</style>