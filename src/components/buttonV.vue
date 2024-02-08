<script setup>  
const props = defineProps({
  isActive: {type: String}
})
</script>

<template>
    <button :class="props.isActive" >создать</button>
</template>  
  

<style>

.noActive {
    background-color: rgb(242, 242, 247); 
}

.active {
  background-color: blue;
  color: white;
}
</style>