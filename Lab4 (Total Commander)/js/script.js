window.onload = function () {
  var i = 0;
  
  var selectedItems = document.querySelectorAll('.tc-items');
  selectedItems[i].classList.add('set');
  this.document.onkeydown = function (e) {
    if (e.keyCode === 39) {
      selectedItems[i].classList.remove('set');
      i = 5;
      selectedItems[i].classList.add('set');
    } else if (e.keyCode === 37) {
      selectedItems[i].classList.remove('set');
      i = 0;
      selectedItems[i].classList.add('set');
    } else if (e.keyCode === 40) {
      if (i != 8) {
        selectedItems[i].classList.remove('set');
        i++;
        selectedItems[i].classList.add('set');
      }

    } else if (e.keyCode === 38) {
      if (i != 0) {
        selectedItems[i].classList.remove('set');
        i--;
        selectedItems[i].classList.add('set');
      }

    }
  };
};