<template>
    <div class="project-group">
      <slot />
    </div>
</template>

<script>
  export default {
    name: 'group'
  }
</script>

<style scoped>
  .project-group {
    width: 100%;
    display: flex;
    margin: 2rem 0;
    justify-content: space-evenly;
    align-items: center;
  }

  @media only screen and (max-width: 1080px) {
    .project-group {
      flex-direction: column;
    }
  }
</style>
