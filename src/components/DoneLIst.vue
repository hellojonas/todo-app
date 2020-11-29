<template>
  <ul class="done-list">
    <todo-item
      v-for="done in doneList"
      :key="done.id"
      :id="done.id"
      :text="done.text"
      mode="done"
    ></todo-item>
  </ul>
</template>

<script>
import TodoItem from './ui/TodoItem.vue';

export default {
  components: {
    TodoItem,
  },
  computed: {
    doneList() {
      return this.$store.getters.doneList;
    },
  },
};
</script>

<style lang="scss">
@import '@/scss/main.scss';
</style>
