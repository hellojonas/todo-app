<template>
  <header class="header">
    <base-container>
      <h1 class="header__title">TODO</h1>
    </base-container>
  </header>
  <base-container>
    <div class="tab">
      <h2 class="tab__item" :class="todoActive" @click="setActiveTab('todo-list')">Todos</h2>
      <h2 class="tab__item" :class="doneActive" @click="setActiveTab('done-list')">Done</h2>
    </div>
    <component :is="activeTab"></component>
  </base-container>

  <todo-input v-if="todoInputIsVisible" @input-closed="hideInput"></todo-input>

  <button-new v-if="!todoInputIsVisible" @click="showTodoInput"></button-new>
</template>

<script>
import TodoList from './components/TodoList';
import DoneList from './components/DoneLIst';
import ButtonNew from './components/ui/ButtonNew';
import TodoInput from './components/ui/TodoInput';

export default {
  components: {
    TodoList,
    DoneList,
    ButtonNew,
    TodoInput
  },
  data() {
    return {
      activeTab: 'todo-list',
      todoInputIsVisible: false
    };
  },
  computed: {
    todoActive() {
      return {
        'tab__item--active': this.activeTab === 'todo-list'
      }
    },
    doneActive() {
      return {
        'tab__item--active': this.activeTab === 'done-list'
      }
    },
  },
  methods: {
    setActiveTab(tab) {
      this.activeTab = tab;
    },
    showTodoInput() {
      this.todoInputIsVisible = true;
    },
    hideInput() {
      this.todoInputIsVisible = false;
    }
  }
};
</script>

<style lang="scss">
@import '@/scss/main.scss';

html {
  font-size: 62.5%;
}

*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font: inherit;
}

body {
  font-family: 'Lato', arial, sans-serif;
  font-size: 1.2rem;
  background-color: $purple1;
  color: $text-dark;
}

.header {
  height: 8rem;
  display: flex;
  align-items: center;
  background-color: $purple2;
  margin-bottom: 4rem;
  box-shadow: $shadow-md;

  &__title {
    color: $text-light;
    font-size: 1.6rem;
    letter-spacing: 1px;
  }
}

.tab {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  max-width: 20rem;
  margin: auto;
  margin-bottom: 3rem;

  &__item {
    font-size: 1rem;
    cursor: pointer;
    color: $text-light;

    &:not(:last-child) {
      margin-right: 8rem;
    }
  }

  &__item--active {
    color: $brown1;
    font-weight: 700;
    transform: scale(1.8);
  }
}
</style>
