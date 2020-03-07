function Song(songName, songDuration) {
  // название, длительность
  this.songName = songName;
  this.songDuration = songDuration;
}

function PlayerList(song) {
  // хранит список песен
  this.songsList = [song];
}

function Player(playerList) {
  var trackNumber = 0;
  this.currentTrack = playerList.songsList[0][0].songName;
  this.status = 'play';
  // this.playerList = playerList;

  this.display = function () {
    return 'Track: ' + this.currentTrack + ' Status: ' + this.status;
  };

  this.play = function () {
    this.status = 'play';
  };

  this.stop = function () {
    this.status = 'stop';
  };

  this.pause = function () {
    this.status = 'pause';
  };

  this.next = function () {
    // TODO
    // songsList
    if (trackNumber != playerList.songsList[0].length - 1) {
      trackNumber++;
    } else {
      trackNumber = 0;
    }
    this.currentTrack = playerList.songsList[0][trackNumber].songName;
  };

  this.prev = function () {
    // TODO
    if (trackNumber != 0) {
      trackNumber--;
    } else {
      trackNumber = playerList.songsList[0].length - 1;
    }
    this.currentTrack = playerList.songsList[0][trackNumber].songName;
  };
}

const playerList = new PlayerList([
  new Song('шаман кинг', 60),
  new Song('жиза', 180),
  new Song('NF', 240),
  new Song('сплин', 210)
]);
const player = new Player(playerList);