export const chartOptions = {
  animation: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    x: {
      max: 1000,
      // ticks: {
      //   callback: (value) => `${value / 100} m`,
      // },
    },
    y: {
      max: 1000,
      ticks: {
        callback: (value) => `${value / 1}`,
      },
    },
  },
};

export const data = [
  { year: 0, count: 150 },
  { year: 1, count: 150 },
  { year: 2, count: 200 },
  { year: 3, count: 165 },
  { year: 4, count: 725 },
  { year: 5, count: 522 },
  { year: 6, count: 350 },
  { year: 7, count: 28 },
  { year: 8, count: 128 },
  { year: 9, count: 280 },
];

export const data1 = [
  { year: 0, count: 317 },
  { year: 1, count: 317 },
  { year: 2, count: 217 },
  { year: 3, count: 717 },
  { year: 4, count: 912 },
  { year: 5, count: 460 },
  { year: 6, count: 434 },
  { year: 7, count: 221 },
  { year: 8, count: 300 },
  { year: 9, count: 890 },
];
