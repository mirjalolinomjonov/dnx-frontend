<script lang="ts">
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line as LineChart } from 'vue-chartjs'
import * as chartConfig from '@/db/chartConfig'
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export default {
  name: 'TaskLineChart',
  components: {
    LineChart,
  },
  data() {
    return chartConfig
  },
}
</script>

<template>
  <Card class="bg-secondary-light! p-5!">
    <div class="flex-center-between mb-5">
      <h3 class="title text-secondary-500">Activity</h3>
      <select class="text text-secondary-500 outline-none">
        <option value="">Prev Week</option>
        <option value="">This Week</option>
        <option value="">Next Week</option>
      </select>
    </div>
    <div class="bg-white rounded-base h-32.5">
      <LineChart :data="data" :options="options" />
    </div>
  </Card>
</template>

<style scoped></style>
