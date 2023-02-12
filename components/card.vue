<template>
    <div class="card">
      <div class="card-content">
        <slot />
      </div>
      <div class="card-buttons">
        <slot name="buttons" />
      </div>
    </div>
</template>

<script>
  export default {
    name: 'card'
  }
</script>

<style>
  .card {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #fff;
    border-radius: 12px;
    box-shadow: 0 0 12px #999;
    background-color: #fff !important;
    max-width: 60%;
  }

  .card-content {
    margin: 3rem;
  }

  .card-buttons {
    width: 100%;
    margin-top: 2.5rem;
    border-top: 1px solid #000;
    display: flex;
    flex-direction: row;
  }

  @media screen and (max-width: 1080px) {
    .card {
      width: 90%;
      max-width: 90%;
    }
    .card-buttons {
      flex-direction: column;
    }
  }
</style>
