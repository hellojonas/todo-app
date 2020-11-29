<template>
  <ul class="todo-list">
    <todo-item
      v-for="todo in todoList"
      :key="todo.id"
      :id="todo.id"
      :text="todo.text"
      mode="todo"
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
    todoList() {
      return this.$store.getters.todoList;
    },
  },
};
</script>

<style lang="scss">
@import '@/scss/main.scss';
</style>
