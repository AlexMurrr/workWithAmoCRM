<script setup>  
const props = defineProps({
  isActive: {type: String}
})
</script>

<template>
    <button :class="props.isActive" >создать</button>

    <button class="spinner-btn"></button>
</template>  
  

<style>

.noActive {
  background-color: rgb(242, 242, 247); 
}

.active {
  background-color: blue;
  color: white;
}

.spinner-btn {
  padding: 15px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  position: relative;
  overflow: hidden;
 
}

.spinner-btn::after {
  content: "";
  width: 20px;
  height: 20px;
  border: 2px solid #ffffff;
  border-top-color: transparent;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>