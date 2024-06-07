var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  x[myIndex - 1].style.display = "block";
  dots[myIndex-1].className += " active";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}


//dropdown  clickable 


function showDrpDwn(){
  var click = document.getElementById("dropdown-options");
      if (click.style.display === "none") {
         click.style.display = "block";
      } else {
         click.style.display = "none";
      }
}
function showDrpDwn2(){
  var click = document.getElementById("dropdown-options2");
      if (click.style.display === "none") {
         click.style.display = "block";
      } else {
         click.style.display = "none";
      }
}
function showDrpDwn3(){
  var click = document.getElementById("dropdown-options3");
      if (click.style.display === "none") {
         click.style.display = "block";
      } else {
         click.style.display = "none";
      }
}
function showDrpDwn4(){
  var click = document.getElementById("dropdown-options4");
      if (click.style.display === "none") {
         click.style.display = "block";
      } else {
         click.style.display = "none";
      }
}
function showDrpDwn5(){
  var click = document.getElementById("dropdown-options5");
      if (click.style.display === "none") {
         click.style.display = "block";
      } else {
         click.style.display = "none";
      }
}

var y=document.getElementById("menubtn");
y.addEventListener("click" , clickfunction);
function clickfunction(){
  var x=document.getElementById("menu");
  if (x.className === "menu") {
    x.className += " responsive";
    
  } else {
    x.className = "menu";
  }
}



function mathchpclicked(){
    var nch=document.getElementById("mathschapters");
    console.log("clicked");
    nch.classList.add("displaychapters");
}
function mathchclose(){
    var nch=document.getElementById("mathschapters");
    nch.classList.remove("displaychapters");
}



