const panda = document.getElementById('panda');
const bamboo = document.getElementById('bamboo');
const body = document.querySelector('body');
const game = document.querySelector('.game');


document.addEventListener('keydown', function (event) {
  panda.classList.add('jump');
  setTimeout(function () {
    panda.classList.remove('jump')
  }, 500)
})

let isAlive = setInterval(function () {
  let pandaTop = parseInt(window.getComputedStyle(panda).getPropertyValue('top'))
  let bambooLeft = parseInt(window.getComputedStyle(bamboo).getPropertyValue('left'))

  if (bambooLeft < 80 && bambooLeft > 10 && pandaTop >= 300) {

    bamboo.style.animation = 'none'
    bamboo.style.left = '80px'
    panda.classList.remove('swing')

    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = '<h1>Game over!!</h1>'
    game.append(modal);

  }
}, 10);
