<template>
  <div class="fullpage">
    <!-- <PVCard id="piePerc" class="mb-4 pb-4">
      <template #content>
        <PVChart type="pie" :data="pieData" :options="pieOptions"></PVChart>
      </template>
    </PVCard> -->
    <div class="pie-title grid-center">
      <h3>% COMPLETED</h3>
    </div>
    <div class="pie-container mb-4">
      <PVChart type="pie" :data="pieData" :options="pieOptions"></PVChart>
      <div class="perc-number">
        <h4>26%</h4>
      </div>
    </div>
    <div class="carousel-container">

      <PVCarousel :value="carouselData" :numVisible="1" :numScroll="1" :responsiveOptions="responsiveOptions">
        <template #item="data">
          <h3 style="text-align: center">{{data.data.name}}</h3>
          <div class="ranking-list">

            <div v-if="data.data.name == 'TEAMS'">
              <div class="grid mb-4" v-for="item in data.data.ranking" :key="item.name">

                <div class="col-3">
                  <img style="width: 50px" src="../assets/images/flags/italy.png" alt="">
                </div>
                <div class="col-4 grid-center">
                  {{ item.name }}
                </div>
                <div class="col-5 pt-4">
                  <PVProgressBar :value="item.perc" :showValue="false"></PVProgressBar>
                </div>
              </div>
            </div>
            <div v-if="data.data.name == 'STICKERS'">
              <div class="grid mb-4" v-for="(item, index) in data.data.ranking" :key="item.name">

                <div class="col-1 pt-4">
                  <h3>{{ index }}</h3>
                </div>
                <div class="col-6 grid-center">
                  {{ item.name }}
                </div>
                <div class="col-5 pt-4">
                  <PVProgressBar :value="item.perc" :showValue="false"></PVProgressBar>
                </div>
              </div>
            </div>
          </div>
        </template>
      </PVCarousel>
    </div>
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
  }
});


const carouselData = ref(
  [
    {
      name: 'TEAMS',
      ranking: [
        {
          name: 'team 1',
          perc: 30
        },
        {
          name: 'team 2',
          perc: 20
        },
        {
          name: 'team 3',
          perc: 5
        },
        {
          name: 'team 4',
          perc: 1
        },
        {
          name: 'team 1',
          perc: 30
        },
        {
          name: 'team 2',
          perc: 20
        },
        {
          name: 'team 3',
          perc: 5
        },
        {
          name: 'team 4',
          perc: 1
        },
        {
          name: 'team 1',
          perc: 30
        },
        {
          name: 'team 2',
          perc: 20
        },
        {
          name: 'team 3',
          perc: 5
        },
        {
          name: 'team 4',
          perc: 1
        },
      ]
    },
    {
      name: 'STICKERS',
      ranking: [
        {
          name: 'sticker 1',
          perc: 13
        },
        {
          name: 'sticker 2',
          perc: 10
        },
        {
          name: 'stiker 3',
          perc: 5
        },
        {
          name: 'sticker 4',
          perc: 4
        },
        {
          name: 'sticker 1',
          perc: 13
        },
        {
          name: 'sticker 2',
          perc: 10
        },
        {
          name: 'stiker 3',
          perc: 5
        },
        {
          name: 'sticker 4',
          perc: 4
        },
        {
          name: 'sticker 1',
          perc: 13
        },
        {
          name: 'sticker 2',
          perc: 10
        },
        {
          name: 'stiker 3',
          perc: 5
        },
        {
          name: 'sticker 4',
          perc: 4
        },
        {
          name: 'sticker 1',
          perc: 13
        },
        {
          name: 'sticker 2',
          perc: 10
        },
        {
          name: 'stiker 3',
          perc: 5
        },
        {
          name: 'sticker 4',
          perc: 4
        },
        {
          name: 'sticker 1',
          perc: 13
        },
        {
          name: 'sticker 2',
          perc: 10
        },
        {
          name: 'stiker 3',
          perc: 5
        },
        {
          name: 'sticker 4',
          perc: 4
        },
        {
          name: 'sticker 1',
          perc: 13
        },
        {
          name: 'sticker 2',
          perc: 10
        },
        {
          name: 'stiker 3',
          perc: 5
        },
        {
          name: 'sticker 4',
          perc: 4
        },
      ]
    }
  ]
)

const responsiveOptions = [

  {
    breakpoint: '3500px',
    numVisible: 2,
    numScroll: 2
  },
  {
    breakpoint: '700px',
    numVisible: 1,
    numScroll: 1
  }
]

</script>