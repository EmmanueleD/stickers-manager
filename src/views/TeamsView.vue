<template>
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
      <div class="grid-center col-5 ">
        <PVInputNumber @input="item.totOwned = $event.value" v-model="item.owned" showButtons
          buttonLayout="horizontal" />
      </div>
      <div class="flex justify-content-end col-4 ">
        <PVInputSwitch v-model="item.consider" />
      </div>
    </div>
  </PVSidebar>
</template>


<script setup>
import { ref } from 'vue';
import { useAlbumStore } from '@/stores/album';
// import baseAlbum from '../utils/albumModel'
const albumStore = useAlbumStore()
const baseAlbum = albumStore.album

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

// function ownedInput(event) {
//   albumStore.album
// }

</script>