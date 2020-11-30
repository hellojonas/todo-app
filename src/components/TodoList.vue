<template>
  <ul class="todo-list">
    <transition-group name="todo">
      <todo-item
        v-for="todo in todoList"
        :key="todo.id"
        :id="todo.id"
        :text="todo.text"
        mode="todo"
      ></todo-item>
    </transition-group>
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

.todo-enter-from {
  transform: translateX(-4rem);
  opacity: 0;
}
.todo-enter-active,
.todo-leave-active {
  transition: transform 0.4s, opacity .4s;
  position: absolute;
}
.todo-enter-to,
.todo-leave-from {
  transform: translateX(0) scale(1);
  opacity: 1;
}
.todo-leave-to {
  transform: translateX(4rem) scale(1);
  opacity: 0;
}
.todo-move {
  transition: transform .3s, opacity .3s;
}
</style>
