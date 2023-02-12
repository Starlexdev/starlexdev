<template>
    <div class="projects-page">
      <Nuxt />
    </div>
</template>

<script>
  export default {
    name: 'project'
  }
</script>

<style scoped>
  .projects-page {
    background-color: #efefef;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    width: 100vw;
    font-family: 'Overpass', sans-serif;
    margin: 0;
    padding: 0;
    overflow-y: auto;
    overflow-x: hidden;
  }

  @media screen and (max-width: 1080px){
    .projects-page {
      min-height: 100vh !important;
      height: auto !important;
    }
  }
</style>
