<template>
  <form @submit.prevent="handleSubmit" >
    <h4>Create New Playlist</h4>
    <input type="text" required placeholder="Playlist Title" v-model="title">
    <textarea required placeholder="Playlist description" v-model="description"></textarea>

    <!-- upload playlist image -->
    <label>Upload playlist cover image</label>
    <input type="file" @change="handleChange">
    <div class="error">{{ fileError }}</div>

    <div class="error">{{ error }}</div>

    <button>Submit</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useStorage from '@/composables/useStorage'
import useCollection from '@/composables/useCollection'
import getUser from '@/composables/getUser'
import { timestamp } from '@/firebase/config'

export default {
  setup() {
    const { filePath, url, uploadImage } = useStorage()
    const { error, addDoc } = useCollection('playlists')
    const { user } = getUser()

    const title = ref('')
    const description = ref('')
    const file = ref(null)
    const fileError = ref(null)

    const handleSubmit = async () => {
      if(file.value) {
        await uploadImage(file.value)
        //console.log( title.value, description.value, file.value )
        await addDoc({
          title: title.value,
          description: description.value,
          userId: user.value.uid,
          userName: user.value.displayName,
          coverUrl: url.value,
          filePath: filePath.value,
          songs: [],
          createdAt: timestamp()
        })
        if(!error.value) {
          console.log('Playlist added');
        }
      }

    }

    // allowed file types are
    const types = ['image/png', 'image/gif', 'image/jpeg']

    const handleChange = (e) => {
      const selected = e.target.files[0]
      console.log(selected);

      if(selected && types.includes(selected.type)) {
        file.value = selected
        fileError.value = null
      } else {
        file.value = null
        fileError.value = "Please select an image file: png, jpeg, or gif."
      }
    }

    return { title, description, handleSubmit, error, handleChange, fileError }
  }
}
</script>

<style>
  form {
    background: white;
  }
  imput[type="file"] {
    border: 0;
    padding: 0;
  }
  label {
    font-size: 1rem;
    display: block;
    margin-top: 2rem;
    background: hsl(36, 100%, 89%);
    padding: 1rem;
    border-radius: 4px;
    text-align: center;
  }
  button {
    margin-top: 1rem;
  }
</style>
