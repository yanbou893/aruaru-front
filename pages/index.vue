<template>
  <div class="body">
      <div class="content">
        <product />
      </div>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import product from '~/components/main/product_tab.vue'


export default {
  components: {
    Header,
    Footer,
    product,
  }
}
</script>

<style>
Header{
  margin: 0 auto;
  text-align: center;
  
}
.body {
  margin: 0 auto;
  min-height: 100px;
  display: flex;
  width: 100%; 
  justify-content: center;
  text-align: center;
}
.content{
  padding-top:0px;
  width:100%;
  background-color:white;
}

serch{
  width:20%;
  margin-left: 10%
}
product{
  width:50%;
}
</style>