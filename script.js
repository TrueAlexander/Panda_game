const panda = document.getElementById('panda');
const bamboo = document.getElementById('bamboo');
const cloud1 = document.getElementById('cloud1');
const cloud2 = document.getElementById('cloud2');
const body = document.querySelector('body');
const game = document.querySelector('.game');
const btnUp = document.querySelector('.up-btn');

document.addEventListener('keydown', function (event) {
  panda.classList.add('jump');
  setTimeout(function () {
    panda.classList.remove('jump')
  }, 500)
})

btnUp.addEventListener('click', () => {
  panda.classList.add('jump');
  setTimeout(function () {
    panda.classList.remove('jump')
  }, 500)
})

let isAlive = setInterval(function () {
  let pandaTop = parseInt(window.getComputedStyle(panda).getPropertyValue('top'))
  let bambooLeft = parseInt(window.getComputedStyle(bamboo).getPropertyValue('left'))

  if (bambooLeft < 80 && bambooLeft > 10 && pandaTop >= 100) {

    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = '<h1>Game over!!</h1><button class="btn restart-btn" type="button">Restart</button>'
    game.append(modal);

    bamboo.style.animation = 'none'
    bamboo.style.left = '80px'
    panda.classList.remove('swing')

    cloud1.style.opacity = '0'
    cloud2.style.opacity = '0'
    const btnRestart = modal.querySelector('.btn');
    btnUp.disabled = 'true'
    console.dir(btnUp);

    btnRestart.addEventListener('click', () => {
      window.location.reload()
    })


  }
}, 10);
