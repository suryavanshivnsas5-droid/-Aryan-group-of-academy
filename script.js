function showSection(sectionId) {
  let sections = document.querySelectorAll('.content');
  sections.forEach(sec => sec.style.display = 'none');
  document.getElementById(sectionId).style.display = 'block';
}

function playRhyme(rhyme) {
  let text = '';
  if (rhyme === 'twinkle') {
    text = 'Twinkle, twinkle, little star...';
  } else {
    text = 'Humpty Dumpty sat on a wall...';
  }
  document.getElementById('rhymeText').innerText = text;
}

function mathGame() {
  let a = Math.floor(Math.random() * 10);
  let b = Math.floor(Math.random() * 10);
  let answer = prompt('What is ' + a + ' + ' + b + '?');
  if (parseInt(answer) === a + b) {
    document.getElementById('gameResult').innerText = '✅ Correct! Star earned ⭐';
  } else {
    document.getElementById('gameResult').innerText = '❌ Try again!';
  }
}

function wordGame() {
  document.getElementById('gameResult').innerText =
    'Make a word using letters: L E A R N';
}