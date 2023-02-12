<template>
  <div class="default-page">
    <Nuxt />
  </div>
</template>

<style scoped>
  .default-page {
    background-color: #121212;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    font-family: 'Merienda', cursive;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    overflow-y: auto;
  }

  @media screen and (max-width: 1080px){
    .default-page {
      min-height: 100vh !important;
      height: auto !important;
      padding: 2rem 0 !important;
    }
  }
</style>
