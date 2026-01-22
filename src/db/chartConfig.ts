import type { ChartData, ChartOptions } from 'chart.js'
export const data: ChartData<'line'> = {
  labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  datasets: [
    {
      label: 'Task',
      data: [0, 2, 1, 2.5, 1.5, 2, 1.6],
      backgroundColor: '#141522',
      borderColor: '#141522',
      pointRadius: 0,
      pointHoverRadius: 6,
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#546FFF',
      pointHoverBorderWidth: 3,
      fill: false,
    },
  ],
}

export const options: ChartOptions<'line'> = {
  maintainAspectRatio: false,
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  scales: {
    x: {
      grid: {
        display: true,
        color: '#F5F5F7',
      },
      border: {
        display: false,
      },
      ticks: {
        color: '#141522',
        font: {
          size: 12,
          weight: 500,
        },
        padding: 8,
      },
    },
    y: {
      min: 0,
      // max: 3,
      ticks: {
        stepSize: 1,
        color: '#141522',
        font: {
          size: 12,
          weight: 500,
        },
        padding: 12,
        callback: function (tickValue: string | number) {
          return typeof tickValue === 'number' ? tickValue : parseFloat(tickValue)
        },
      },
      grid: {
        display: false,
        color: '#E5E7EB',
      },
      border: {
        display: false,
      },
    },
  },
  elements: {
    line: {
      tension: 0.4,
      borderWidth: 3,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
      backgroundColor: '#141522',
      titleColor: '#FFFFFF',
      bodyColor: '#FFFFFF',
      padding: 12,
      borderColor: '#141522',
      borderWidth: 1,
      displayColors: false,
      cornerRadius: 10,
      caretSize: 6,
      caretPadding: 10,
      titleFont: {
        size: 0, // Hide title
      },
      bodyFont: {
        size: 14,
        weight: 'bolder',
      },
      callbacks: {
        title: function () {
          return '' // Hide title
        },
        label: function (context) {
          return `${context.parsed.y} Task`
        },
      },
    },
  },
}
