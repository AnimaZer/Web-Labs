window.onload = function () {
  var btn = document.getElementById('button');
  var txtArea = document.getElementById('textarea');

  btn.onclick = function () {
    // add element to UI
    if(document.getElementById('textarea').value !== ''){
    var taskContent = txtArea.value;
    var containerToDo = document.getElementById('container-to-do');
    var newTask = document.createElement('div');
    newTask.classList.add('new', 'checkbox');
    containerToDo.append(newTask);
    var label = document.createElement('label');
    var check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
    check.classList.add('checkbox');
    label.classList.add('labels');
    label.append(check);
    newTask.append(label);
    var text = document.createTextNode(taskContent);
    label.append(text);
    var icon = document.createElement('i');
    icon.classList.add('glyphicon', 'glyphicon-trash', 'icon', 'remove-card');
    newTask.append(icon);
    txtArea.value = '';

    // register events here:

    // complete task
    // TODO: labeled - not valid name for CSS and context
    check.onclick = function () {
      label.classList.toggle('labeled');
    };

    // TODO: delete task event
    icon.onclick = function (event) {
      event.currentTarget.parentElement.remove();
    };
  };

  completeAll.onclick = function () {
    var checkAll = document.getElementById('completeAll');
    var checkbox = document.getElementsByClassName('checkbox');
    var labels = document.querySelectorAll('.labels');

    for (var i=0; i<labels.length; i++){
      labels[i].classList.toggle('labeled');
      checkbox[i].checked=checkAll.checked;  
    };


  } 
};

};