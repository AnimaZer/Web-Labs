window.onload = function () {
  var itemIndex = {
    count: 0
  };
  var selectedItems = document.querySelectorAll('.total-commander-item');
  selectedItems[itemIndex.count].classList.add('set');
  this.document.onkeydown = function (e) {
    if (e.keyCode === 39) {
      selectedItems[itemIndex.count].classList.remove('set');
      itemIndex.count = 5;
      selectedItems[itemIndex.count].classList.add('set');
    } else if (e.keyCode === 37) {
      selectedItems[itemIndex.count].classList.remove('set');
      itemIndex.count = 0;
      selectedItems[itemIndex.count].classList.add('set');
    } else if (e.keyCode === 40) {
      if (itemIndex.count != selectedItems.length-1) {
        selectedItems[itemIndex.count].classList.remove('set');
        itemIndex.count++;
        selectedItems[itemIndex.count].classList.add('set');
      }

    } else if (e.keyCode === 38) {
      if (itemIndex.count != 0) {
        selectedItems[itemIndex.count].classList.remove('set');
        itemIndex.count--;
        selectedItems[itemIndex.count].classList.add('set');
      }

    }
  };
};