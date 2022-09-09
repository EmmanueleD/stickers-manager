<template>
  <PVMessage v-if='authStore.userData' severity="warn">It seems you didn't verify your email, maybe check
    on your spam folder, Thank you!
  </PVMessage>
  <div class="fullpage">

    <div class="content flex flex-column align-items-center">
      <PWAPrompt></PWAPrompt>
      <img alt="Vue logo" src="../assets/logo.png">
      <br>
      <br>
      <br>
      <br>
      <h1>Stickers Manager</h1>
      <h2>Stickers Manager</h2>
      <h3>Stickers Manager</h3>
      <h4>Stickers Manager</h4>
      <h5>Stickers Manager</h5>
      <h6>Stickers Manager</h6>
      <p>Stickers Manager</p>
    </div>
    <div v-if="authStore.userData" class="grid-center mt-4 mb-4">

      Welcome {{ authStore.userData.email }}

    </div>
    <div class="firma">
      <a href="https://www.emmd.dev"><img src="../assets/emmd_logo.gif" alt=""></a>
    </div>
  </div>
</template>


<script setup>
import PWAPrompt from '@/components/PWAPrompt.vue';
import { useAuthStore } from '@/stores/auth';
import { onMounted } from 'vue';
const authStore = useAuthStore()

onMounted(() => {
  authStore.currentUser()
    .then(res => console.log('on mounted current user ', res))
})
</script>