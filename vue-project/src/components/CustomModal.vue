<template>
  <div>
    <button @click="toggleModal">显示 Modal</button>
    <div v-if="isModalVisible" class="modal-container" @click="hideModal">
      <div class="modal-content" @click.stop>
        <slot name="header">
          <div class="modal-header">Modal 头部</div>
        </slot>
        <div class="modal-body">
          <slot name="default">
            <div class="default-modal-content">这是自定义 Modal 内容</div>
          </slot>
        </div>
        <slot name="footer">
          <div class="modal-footer">Modal 底部</div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const isModalVisible = ref(false);

    const toggleModal = () => {
      isModalVisible.value = !isModalVisible.value;
    };

    const hideModal = () => {
      isModalVisible.value = false;
    };

    return {
      isModalVisible,
      toggleModal,
      hideModal
    };
  }
}
</script>

<style scoped>
.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 4px;
}

.modal-header {
  font-weight: bold;
  margin-bottom: 10px;
}

.modal-body {
  margin-bottom: 10px;
}

.default-modal-content {
  padding: 20px;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
}
</style>