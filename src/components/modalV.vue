<template>   
    <teleport to="body">
      <div v-if="showModal" class="modal">
        <div class="modal-content">    
          <h3>Введите имя для '{{ selectedItem }}'</h3>  
          <input  type="text" v-model="inputValue" placeholder="Введите имя сущности" required>    
          <button @click="getEntity(); addEntity(selectedItem, inputValue); reset()">Send</button>  
          <button @click="closeModal">Close</button>         
        </div>
      </div>
    </teleport>
  </template>
  
  <script setup> 
  import { storeToRefs } from 'pinia';
  import { modalStore } from '../stores/modalStore';
  import { useAmoStore }  from '../stores/amoStore';


  const storeModal = modalStore();  
  const amoStore = useAmoStore(); 
      
  const { showModal, inputValue,  selectedItem} = storeToRefs(storeModal);
  const { closeModal, getEntity} = storeModal;   
  const { addEntity } = amoStore;

  function reset (){
    showModal.value = false;   
    inputValue.value='';
  }
   
  </script>
  
  <style>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background-color: rgb(158, 228, 240);
    padding: 20px;
    border-radius: 5px;
  }
  
  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
  </style> -->


   <!-- <template>
    <div>
      <button @click="openModal">Открыть модальное окно</button>
      
      <div v-if="isModalOpen" class="modal">
        <input v-model="inputValue" placeholder="Введите имя сущности">
        <button @click="sendData">Отправить</button>
      </div>
    </div>
  </template>
  
<script setup>

import {modalStore} from '../stores/modalStore'
    
    const store = modalStore();
    const { isModalOpen } = store;
  
  </script>
  
  <style>
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 20px;
    border: 1px solid #ccc;
  }
  </style> -->