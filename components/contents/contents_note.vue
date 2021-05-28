<template>
    <div>
          <nuxt-link v-bind:to="{name:'contents-id-note',params:{id:this.note.id}}" style="text-decoration: none ;color:white">        
        
              <div class="update_contents">
                <div>
                    {{note.title}}
                </div>
              </div>
          </nuxt-link>
    </div>
</template>

<script>
export default {
    props:{
        content:Object,
        note:Object,
        user:Object
    },
  methods:{
  	addskill:function(){
  		if(this.backend_skill){
  			this.backend_skill=false;
  		}else{
  			this.backend_skill=true;
  		}
  		console.log(this.user.id)
  	}
  }
}
</script>
<style>
    .update_contents{
        color:black;
        border: 1px solid black;
        padding:20px;
        text-align:left;
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
</style>