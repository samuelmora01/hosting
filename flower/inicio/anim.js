
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");


var lyricsData = [
  {  time: 15 },
  {  time: 18 },
  {  time: 27 },
  { time: 32 },
  { time: 33 },
  { time: 41 },
  { time:47},
  { time: 54 },
  { time: 59 },
  { time: 67 },
  { time: 72 },
  {time: 78 },
  {time: 83 },
  {time: 91 },
  { time: 97 },
  {time: 104 },
  { time: 108 },
  {time: 144 },
  { time: 148 },
  { time: 153 },
  { time: 158 },
  { time: 164 },
  { time: 169 },
  { time: 176 },
  { time: 183 },
  { time: 188 },
  { time: 140 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
  
    var fadeInDuration = 0.1;
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {

    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);


function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; 
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); 
}


setTimeout(ocultarTitulo, 216000);