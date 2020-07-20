var $audio = $('#audio');
var $audioPlayer = $('#audio-player');

$audioPlayer.on('mouseenter focus', function () {
  $audio.get(0).play();
});

var user = document.getElementById("user").value

document.getElementById("frontText").innerText( user + " كسم")
/*$audioPlayer.on('mouseleave blur', function () {
  $audio.get(0).pause();
});*/