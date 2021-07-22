'use strict';

const day = document.querySelector('.date');
const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const seconds = document.querySelector('.second');

const days = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
];

setInterval(function () {
  const now = new Date();

  day.textContent = days[now.getDay()];
  hour.textContent = now.getHours();
  minute.textContent =
    now.getMinutes() > 9 ? now.getMinutes() : `0${now.getMinutes()}`;
  seconds.textContent =
    now.getSeconds() > 9 ? now.getSeconds() : `0${now.getSeconds()}`;
}, 1000);
