var i = 0;
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
let unlock = document.getElementById('theLock')

function openTab(evt, tabName) {
  var i, tabcontent, tablink;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablink = document.getElementsByClassName("tablink");
  for (i = 0; i < tablink.length; i++) {
    tablink[i].className = tablink[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

function moveC() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBarC");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}
function moveM() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBarM");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}
function moveY() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBarY");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}
function moveK() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBarK");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}

output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

unlock.onclick = function(){
  if (document.getElementById('buttonA').disabled == false) {
    document.getElementById('buttonA').disabled = true;
  }
  else {
    document.getElementById('buttonA').disabled = false;
  }

  if (document.getElementById('buttonB').disabled == false) {
    document.getElementById('buttonB').disabled = true;
  }
  else {
    document.getElementById('buttonB').disabled = false;
  }

  if (document.getElementById('buttonC').disabled == false) {
    document.getElementById('buttonC').disabled = true;
  }
  else {
    document.getElementById('buttonC').disabled = false;
  }

  if (document.getElementById('buttonD').disabled == false) {
    document.getElementById('buttonD').disabled = true;
  }
  else {
    document.getElementById('buttonD').disabled = false;
  }

  if (document.getElementById('buttonE').disabled == false) {
    document.getElementById('buttonE').disabled = true;
  }
  else {
    document.getElementById('buttonE').disabled = false;
  }

  if (document.getElementById('buttonF').disabled == false) {
    document.getElementById('buttonF').disabled = true;
  }
  else {
    document.getElementById('buttonF').disabled = false;
  }

  if (document.getElementById('ppS').disabled == false) {
    document.getElementById('ppS').disabled = true;
  }
  else {
    document.getElementById('ppS').disabled = false;
  }

  if (document.getElementById('firmwareUpdate').disabled == false) {
    document.getElementById('firmwareUpdate').disabled = true;
  }
  else {
    document.getElementById('firmwareUpdate').disabled = false;
  }

  if (document.getElementById('subButton').disabled == false) {
    document.getElementById('subButton').disabled = true;
  }
  else {
    document.getElementById('subButton').disabled = false;
  }
}

document.getElementById("defaultOpen").click();
