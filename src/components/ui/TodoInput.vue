<template>
  <form @submit.prevent="saveTodo" class="form">
    <input
      class="form__input"
      type="text"
      placeholder="Add your todo"
      v-model.trim="todoText"
      ref="todoInput"
    />
    <span v-if="!!error" class="form__text-error">{{ error }}</span>
    <div class="form__button-box">
      <button type="buttton" class="form__button-add">Add</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ['input-saved'],
  data() {
    return {
      todoText: '',
      error: null,
    };
  },
  methods: {
    closeInput() {
      this.$emit('input-saved');
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
  mounted() {
    this.$refs.todoInput.focus();
  }
};
</script>

<style lang="scss">
@import '@/scss/main.scss';

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
    outline: none;

    @media only screen and (min-width: 48em) {
      transition: transform 0.3s, box-shadow 0.3s;
      &:hover {
        transform: translateY(-3px);
        box-shadow: $shadow-lg;
      }

      &:active {
        outline: none;
        transform: translateY(-1px);
        box-shadow: $shadow-md;
      }
    }
  }
}
</style>
