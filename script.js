'use strict';

// Elements
const Deaths = document.querySelector('.Deaths');
const Coronavirus = document.querySelector('.Coronavirus');
const Recovered = document.querySelector('.Recovered');

fetch('https://corona.lmao.ninja/v2/continents?yesterday=true&sort')
  .then(response => response.json())
  .then(data => {
    // Number Format
    let NumberFormat = new Intl.NumberFormat();

    /*Deaths*/
    const deathflatMap = data.flatMap(data => data['deaths']);
    const reduceDeath = deathflatMap.reduce((cur, sum) => cur + sum, 0);
    Deaths.textContent = NumberFormat.format(reduceDeath);

    /*Recovered*/
    const RecoveredflatMap = data.flatMap(data => data['recovered']);
    const reduceRecovered = RecoveredflatMap.reduce((sum, cur) => sum + cur, 0);
    Recovered.textContent = NumberFormat.format(reduceRecovered);

    /*Coronavirus*/
    const CoronavirusflatMap = data.flatMap(data => data['active']);
    const reduceCoronavirus = CoronavirusflatMap.reduce(
      (sum, cur) => sum + cur,
      0
    );

    Coronavirus.textContent = NumberFormat.format(reduceCoronavirus);
  });
