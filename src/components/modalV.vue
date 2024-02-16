<template>
    <button @click="openModal">Открыть модальное окно</button>
    <teleport to="body">
      <div v-if="showModal" class="modal">
        <div class="modal-content">      
          <input v-model="inputValue" placeholder="Введите имя сущности">    
          <button @click="sendMessage">Send</button>  
          <button @click="closeModal">Close</button>         
        </div>
      </div>
    </teleport>
  </template>
  
  <script setup> 
  import { storeToRefs } from 'pinia';
  import { modalStore } from '../stores/modalStore';

  const storeModal = modalStore();   
      
  const { showModal, inputValue } = storeToRefs(storeModal);
  const {openModal, closeModal, sendMessage} = storeModal;   
   
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