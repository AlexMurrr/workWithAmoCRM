<script setup>
  import dropDown from './dropDown.vue';
  import contanerV from './contanerV.vue';
  import titleV from './titleV.vue';
  import modal from './modalV.vue';  

  

  const title = 'Давайте создадим сущность';

</script>

<template> 
  <div  class="total">
   <titleV :title="title"/>
   <dropDown />  
   <div class="contaner">
    <contanerV/>
    <modal/>
   </div>
  </div>
</template>

<style scoped>
  .total{
    display: flex;
    justify-content: center; 
    align-items: center;
    flex-direction: column;
    gap: 30px;
    background: linear-gradient(to bottom, #00d2ff, #928dab);    
    height: 570px;
    width: 900px;
    border-radius: 15px;
  } 
 
</style>