<template>
    <div style="color:black">
    <div v-html="$md.render(String(content.body))" class="outputformat"></div>
    </div>
    
</template>
<script>
export default {
    props:{
        content:Object,
        user:Object
    },
  data() {
    return {
      model: "",
      aaa:this.content.body
      
    }
  },
  beforeMount(){
      console.log(this.content)
        // this.model=JSON.parse(this.user.Document)
    }
}
</script>
<style>
  .outputformat{
    
        color:black;
        border: 1px solid black;
        padding:20px;
        text-align:left;
  }
</style>