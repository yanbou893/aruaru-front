<template>
    <div class="Other">
        <div class="title">
        <h3>Other</h3>
          <div class="plusbtn" style="float: right;" @click="addskill"><i class="fas fa-plus" style="float: right;color:white"></i></div>
        </div>
        <hr>
        
      <div class="Header_search" v-if="backend_skill">
        <form class="form4" action="自分のサイトURL" method="get">
          <input class="sbox"  id="s" name="s" type="text" placeholder="フリーワードを入力" />
          <button class="sbtn" type="submit"><i class="fas fa-search"></i></button>
        </form>
      </div>
      <ul class="skill_items">
          <li class="skill_item">VSCode</li>
      </ul>
    </div>
</template>
<script>
export default {
  data:function(){
  	return{
  		backend_skill:false
  	}
  },
  methods:{
  	addskill:function(){
  		if(this.backend_skill){
  			this.backend_skill=false;
  		}else{
  			this.backend_skill=true;
  		}
  	}
  }
}
</script>
<style>
.Other{
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
    padding-top:10px;
}
.skill_item{
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
}
</style>