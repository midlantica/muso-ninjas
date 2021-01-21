<template>
  <div class="navbar">
    <nav>
      <router-link :to="{ name: 'Home' }">
        <img class="ninja" src="../assets/ninja.gif">
      </router-link>
      <h1><router-link :to="{ name: 'Home' }">Muso Ninjas</router-link></h1>
      <div class="links">
        <div v-if="user">
          <router-link :to="{name: 'CreatePlaylist'}">Create Playlist</router-link>
          <button class="btn" @click.prevent="handleClick">Logout</button>
        </div>
        <div v-else>
          <router-link class="btn" :to="{ name: 'Signup' }">Sign up</router-link>
          <router-link class="btn" :to="{ name: 'Login' }">Log in</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  import useLogout from '@/composables/useLogout'
  import getUser from '@/composables/getUser'
  import { useRouter } from 'vue-router'

  export default {
    setup() {
      const { user } = getUser()
      const { logout } = useLogout()
      const router = useRouter()

      const handleClick = async () => {
        await logout()
        console.log('user logged out')
        router.push({ name: 'Login' })
      }

      return { handleClick, user }
    }

  }
</script>

<style scoped>
  button {
    margin: 0;
    background: hsl(40, 87%, 59%);
    background: linear-gradient(0deg,
      hsl(40, 87%, 59%) 0%,
      hsl(49, 87%, 73%) 30%,
      hsl(63, 58%, 94%) 100%);
    outline: none;
  }
  .navbar {
    padding: 1rem 2.5rem 1rem 1rem;
    margin-bottom: 1rem;
    background: hsl(40, 87%, 59%);
    background: linear-gradient(180deg,
      hsl(40, 87%, 59%) 0%,
      hsl(49, 87%, 73%) 40%,
      hsl(63, 58%, 94%) 100%);
  }
  nav {
    display: flex;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }
  nav img.ninja {
    max-height: 130px;
    margin: -1rem -0.5rem -1.8rem;
  }
  nav h1 {
    margin-left: 20px;
  }
  nav .links {
    margin-left: auto;
  }
  nav .links a, button {
    margin-left: 16px;
    font-size: 14px;
  }
</style>
