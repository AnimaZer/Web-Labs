window.onload = function () {
  var itemIndex = 0; 
  var selectedItems = document.querySelectorAll('.tc-items');
  selectedItems[itemIndex].classList.add('set');
  this.document.onkeydown = function (e) {
    if (e.keyCode === 39) {
      selectedItems[itemIndex].classList.remove('set');
      itemIndex = 5;
      selectedItems[itemIndex].classList.add('set');
    } else if (e.keyCode === 37) {
      selectedItems[itemIndex].classList.remove('set');
      itemIndex = 0;
      selectedItems[itemIndex].classList.add('set');
    } else if (e.keyCode === 40) {
      if (itemIndex != 8) {
        selectedItems[itemIndex].classList.remove('set');
        itemIndex++;
        selectedItems[itemIndex].classList.add('set');
      }

    } else if (e.keyCode === 38) {
      if (itemIndex != 0) {
        selectedItems[itemIndex].classList.remove('set');
        itemIndex--;
        selectedItems[itemIndex].classList.add('set');
      }

    }
  };
};