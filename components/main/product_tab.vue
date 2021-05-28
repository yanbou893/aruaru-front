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
    :prev-class="'prevli'"
    :next-class="'nextli'"
    :container-class="'pagination'"
    :page-class="'page-item'">
  </paginate>
    <!--<nav class="pagination is-centered" role="navigation" aria-label="pagination">-->
    <!--  <a class="pagination-previous">Previous</a>-->
    <!--  <a class="pagination-next">Next page</a>-->
    <!--  <ul class="pagination-list">-->
    <!--    <li v-for="n of max" :key="n" @click="nav(n)" class="navbutton"><a class="pagination-link" aria-label="Goto page 1">{{n}}</a></li>-->
    <!--  </ul>-->
    <!--</nav>-->
    <!--</div>-->
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
          contents:[],
          parPage: 9,
          currentPage: 1
  	}
  },
  beforeMount(){
    
        axios.get('v1/apps')
        .then(response => {
              console.log(response.data[0]);
              this.contents=response.data
        })
        .catch(error => {
              console.log(error);
        });
    },
  methods:{
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
.page-item, .prevli, .nextli{
  list-style:none;
  padding:10px;
}
.paginate{
  list-style:none;
}
.navbutton{
  list-style:none;
  cursor: pointer;
  display: inline;
  padding:10px;  
}
.allcontents{
  display:flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
}
@media (max-width: 480px) {

.navbutton{
  list-style:none;
  cursor: pointer;
  display: inline;
  padding:10px;  
}
}
</style>