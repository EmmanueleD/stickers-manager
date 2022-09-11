<template>
  <div>

    <PVCard id="piePerc" class="mb-4 pb-4">
      <template #content>
        <PVChart type="pie" :data="pieData" :options="pieOptions"></PVChart>
      </template>
    </PVCard>


    <PVChart class="mt-4 pt-4" type="pie" :data="pieData" :options="pieWhiteOptions"></PVChart>



  </div>
</template>

<script setup>
import { ref } from 'vue';

const pieData = ref({
  labels: ['COMPLETED', 'TOTAL'],
  datasets: [
    {
      data: [50, 300],
      backgroundColor: ["#66BB6A", "#42A5F5"],
      hoverBackgroundColor: ["#64B5F6", "#81C784"],
      cutout: '50%'
    }
  ]
});

const pieOptions = ref({
  plugins: {
    legend: {
      display: false,
      labels: {
        color: '#FFFFFF'
      }
    },
    title: {
      display: true,
      text: 'Perc Completed',
      color: '#000000',
      font: {
        family: '"Homenaje", sans-serif',
        size: 35
      }
    }
  }
});

const pieWhiteOptions = ref({
  plugins: {
    legend: {
      display: false,
      labels: {
        color: '#FFFFFF'
      }
    },
    title: {
      display: true,
      text: 'Perc Completed',
      color: '#ffffff',
      font: {
        family: '"Homenaje", sans-serif',
        size: 35
      }
    }
  }
});
</script>