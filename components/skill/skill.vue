<template>
    <div class="skills">
        <infra :infra="skill_infra" />
        <front :front="skill_front" />
        <back :back="skill_back" :user="user" />
        <tool :tool="skill_tool" />
        <other :other="skill_other" />
    </div>
</template>
<script>
import back from '~/components/skill/skill_back.vue'
import front from '~/components/skill/skill_front.vue'
import infra from '~/components/skill/skill_infra.vue'
import other from '~/components/skill/skill_other.vue'
import tool from '~/components/skill/skill_tool.vue'
import axios from "@/plugins/axios"
  
export default {
    props:{
        user:Array
    },
  components: {
    back,
    front,
    infra,
    other,
    tool
  },
  data:function(){
    return{
      skill_back:[],
      skill_front:[],
      skill_infra:[],
      skill_tool:[],
      skill_other:[],
      
    }
  },
    created() {
    }
}
</script>
<style>
  .skills{
    width:70%;
    margin:0 auto;
  }
</style>