<!-- <template>
    <button @click="openModal">Открыть модальное окно</button>
    <teleport to="body">
      <div v-if="showModal" class="modal">
        <div class="modal-content">
          <span class="close" @click="closeModal">&times;</span>
          <button @click="sendMessage">Send</button>
          <p>Это модальное окно</p>
        </div>
      </div>
    </teleport>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const showModal = ref(false);
  
      const openModal = () => {
        showModal.value = true;
      }
  
      const closeModal = () => {
        showModal.value = false;
      }
  
      return {
        showModal,
        openModal,
        closeModal
      }
    }
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
    background-color: white;
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


  <template>
    <div>
      <button @click="openModal">Открыть модальное окно</button>
      
      <div v-if="isModalOpen" class="modal">
        <input v-model="inputValue" placeholder="Введите имя сущности">
        <button @click="sendData">Отправить</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isModalOpen: false,
        inputValue: ''
      };
    },
    methods: {
      openModal() {
        this.isModalOpen = true;
      },
      sendData() {
        // Ваша логика отправки данных
        console.log('Отправленное значение:', this.inputValue);
        
        // Закрываем модальное окно после отправки данных
        this.isModalOpen = false;
      }
    }
  };
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
  </style>