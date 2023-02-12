<template>
  <card>
    <img src="/pfp.png" alt="Starlex" class="pfp" />
    <div class="username">StarLex</div>
    <template v-slot:buttons>
      <card-button link="/about">About me</card-button>
      <card-button link="/projects">My projects</card-button>
    </template>
  </card>
</template>

<script>
  import card from '../components/card.vue';
  import CardButton from '../components/cardButton'
  export default {
    components: {
      CardButton,
      card
    }
  }
</script>

<style>
  .pfp {
    border-radius: 50% !important;
    width: 100%;
    max-width: 256px;
  }
  .username {
    text-align: center;
    margin-top: 2rem;
    font-size: 2rem;
    font-weight: bold;
  }
</style>
