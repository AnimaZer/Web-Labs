function shotDamage() {
  return Math.floor(15 + Math.random() * (15));
}

var flag = {
  value: true,
  shot: false,
  x1: 0,
  y1: 0,
  x2: 0,
  y2: 0,
};

var sovietTank = {
  name: 'Object-260',
  health: 100,
  spawnCoordinates: {
    x: 0,
    y: 0,
  },
  shotCoordinates: {
    x: 0,
    y: 0,
  },
  spawn: function () {
    flag.x1 = this.spawnCoordinates.x = Math.floor(Math.random() * 10);
    flag.y1 = this.spawnCoordinates.y = Math.floor(Math.random() * 10);
    return (this.name + ' spawned in coordinates: (' + this.spawnCoordinates.x + '; ' + this.spawnCoordinates.y + ');');
  },
  shot: function () {
    flag.shot = false;
    this.shotCoordinates.x = Math.floor(Math.random() * 10);
    this.shotCoordinates.y = Math.floor(Math.random() * 10);
    if (this.shotCoordinates.x === flag.x2 && this.shotCoordinates.y === flag.y2) {
      flag.shot = true;
    }
    return (this.name + ' shotted in coordinates: (' + this.shotCoordinates.x + '; ' + this.shotCoordinates.y + ');');
  },
  reception: function () {
    this.health -= shotDamage();
    return (this.name + ' HP = ' + this.health + 'HP');
  }
};

var germanTank = {
  name: 'Leopard',
  health: 100,
  spawnCoordinates: {
    x: 0,
    y: 0,
  },
  shotCoordinates: {
    x: 0,
    y: 0,
  },
  spawn: function () {
    flag.x2 = this.spawnCoordinates.x = Math.floor(Math.random() * 10);
    flag.y2 = this.spawnCoordinates.y = Math.floor(Math.random() * 10);
    return (this.name + ' spawned in coordinates: (' + this.spawnCoordinates.x + '; ' + this.spawnCoordinates.y + ');');
  },
  shot: function () {
    flag.shot = false;
    this.shotCoordinates.x = Math.floor(Math.random() * 10);
    this.shotCoordinates.y = Math.floor(Math.random() * 10);
    if (this.shotCoordinates.x === flag.x1 && this.shotCoordinates.y === flag.y1) {
      flag.shot = true;
    }
    return (this.name + ' shotted in coordinates: (' + this.shotCoordinates.x + '; ' + this.shotCoordinates.y + ');');
  },
  reception: function () {
    this.health -= shotDamage();
    return (this.name + ' HP = ' + this.health + 'HP');
  }
};

console.log(sovietTank.spawn());
console.log(germanTank.spawn());
if (germanTank.spawnCoordinates.x === sovietTank.spawnCoordinates.x &&
  germanTank.spawnCoordinates.y === sovietTank.spawnCoordinates.y) {
  console.log(germanTank.spawn());
}

setInterval(function () {
  if (sovietTank.health > 0 && germanTank.health > 0) {
    if (sovietTank.health > 0) {
      console.log(sovietTank.shot());
      if (flag.shot) {
        console.log(germanTank.reception());
      }
    }
    if (germanTank.health > 0) {
      console.log(germanTank.shot());
      if (flag.shot) {
        console.log(sovietTank.reception());
      }
    }
  }


  if (sovietTank.health <= 0 && flag.value) {
    console.log(germanTank.name + ' is champion!');
    console.log(sovietTank.name + ' is loser');
    flag.value = false;
  } else if (germanTank.health <= 0 && flag.value) {
    console.log(sovietTank.name + ' is champion!');
    console.log(germanTank.name + ' is loser');
    flag.value = false;
  }
}, 30);