<template>
  <div class="fullpage base-bg pt-5">
    <h1 class="mt-5 mb-5">LOGIN</h1>
    <PVCard class="shadow-5">
      <template #header>
        <div class=" flex flex-column align-items-center mt-4 pt-4">
          <img style="width:50%" src="../assets/logo.png" alt="">
          <h5>Stickers Manager</h5>
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
              <PVPassword :feedback="false" toggleMask type="password" v-model="password"></PVPassword>
            </div>
            <div class="grid-center">
              <PVButton type="submit" class="sm-primary" label="Login" :loading="loadingLogin"></PVButton>
            </div>
          </form>
        </div>
      </template>
    </PVCard>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
const authStore = useAuthStore()

const email = ref('')
const password = ref('')
const loadingLogin = ref(false)

async function handleSubmit() {
  if (!email.value || password.value.length < 6) {
    return alert('Please fill the form correctly')
  }
  await authStore.loginUser(email.value, password.value)
}
</script>