<template>
  <div class="d-flex flex-column w-100 h-100 position-absolute pb-4 px-2">
    <div class="row mx-0 mb-3 align-items-center">
      <div class="col-auto">
        <h3 class="board-header-title">Test Board</h3>
      </div>
      <div class="col-auto px-0">
        <button type="button" class="btn bg-trans-dark-hover board-header-icon">
          <font-awesome-icon icon="fa-star" />
        </button>
      </div>
      <div class="col-autol ml-auto">
        <a class="btn bg-trans-dark-hover board-header-icon" href="#/home">
          <font-awesome-icon icon="fa-trash" />
        </a>
      </div>
    </div>
    <ScrollX>
      <div class="d-flex flex-row h-100">
        <div class="col-auto ml-0 mr-2 px-0" key="add">
          <ListAddButton />
        </div>
      </div>
    </ScrollX>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ListAddButton from './ListAddButton.vue';

export default defineComponent({
  name: 'Board',
  components: { ListAddButton },
});
</script>
