<template>
  <PVMessage v-if='!authStore.emailVerified' severity="warn">It seems you didn't verify your email, maybe check
    on your spam folder, Thank you!
  </PVMessage>
  <PWAPrompt></PWAPrompt>
  <div class="fullpage">
    <div class="content dark-bg">
      <div v-for="(group, i) in baseAlbum" :key="i" class="flex flex-column align-items-center mb-4 pt-4">
        <h3>Group {{group.group.toUpperCase()}}</h3>
        <div class="grid mb-4">
          <div v-for="nation of group.items" :key="nation.name"
            class="hover-elevation-2 role-button col-6 md:col-3 grid-center ">
            <img :src="require('@/assets/images/flags/'+nation.name+'.png')">
            <h5>{{ nation.name.toUpperCase() }}</h5>
          </div>
        </div>
      </div>
    </div>
    <div class="firma">
      <a href="https://www.emmd.dev"><img src="../assets/emmd_logo.gif"></a>
      <PVButton label="Logout" :loading="loadingAuth" @click="authStore.logoutUser"></PVButton>
    </div>
  </div>
</template>


<script setup>
import { computed } from 'vue';
import baseAlbum from '../utils/albumModel'
import PWAPrompt from '@/components/PWAPrompt.vue';
import { useAuthStore } from '@/stores/auth';
import { onMounted } from 'vue';
const authStore = useAuthStore()

onMounted(() => {
  authStore.currentUser()
    .then(res => console.log('on mounted current user ', res))
})

const loadingAuth = computed(() => {
  return authStore.loadingAuth ? true : false
})
</script>