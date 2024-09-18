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


const ctx = document.getElementById('maisVendidos').getContext('2d');
const data = {
  labels: ['Big Mac', 'Quarteirão', 'Duplo Bacon', 'Mc Fritas', 'McMelt'],
  datasets: [{
    label: 'Produtos Mais Vendidos',
    data: [35, 20, 15, 10, 5],
    backgroundColor: [
      '#A0522D', // Cor para Big Mac
      '#3CB371', // Cor para Quarteirão
      '#4682B4', // Cor para Duplo Bacon
      '#BEBEBE', // Cor para Mc Fritas
      '#FFD700'  // Cor para McMelt
    ],
    hoverOffset: 4
  }]
};
const options = {
  plugins: {
    legend: {
      position: 'right',
    }
  }
};
const config = {
  type: 'doughnut',
  data: data,
  options: options
};
new Chart(ctx, config);


const ctxRpp = document.getElementById('receitaPorPeriodo').getContext('2d');
const dataRpp = {
  labels: ['Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set'],
  datasets: [
    {
      label: 'Receita Bruta',
      data: [100, 90, 85, 80, 95, 90, 80, 120],
      backgroundColor: '#FF4500', // Cor vermelha para Receita Bruta
      borderWidth: 1
    },
    {
      label: 'Receita líquida',
      data: [70, 50, 60, 20, 40, 30, 40, 100],
      backgroundColor: '#FFD700', // Cor dourada para Receita Líquida
      borderWidth: 1
    }
  ]
};
const optionsRpp = {
  scales: {
    y: {
      beginAtZero: true
    }
  },
  plugins: {
    legend: {
      position: 'top',
      labels: {
        boxWidth: 20
      }
    }
  }
};
const configRpp = {
  type: 'bar',
  data: dataRpp,
  options: optionsRpp
};
new Chart(ctxRpp, configRpp);