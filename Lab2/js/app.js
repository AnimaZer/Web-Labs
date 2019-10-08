window.onload = function() {
  var txtArea = document.getElementById('textarea');

  txtArea.onkeydown = function(e) {
    // add element to UI
    if (txtArea.value !== '' && e.keyCode === 13) {
      var taskContent = txtArea.value;
      var containerToDo = document.getElementById('container-to-do');
      var newTask = document.createElement('div');
      newTask.classList.add('new', 'checkbox', 'view');
      containerToDo.append(newTask);
      var label = document.createElement('label');
      var check = document.createElement('input');
      check.setAttribute('type', 'checkbox');
      check.classList.add('check-boxs', 'toggle');
      label.classList.add('labels');
      label.append(check);
      newTask.append(label);
      var text = document.createTextNode(taskContent);
      label.append(text);
      var icon = document.createElement('button');
      icon.classList.add('destroy', 'icon');
      newTask.append(icon);
      txtArea.value = '';

      check.onclick = function() {
        label.classList.toggle('crossed');
      };

      // TODO: delete task event
      icon.onclick = function(event) {
        if (!event.currentTarget.parentElement.classList.contains('deleted')) {
          event.currentTarget.parentElement.style.display = 'none';
        }
        event.currentTarget.parentElement.classList.toggle('deleted');
      };
    }


    var checkBoxs = document.getElementsByClassName('check-boxs');
    var labels = document.querySelectorAll('.labels');
    var completeAll = document.getElementById('complete-all');
    completeAll.onclick = function() {
      var checkAll = document.getElementById('completeAll');
      for (var i = 0; i < labels.length; i++) {
        if (checkAll.checked) labels[i].classList.add('crossed');
        else labels[i].classList.remove('crossed');
        checkBoxs[i].checked = checkAll.checked;
      }
    };
    var showCompleted = document.getElementById('show-completed');
    showCompleted.onclick = function() {
      for (var i = 0; i < labels.length; i++) {
        if (!checkBoxs[i].checked || document.getElementsByClassName('new checkbox')[i].classList.contains('deleted')) {
          document.getElementsByClassName('new checkbox')[i].style.display='none';
        } else {
          document.getElementsByClassName('new checkbox')[i].style.display='block';
        }
      }
    };
    var showAll = document.getElementById('show-all');
    showAll.onclick = function() {
      for (var i = 0; i < labels.length; i++) {
        if (!document.getElementsByClassName('new checkbox')[i].classList.contains('deleted')) {
          document.getElementsByClassName('new checkbox')[i].style.display='block';
        } else {
          document.getElementsByClassName('new checkbox')[i].style.display='none';
        }
      }
    };
    var ShowDeleted = document.getElementById('show-deleted');
    showDeleted.onclick = function() {
      for (var i = 0; i < labels.length; i++) {
        if (document.getElementsByClassName('new checkbox')[i].classList.contains('deleted')) {
          document.getElementsByClassName('new checkbox')[i].style.display='block';
        } else {
          document.getElementsByClassName('new checkbox')[i].style.display='none';
        }
      }
    };
    
  };
};
