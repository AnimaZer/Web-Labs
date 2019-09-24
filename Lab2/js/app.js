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
    check.classList.add('checkBoxs');
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
      label.classList.toggle('crossed');
      if (document.getElementById('showActive').checked==true)
        showActive.onclick();
      if (document.getElementById('showCompleted').checked==true)
        showCompleted.onclick();
    };

    // TODO: delete task event
    icon.onclick = function (event) {
      event.currentTarget.parentElement.remove();
    };
  };

  var checkAll = document.getElementById('completeAll');
  var labelAll = document.getElementById('crossed');
  var checkBoxs = document.getElementsByClassName('checkBoxs');
  var labels = document.querySelectorAll('.labels');

  completeAll.onclick = function () 
  {
    for (var i=0; i<labels.length; i++){
      labels[i].classList.toggle('crossed');
      checkBoxs[i].checked=checkAll.checked;  
    };
    if (document.getElementById('showActive').checked==true)
      showActive.onclick();
    if (document.getElementById('showCompleted').checked==true)
      showCompleted.onclick();
  };
  
  showAll.onclick = function ()
  {
    for (var i=0; i<labels.length; i++)
    {
      document.getElementsByClassName('new checkbox')[i].style.display = 'block';
    };
  };

  showActive.onclick = function ()
  {
    for (var i=0; i<labels.length; i++)
    {
      if (checkBoxs[i].checked == true)
      {
        document.getElementsByClassName('new checkbox')[i].style.display = 'none';
      } else{
        document.getElementsByClassName('new checkbox')[i].style.display = 'block';
      };
    };
  };

  showCompleted.onclick = function ()
  {
    for (var i=0; i<labels.length; i++)
    {
      if (checkBoxs[i].checked == false)
      {
        document.getElementsByClassName('new checkbox')[i].style.display = 'none';
      } else{
        document.getElementsByClassName('new checkbox')[i].style.display = 'block';
      };
  };
};
};
};
