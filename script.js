const panda = document.getElementById('panda');
const bamboo = document.getElementById('bamboo');
document.addEventListener('keydown', function (event) {
  jump();
})

function jump() {
  if (panda.classList != 'jump') {
    panda.classList.add('jump');
  }
  setTimeout(function () {
    panda.classList.remove('jump')
  }, 800)

}

let isAlive = setInterval(function () {
  let pandaTop = parseInt(window.getComputedStyle(panda).getPropertyValue('top'))
  let bambooLeft = parseInt(window.getComputedStyle(bamboo).getPropertyValue('left'))

  if (bambooLeft < 80 && bambooLeft > 10 && pandaTop >= 450) {
    alert('Game Over!')
  }
}, 50);