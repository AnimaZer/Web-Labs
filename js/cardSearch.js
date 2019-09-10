function cardSearch() {
  var searchValue = document.getElementById('search').value;
  var card = document.getElementsByClassName('column');
  var cardContent = document.getElementsByClassName('content');
  var cardLen = cardContent.length;

  for (var i = 0; i < cardLen; i++) {
    var cardText = cardContent[i].innerText.toLowerCase();
    var searchValue = searchValue.toLowerCase();

    if (searchValue !== null)
      if (cardText.indexOf(searchValue) !== -1)
        card[i].style.display = 'block';
      else card[i].style.display = 'none';
  }

}