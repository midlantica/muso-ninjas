<template>
  <div class="user-playlists">
    <h2>My Playlists</h2>
    <div v-if="playlists">
      <ListView :playlists="playlists" />
      <router-link :to="{ name: 'CreatePlaylist' }" class="btn">Create a new playlist</router-link>
    </div>
  </div>
</template>

<script>
  import getCollection from '@/composables/getCollection'
  import getUser from '@/composables/getUser'
  import ListView from '@/components/ListView'

  export default {
    components: { ListView },
    setup() {
      const { user } = getUser()
      const { documents: playlists } = getCollection(
        'playlists',
        ['userId', "==", user.value.uid ]
      )

      console.log(playlists)

      return { playlists }
    }
  }
</script>

<style>

</style>
