<template>
  <div>
    <div class="overlay" @click="closeInput"></div>
    <form @submit.prevent="saveTodo" class="form">
      <input
        class="form__input"
        type="text"
        placeholder="Add your todo"
        v-model.trim="todoText"
      />
      <span v-if="!!error" class="form__text-error">{{ error }}</span>
      <div class="form__button-box">
        <button type="buttton" class="form__button-add">Add</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  emits: ['input-closed'],
  data() {
    return {
      todoText: '',
      error: null,
    };
  },
  methods: {
    closeInput() {
      this.$emit('input-closed');
    },
    saveTodo() {
      this.error = null;

      if (this.todoText === '') {
        this.error = 'Todo must not be empty';
        return;
      }

      this.$store.dispatch('addTodo', { text: this.todoText });
      this.closeInput();
      this.todoText = '';
    },
  },
};
</script>

<style lang="scss">
@import '@/scss/main.scss';

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(8, 8, 8, 0.9);
  z-index: 20;
}

.form {
  position: fixed;
  top: 26%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 30;
  max-width: 38rem;
  width: 100%;

  &__input {
    display: block;
    font-size: 1.4rem;
    color: $text-dark;
    width: 100%;
    padding: 0 2rem;
    min-height: 5.5rem;
    border-radius: 100px;
    border: none;
    margin-bottom: 1rem;
    box-shadow: $shadow-md;
  }

  &__text-error {
    display: block;
    color: $text-light;
    letter-spacing: 1px;
    font-weight: 600;
    text-align: center;
  }

  &__button-box {
    margin-top: 2.5rem;
    text-align: center;
  }

  &__button-add {
    border: none;
    background-color: $brown1;
    color: $text-dark;
    font-size: 1.2rem;
    padding: 1rem 2rem;
    border-radius: 100px;
    box-shadow: $shadow-md;
    cursor: pointer;
  }
}
</style>
