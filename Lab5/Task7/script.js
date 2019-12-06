function gameStart() {
  var flag = {
    value: true
  };

  var sovietTank = {
    name: 'Object-260',
    health: 100,
    currentCoordinates: {
      x: 10,
      y: 20
    },
    shot: function (x, y) {
      console.log(x, y);
    },
    spawn: function (areaSize) {
      this.currentCoordinates.x = Math.floor(Math.random() * 10);
      this.currentCoordinates.y = Math.floor(Math.random() * 10);
      console.log(this.name + ' spawned in coordinates: (' + this.currentCoordinates.x + '; ' + this.currentCoordinates.y + ');');
    }
  };

  var germanTank = {
    name: 'Leopard',
    health: 100,
    currentCoordinates: {
      x: 10,
      y: 20
    },
    shot: function (x, y) {
      console.log(x, y);
    },
    spawn: function () {
      this.currentCoordinates.x = Math.floor(Math.random() * 10);
      this.currentCoordinates.y = Math.floor(Math.random() * 10);
      console.log(this.name + ' spawned in coordinates: (' + this.currentCoordinates.x + '; ' + this.currentCoordinates.y + ');');
    }
  };

  sovietTank.spawn();
  germanTank.spawn();
  if (germanTank.currentCoordinates.x === sovietTank.currentCoordinates.x ||
    germanTank.currentCoordinates.y === sovietTank.currentCoordinates.y) {
    germanTank.spawn();
  }

  setInterval(function () {
    if (sovietTank.health > 0 && germanTank.health > 0) {
      var shotCoordintaes = soldier1.shot();
      // soldier2.feel(shotCoordintaes);

      // soldier2.shot();
      // soldier1.feel();




      var shotX = Math.floor(Math.random() * 10);
      var shotY = Math.floor(Math.random() * 10);

      sovietTank.shot(shotX, shotY);
      if (shotX === germanTank.currentCoordinates.x &&
        shotY === germanTank.currentCoordinates.y) {
        console.log('Есть пробитие!');
        germanTank.health -= 25;
        console.log('Здоровье ' + germanTank.name + ' = ' + germanTank.health + ' HP');
      } else {
        console.log('Броня не пробита');
      }

      germanTank.shot(shotX, shotY);
      if (shotX === sovietTank.currentCoordinates.x &&
        shotY === sovietTank.currentCoordinates.y) {
        console.log('Есть пробитие!');
        sovietTank.health -= 25;
        console.log('Здоровье ' + sovietTank.name + ' = ' + sovietTank.health + ' HP');
      } else {
        console.log('Броня не пробита');
      }
    }

    if (sovietTank.health === 0 && flag.value) {
      console.log(germanTank.name + ' is champion!');
      console.log(sovietTank.name + ' is loser');
      flag.value = false;
    } else if (germanTank.health === 0 && flag.value) {
      console.log(sovietTank.name + ' is champion!');
      console.log(germanTank.name + ' is loser');
      flag.value = false;
    }
  }, 50);
}