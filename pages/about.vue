<template>
  <card>
    <div class="title">Who am I?</div>
    <p>I am Alejandro Shadow, a 18 year old web developer from a city called Guatemala city in Guatemala.</p>
    <p>I am a full stack web and game developer along with being a part time community manager at <a href="https://repl.it" target="_blank">repl.it</a>. Other than that, I enjoy listening to a large variety of music, cooking and reading fictional books. I also spend a lot of time binging anime and playing games such as League of Legends or Assassin's Creed.</p>
    <p>I am also now a student of <a href="https://www.harvard.edu/" target="_blank">Harvard University</a> studying Computer and Internet Security.</p> 
    <hr />
    <p>I am proficient with a lot of programming languages such as HTML/CSS/JS, Python3, C++, Rust, etc. Primarily, I use JS and am familiar with technologies such as NodeJS, ReactJS, VueJS and also with multiple database technologies such as MongoDB, Firebase firestore, PostgreSQL, SQLite, and a few more.</p>
    <template v-slot:buttons>
      <card-button link="/">Home</card-button>
      <card-button link="/contact">Contact me</card-button>
      <card-button link="projects">My projects</card-button>
    </template>
  </card>
</template>

<script>
  import Card from '../components/card.vue'
  import CardButton from '../components/cardButton'
  export default {
    name: 'about',
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
