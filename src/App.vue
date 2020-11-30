<template>
  <teleport to="body">
    <div class="overlay" v-if="todoInputIsVisible" @click="hideInput"></div>
  </teleport>
  <header class="header">
    <base-container>
      <h1 class="header__title">Todo   App</h1>
    </base-container>
  </header>
  <base-container>
    <div class="tab">
      <h2 class="tab__item" :class="todoActive" @click="setActiveTab('todo-list')">Todos</h2>
      <h2 class="tab__item" :class="doneActive" @click="setActiveTab('done-list')">Done</h2>
    </div>
    <transition name="tab" mode="out-in">
      <component :is="activeTab" class="main"></component>
    </transition>
  </base-container>

  <transition name="input">
    <todo-input v-if="todoInputIsVisible" @input-saved="hideInput"></todo-input>
  </transition>

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

  @media only screen and (min-width: 48em) {
    font-size: 70%;
  }
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

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(8, 8, 8, 0.9);
  z-index: 20;
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

  &__item {
    font-size: 1rem;
    cursor: pointer;
    color: $text-light;

    &:not(:last-child) {
      margin-right: 8rem;
    }

    @media only screen and (min-width: 48em) {
      transition: all .3s;
      &:hover {
        color: $brown1;
      }
    }
  }

  &__item--active {
    color: $brown1;
    font-weight: 700;
    transform: scale(1.8);
  }
}

.main {
  position: relative;
  max-width: 62rem;
  width: 100%;
  margin: auto;
  margin-top: 5rem;
}

.tab-enter-from,
.tab-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
.tab-enter-active,
.tab-leave-active {
  transition: all .4s;
}

.tab-enter-to,
.tab-leave-from {
  transform: translateY(0);
  opacity: 1;
}

.input-enter-from,
.input-leave-to {
  transform: translate(-50%, -10%) scale(0.8);
  opacity: 0;
}
.input-enter-active,
.input-leave-active {
  transition: opacity .5s, transform .4s;
}

.input-enter-to,
.input-leave-from {
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
}
</style>
