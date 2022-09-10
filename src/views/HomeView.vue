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
          <div @click="showSidebar(nation)" v-for="nation of group.items" :key="nation.name"
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
  <PVSidebar @hide="hideSidebar" v-model:visible="sidebarVisible" :baseZIndex="10000" position="right"
    class="p-sidebar-lg">

    <div class="flex flex-wrap align-items-center justify-content-between">
      <img :src="require('@/assets/images/flags/'+sidebarData.name+'.png')" class="mr-4">
      <h1 class="mt-4">{{sidebarData.name.toUpperCase()}}</h1>
    </div>
    <div class="grid mb-4" v-for="item in sidebarData.items" :key="item.number">
      <div class=" grid-center col-2 ">
        <h4 style="margin:0">{{ item.number }}</h4>
      </div>
      <div class="grid-center col-4 ">
        <PVInputNumber min="0" v-model="value17" showButtons buttonLayout="horizontal" />
      </div>
      <div class="grid-center col-6 ">
        <PVInputSwitch v-model="checked2" />
      </div>

      <!-- <div class="flex align-items-end justify-content-start col-12 ">
        <h4 style="margin:0" class="mb-1 mr-4">{{ item.number }}</h4>
        <PVInputNumber class="mr-4" min="0" v-model="value17" showButtons buttonLayout="horizontal" />
        <PVInputSwitch class="mb-1 mr-4" v-model="checked2" />
      </div> -->
    </div>
  </PVSidebar>
</template>


<script setup>
import { ref, computed } from 'vue';
import baseAlbum from '../utils/albumModel'
import PWAPrompt from '@/components/PWAPrompt.vue';
import { useAuthStore } from '@/stores/auth';
import { onMounted } from 'vue';
const authStore = useAuthStore()

onMounted(() => {
  authStore.currentUser()
    .then(res => console.log('on mounted current user ', res))
})

// AUTH FEATURES
const loadingAuth = computed(() => {
  return authStore.loadingAuth ? true : false
})

// SIDEBAR SETTINGS AND BEHAVIOR
const sidebarVisible = ref(false)
const sidebarData = ref({})

function showSidebar(e) {
  console.log("🚀 ~ file: HomeView.vue ~ line 54 ~ showSidebar ~ e", e)
  sidebarData.value = { ...e }
  sidebarVisible.value = true
}

function hideSidebar() {
  sidebarVisible.value = false
  sidebarData.value = {}
}

const value17 = ref()
const checked2 = ref(true)
</script>