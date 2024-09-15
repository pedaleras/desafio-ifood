/* globals Chart:false */

(() => {
  'use strict'

  // Graphs
  const ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        'Jan',
        'Fev',
        'Mar',
        'Abr',
        'Mai',
        'Jun',
        'Jul',
        'Ago',
        'Set',
        'Out',
        'Nov',
        'Dez',
      ],
      datasets: [{
        data: [
          20,
          50,
          60,
          40,
          55,
          70,
          77,
          80,
          100,
          75,
          95,
          120
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#ea1e2c',
        borderWidth: 4,
        pointBackgroundColor: '#ea1e2c'
      }]
    },
    options: {
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          boxPadding: 3
        }
      }
    }
  })
})()
