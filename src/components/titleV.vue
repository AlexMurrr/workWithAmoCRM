<script setup>  
const props = defineProps({
    title: {type: String}
})
</script>

<template>   
  <div class="title">  
    <h2> {{ title }} </h2>
  </div> 
</template>  
  

<style scoped>
    .title{
        font-family: "Roboto", sans-serif;
        color: #fff;
        font: bold;
    }
</style>