<template>
  <div>
    <h1>PROFILE</h1>
    <PVButton label="Logout" :loading="loadingAuth" @click="authStore.logoutUser"></PVButton>

  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useAuthStore } from '@/stores/auth';
const authStore = useAuthStore()

const loadingAuth = computed(() => {
  return authStore.loadingAuth ? true : false
})
</script>