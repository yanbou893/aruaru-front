<template>
	<div>
	  <div class="allcontents">
	 <newproduct  :key="index" v-for="(content,index) in getItems" :content=content />
  </div>
  <paginate
    :page-count="getPageCount"
    :page-range="3"
    :margin-pages="2"
    :click-handler="clickCallback"
    :prev-text="'＜'"
    :next-text="'＞'"
    :container-class="'pagination'"
    :page-class="'page-item'">
  </paginate>

  </div>
</template>
<script>
import newproduct from '~/components/main/newproduct.vue'
import axios from "@/plugins/axios"


export default {
  components: {
    newproduct,
  },
  data:function(){
  	return{
          contents: [],
          parPage: 9,
          currentPage: 1
  	}
  },
  beforeMount(){
                
                axios.get('v1/apps',{params:{user_id:this.$store.state.user.id}})
                .then(res => {
                      console.log(res.data);
                      this.contents = res.data;
                      console.log(this.contents);
                })
                .catch(error => {
                      console.log(error);
                });
        
    },
   methods: {
    clickCallback: function (pageNum) {
       this.currentPage = Number(pageNum);
    }
   },
   computed: {
     getItems: function() {
      let current = this.currentPage * this.parPage;
      let start = current - this.parPage;
      return this.contents.slice(start, current);
     },
     getPageCount: function() {
      return Math.ceil(this.contents.length / this.parPage);
     }
   }
}
</script>
<style>
.page-item{
  list-style:none;
}
@media (max-width: 480px) {
}

</style>