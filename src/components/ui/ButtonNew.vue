<template>
  <div class="button-new">
    <svg class="button-new__icon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <title>add</title>
      <path d="M18.984 12.984h-6v6h-1.969v-6h-6v-1.969h6v-6h1.969v6h6v1.969z"></path>
    </svg>
  </div>
</template>

<style lang="scss">
  @import '@/scss/main.scss';

  .button-new {
    position: fixed;
    bottom: 4rem;
    right: 4rem;
    background-color: $red1;
    fill: $text-light;
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
    box-shadow: $shadow-md;
    cursor: pointer;

    &__icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 2.4rem;
      width: 2.4rem;
    }

    @media only screen and (min-width: 48em) {
      transition: all .3s;
      &:hover {
        transform: translateY(-3px);
        box-shadow: $shadow-lg;
      }

      &:active {
        transform: translateY(-1px);
        box-shadow: $shadow-md;
      }
    }
  }
</style>