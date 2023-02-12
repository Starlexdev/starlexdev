<template>
    <div class="p-card">
      <div class="project-name">{{ title }}</div>
      <p>
        <slot />
      </p>
      <a :href="link" target="_blank">Show &raquo;</a>
    </div>
</template>

<script>
  export default {
    name: 'pCard',
    props: ['title', 'link']
  }
</script>

<style scoped>
  .p-card {
    background-color: #fff;
    width: 25%;
    padding: 1rem;
    box-shadow: 2px 2px 4px #ccc;
    margin: 1rem 0;
  }
  .project-name {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  @media only screen and (max-width: 1080px) {
    .p-card {
      width: 75%;
    }
  }
</style>
