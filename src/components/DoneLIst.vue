<template>
  <ul class="done-list">
    <transition-group name="todo">
      <todo-item
        v-for="done in doneList"
        :key="done.id"
        :id="done.id"
        :text="done.text"
        mode="done"
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
    doneList() {
      return this.$store.getters.doneList;
    },
  },
};
</script>

<style lang="scss">
@import '@/scss/main.scss';

.todo-leave-from {
  transform: translateX(0) scale(1);
  opacity: 1;
}

.todo-leave-to {
  transform: translateX(4rem) scale(1);
  opacity: 0;
}

.todo-leave-active {
  transition: transform 0.4s, opacity 0.4s;
}
</style>
