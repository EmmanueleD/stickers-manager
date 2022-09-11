<template>
  <div class="header ">
    <!-- <div class="grid">
      <div class="col-12 grid-center py-3">
        <span class="logo-font">STICKERS MANAGER</span>
      </div>
    </div> -->
    <div class="header-container w-100">
      <div class="grid w-100">
        <!-- <div class="col-2 grid-center">
        <img src="../../assets/logo.png" style="width:100%">
      </div> -->
        <div class="col-5 grid-center">
          <span class="router-link" :class="router.currentRoute.value.path == '/'? 'active': null"
            @click="$router.push('/')">TEAMS</span>
        </div>
        <div class="col-5 grid-center">
          <span class="router-link" :class="router.currentRoute.value.path == '/statistics'? 'active': null"
            @click="$router.push('/statistics')">STATS</span>
        </div>
        <div class=" router-link col-2 grid-center">
          <i @click="authStore.logoutUser" class="pi pi-fw pi-sign-out"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth';
const authStore = useAuthStore()
const router = useRouter()
</script> 