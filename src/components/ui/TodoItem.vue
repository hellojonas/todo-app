<template>
  <li class="todo-item">
    <span class="todo-item__text">{{ text }}</span>
    <span class="todo-item__icon-box">
      <svg v-if="isTodoMode" @click="markDone" class="todo-item__icon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <title>done</title>
        <path d="M9 16.219l10.594-10.641 1.406 1.406-12 12-5.578-5.578 1.359-1.406z"></path>
      </svg>
      <svg @click="deleteTodo" class="todo-item__icon todo-item__icon--delete" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <title>delete</title>
        <path d="M18.984 3.984v2.016h-13.969v-2.016h3.469l1.031-0.984h4.969l1.031 0.984h3.469zM6 18.984v-12h12v12q0 0.797-0.609 1.406t-1.406 0.609h-7.969q-0.797 0-1.406-0.609t-0.609-1.406z"></path>
      </svg>
    </span>
  </li>
</template>

<script>
export default {
  props: {
    id: String,
    text: String,
    mode: {
      type: String,
      validator: val => ['todo', 'done'].includes(val)
    }
  },
  methods: {
    markDone() {
      this.$store.dispatch('markAsdone', {id: this.id});
    },
    deleteTodo() {
      this.$store.dispatch('removeTodo', {id: this.id});
    }
  },
  computed: {
    isTodoMode() {
      return this.mode === 'todo';
    }
  }
}
</script>

<style lang="scss">
@import '@/scss/main.scss';

.todo-item {
  display: flex;
  align-items: center;
  padding: 1.5rem 2rem;
  margin-bottom: 1.5rem;
  background-color: $brown2;
  border-radius: 100px;
  box-shadow: $shadow-md;
  width: 100%;

  &__text {
    font-size: 1.1rem;
    letter-spacing: 1px;
    flex: 1;
  }

  &__icon {
    height: 1.8rem;
    width: 1.8rem;
    fill: $dark1;
    
    &:not(:last-child) {
      margin-right: .8rem;
    }

    @media only screen and (min-width: 48em) {
      transition: all .3s;
      &:hover {
        fill: $red1;
        cursor: pointer;
      }
    }
  }

  @media only screen and (min-width: 38.75em) {
    margin-bottom: 2rem;
  }

  @media only screen and (min-width: 48em) {
    transition: all .3s;
    &:hover {
      background-color: $brown1;
    }
  }
}

</style>