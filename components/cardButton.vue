<template>
  <nuxt-link prefetch exact :to="$props.link" class="button"><slot /></nuxt-link>
</template>

<script>
  export default {
    name: 'card-button',
    props: ['link']
  }
</script>

<style scoped>
  .button {
    padding: 1rem;
    flex-grow: 1;
    text-align: center;
    border-right: 1px solid #000;
    text-decoration: none;
    color: #333;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    transition: background-color 200ms linear;
  }

  .button:hover {
    background-color: #d0d0d0;
    color: #000;
  }

  .button:first-child {
    border-bottom-left-radius: 12px;
  }

  .button:last-child {
    border-right: none;
    border-bottom-right-radius: 12px;
  }

  @media screen and (max-width: 1080px) {
    .button {
      border-radius: 0 !important;
      border-right: none;
      border-bottom: 1px solid #000 !important;
    }
    .button:last-child {
      border-bottom-left-radius: 12px !important;
      border-bottom-right-radius: 12px !important;
      border-bottom: none !important;
    }
  }
</style>
