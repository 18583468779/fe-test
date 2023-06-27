<template>
  <div>
    <CustomModal>
      <template v-slot:header>
        <div class="custom-modal-header">自定义 Modal 头部</div>
      </template>
      <template v-slot:default>
        <div class="custom-modal-content">这是自定义 Modal 内容</div>
      </template>
      <template v-slot:footer>
        <div class="custom-modal-footer">自定义 Modal 底部</div>
      </template>
    </CustomModal>
  </div>
</template>

<script>
import CustomModal from '../../components/CustomModal.vue';

export default {
  components: {
    CustomModal,
  },
};
</script>

<style scoped>
.custom-modal-header {
  font-weight: bold;
  margin-bottom: 10px;
}

.custom-modal-content {
  padding: 20px;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.custom-modal-footer {
  display: flex;
  justify-content: flex-end;
}
</style>