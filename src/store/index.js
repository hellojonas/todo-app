import { createStore } from 'vuex';

export default createStore({
  state: {
    todos: [
      { id: 1, text: 'Master Vue', done: false },
      { id: 2, text: 'Build amazing apps', done: false },
      { id: 3, text: 'Make profit', done: false },
    ],
  },
  mutations: {
    addTodo(state, payload) {
      const todoId = Date.now().toString();
      state.todos.push({
        text: payload.text,
        id: todoId,
        done: false,
      });
    },
    removeTodo(state, payload) {
      const todoIdx = state.todos.findIndex(todo => todo.id === payload.id);
      state.todos.slice(todoIdx, 1);
    },
    markAsdone(state, payload) {
      const todoIdx = state.todos.findIndex(todo => todo.id === payload.id);
      state.todos[todoIdx].done = true;
    },
  },
  actions: {
    addTodo(context, payload) {
      context.commit('addTodo', payload);
    },
    removeTodo(context, payload) {
      context.commit('removeTodo', payload);
    },
    markAsdone(context, payload) {
      context.commit('markAsdone', payload);
    },
  },
  getters: {
    todoList(state) {
      return state.todos.filter(todo => todo.done);
    },
    doneList(state) {
      return state.todos.filter(todo => !todo.done);
    },
  },
});
