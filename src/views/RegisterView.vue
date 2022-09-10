<template>
  <div class="fullpage base-bg pt-5 pb-5">
    <h1 class="mt-5 mb-5">SIGN UP</h1>
    <PVCard class="shadow-5">
      <template #header>
        <div class=" flex flex-column align-items-center mt-4 pt-4">
          <img style="width:50%" src="../assets/logo.png" alt="">
          <h3>Stickers Manager</h3>
        </div>
      </template>
      <template #content>
        <div class="card card-login">
          <form @submit.prevent="handleSubmit">
            <div class="mb-4  flex flex-column">
              <label for="username">Email</label>
              <PVInputText type="email" v-model="email"></PVInputText>
            </div>
            <div class="mb-4 flex flex-column">
              <label for="username">Password</label>
              <PVPassword toggleMask v-model="password"></PVPassword>
            </div>
            <div class="grid-center">
              <PVButton type="submit" label="Register" :loading="loadingLogin"></PVButton>
            </div>
          </form>
        </div>
        <p class="mt-4">Already have an account? <router-link to="/login">Log in</router-link>
        </p>
      </template>
    </PVCard>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useAuthStore } from '@/stores/auth';
const authStore = useAuthStore()

const email = ref('')
const password = ref('')
const loadingLogin = computed(() => {
  return authStore.loadingAuth ? true : false
})

async function handleSubmit() {
  if (!email.value || password.value.length < 6) {
    return alert('Password should have more then 6 characters')
  }
  await authStore.registerUser(email.value, password.value)
}
</script>