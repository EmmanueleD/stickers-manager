<template>
  <div class="fullpage dark-bg">
    <PVMessage v-if='!authStore.emailVerified' severity="warn">It seems you didn't verify your email, maybe check
      on your spam folder, Thank you!
    </PVMessage>
    <PWAPrompt></PWAPrompt>
    <HeaderLayout></HeaderLayout>
    <div class="router-view">
      <router-view>
      </router-view>
    </div>
    <FooterLayout></FooterLayout>
  </div>

</template>

<script setup>
import { onMounted } from 'vue';
import { useAuthStore } from '@/stores/auth';
import PWAPrompt from '@/components/PWAPrompt.vue';
import HeaderLayout from './HeaderLayout.vue';
import FooterLayout from './FooterLayout.vue';
const authStore = useAuthStore()

onMounted(() => {
  authStore.currentUser()
    .then(res => console.log('on mounted current user ', res))
})
</script>