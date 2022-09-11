<!-- PWAPrompt.vue -->
<template>
  <PVDialog v-if="shown">
    <h2>Add app to home screen?</h2>
    <PVButton @click="installPWA" label="Install"></PVButton>
    <PVButton @click="dismissPrompt" label="No thanks"></PVButton>
  </PVDialog>
</template>

<script>
export default {
  data: () => ({
    shown: false,
  }),

  beforeMount() {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault()
      this.installEvent = e
      this.shown = true
    })
  },

  methods: {
    dismissPrompt() {
      this.shown = false
    },

    installPWA() {
      this.installEvent.prompt()
      this.installEvent.userChoice.then((choice) => {
        this.dismissPrompt() // Hide the prompt once the user's clicked
        if (choice.outcome === 'accepted') {
          // Do something additional if the user chose to install
        } else {
          // Do something additional if the user declined
        }
      })
    },
  }
}
</script>