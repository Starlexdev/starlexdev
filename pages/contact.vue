<template>
    <card>
      <div class="title">Contacts</div>
      <p>I can get in touch via my email - <a href="mailto:starlex@tensi.org">starlex@tensi.org</a> or shoot me a text on my <a href="tel:+50231205251">phone number</a>!</p>
      <hr />
      <div class="title">Social media</div>
      <p>I also use multiple social media platforms such as <a href="https://instagram.com/starlexdev" target="_blank">Instagram</a>, <a href="https://twitter.com/starlexdev" target="_blank">Twitter</a> and <a href="https://dsc.gg/starlex" target="_blank">Discord</a>. You can also contact me via WhatsApp using the same phone number as above.</p>
      <template v-slot:buttons>
        <card-button link="/about">Go back</card-button>
        <card-button link="/">Home</card-button>
        <card-button link="/projects">My projects</card-button>
      </template>
    </card>
</template>

<script>
  import Card from '../components/card'
  import CardButton from '../components/cardButton'
  export default {
    name: 'contact',
    components: { CardButton, Card }
  }
</script>

<style scoped>
  p {
    font-size: 1.1rem;
    font-family: 'Overpass', sans-serif;
  }
  .title {
    font-size: 2.5rem;
    font-family: 'Montserrat', sans-serif;
  }
</style>
