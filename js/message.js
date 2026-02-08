const blueEl = document.querySelector('.js-blue-button');

const image = document.querySelector('.js-pic');

blueEl.addEventListener('click' , () => {
  bluePill();
  
})

function bluePill() {
  if (image.src.endsWith('george-pill.png')) {
    alert('Master I am a good Nigga!!');
    image.src = 'icons/big-yahu-pill.png';
    messageEl.innerHTML = `<p class="message-click">Whats'up Nigga Goyim</p>`
  } else if (image.src.endsWith('big-yahu-pill.png')) {
    alert('Good Goy!!!')
    image.src = 'icons/george-pill.png';
    messageEl.innerHTML = ``
  }
}

const redEl = document.querySelector('.js-red-button');
const audio = document.querySelector('.js-audio');

const blackEl1 = document.querySelector('.js-pill-black-part1');
const blackEl2 = document.querySelector('.js-pill-black-part2');

const titleEl = document.querySelector('.js-title')

const titleSec = document.querySelector('.js-sec-title')

redEl.addEventListener('click', () => {
 redPill();
  messageEl.innerHTML = ``
});

function redPill() {
  audio.volume = 0.5;
 image.src = 'icons/logan-paul.gif';
  audio.play();

  blueEl.style.display = 'none';
  redEl.style.display = 'none';
  blackEl1.style.display = 'none';
  blackEl2.style.display = 'none';

  titleEl.innerHTML = 'Dont StreSS! Dude!!'

  titleSec.innerHTML = 'Be yourSSelf!'

  document.body.style.backgroundImage = 
  "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('icons/wallp.jpg')";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundRepeat = "no-repeat";
};

const messageEl = document.querySelector('.js-message');