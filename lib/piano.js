'use strict';

var getClick = require('nv14-click-track');

var piano = {
  play: function playPiano(song) {
    var click = getClick(song.name);
    click.on('tick', function (position) {
      sendMessage(song.piano, position);
    });
  }
}

function sendMessage(songData, position) {
  for (var i = 0; i < songData.length; i++) {
    var data = songData[i];
    if (data.measure === position.measure && data.beat === position.beat) {
      console.log('Piano: ' + data.message);
    }
  }
}

module.exports = piano;