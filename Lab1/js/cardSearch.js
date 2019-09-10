function cardSearch() {
  var searchValue = document.getElementById('search').value;
  var cardsItem = document.getElementsByClassName('column');
  var cardsContent = document.getElementsByClassName('content');
  var cardLen = cardsContent.length;

  for (var i = 0; i < cardLen; i++) {
    var cardText = cardsContent[i].innerText.toLowerCase();
    var searchValue = searchValue.toLowerCase();

    if (cardText.indexOf(searchValue) !== -1) {
      cardsItem[i].style.display = 'block';
    } else { cardsItem[i].style.display = 'none'; }
  }
}