<template>
  <Navbar />
  <div class="content">
    <router-view/>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue'
  export default {
    components: {
      Navbar
    }

  }

</script>

<style>
  .content {
    margin: 2rem auto;
    max-width: 60rem;
    padding: 0 2rem;
  }
</style>
