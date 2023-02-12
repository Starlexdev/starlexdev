<template>
    <div class="navbar">
      <div class="navigation">
        <div class="nav-section">
          <div class="nav-brand">
            <nuxt-link prefetch to="/">StarLex</nuxt-link>
          </div>
        </div>
        <div class="nav-section">
          <div class="nav-item"><nuxt-link to="/about" prefetch>About</nuxt-link></div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'navbar'
  }
</script>

<style scoped>
  .navbar {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    padding: 1rem 1rem;
    background-color: #fff;
    box-shadow: 0 2px 2px #ccc;
    z-index: 10;
    position: absolute;
  }
  .navigation {
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    width: 40%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .nav-section {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .nav-item {
    padding: 0 1rem;
    border-right: 1px solid black;
    font-size: 1.1rem;
  }
  .nav-item a {
    color: #555;
  }
  .nav-item a:hover {
    color: #000;
  }
  .nav-item:last-child {
    border-right: none;
  }
  .nav-brand {
    font-size: 1.2rem;
  }
  .nav-brand a {
    color: #666;
  }
  .nav-brand a:hover {
    color: #000;
  }

  @media screen and (max-width: 1080px){
    .navigation {
      width: 100%;
      padding-right: 1rem;
    }
  }
</style>
