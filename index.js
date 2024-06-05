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
  document.getElementById("dropdown-options").classList.add("showDropdown");
}
function showDrpDwn2(){
  document.getElementById("dropdown-options2").classList.add("showDropdown");
}
function showDrpDwn3(){
  document.getElementById("dropdown-options3").classList.add("showDropdown");
}
function showDrpDwn4(){
  document.getElementById("dropdown-options4").classList.add("showDropdown");
}
function showDrpDwn5(){
  document.getElementById("dropdown-options5").classList.add("showDropdown");
}
window.onclick = function(event) {
  if (!event.target.matches('.btn')) {
    var dropdowns = document.getElementsByClassName("dropdown-options");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('showDropdown')) {
        openDropdown.classList.remove('showDropdown');
      }
    }
  }
}

// menu btn click functuion

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


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// naimating scrool in why choose us 
const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    const square = document.querySelectorAll('.wcuPoints');
    console.log(entry);
    if(entry.isIntersecting){
      for(var i=0;i<square.length;i++){
        square[i].classList.add('box');
      }
    }else{
      square.classList.remove('box');
    }
  })
})
observer.observe(document.querySelector('.wcuPoints'));

//animating scrool in about us 

const observer1 = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    const square = document.querySelectorAll('.aboutusimg');
    console.log(entry);
    if(entry.isIntersecting){
      for(var i=0;i<square.length;i++){
        square[i].classList.add('aniAboutUsImg');
      }
    }else{
      square.classList.remove('aniAboutUsImg');
    }
  })
})
observer1.observe(document.querySelector('.aboutusimg'));

const observer2 = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    const square = document.querySelectorAll('.aboutMain');
    console.log(entry);
    if(entry.isIntersecting){
      for(var i=0;i<square.length;i++){
        square[i].classList.add('aniAboutUsMain');
      }
    }else{
      square.classList.remove('aniAboutUsMain');
    }
  })
})
observer2.observe(document.querySelector('.aboutMain'));

// animating scrool in about web

const observer3 = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    const square = document.querySelectorAll('.aboutWebimg');
    console.log(entry);
    if(entry.isIntersecting){
      for(var i=0;i<square.length;i++){
        square[i].classList.add('aniAboutWebImg');
      }
    }else{
      square.classList.remove('aniAboutWebImg');
    }
  })
})
observer3.observe(document.querySelector('.aboutWebimg'));

const observer4 = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    const square = document.querySelectorAll('.aboutMainWeb');
    console.log(entry);
    if(entry.isIntersecting){
      for(var i=0;i<square.length;i++){
        square[i].classList.add('aniAboutWebMain');
      }
    }else{
      square.classList.remove('aniAboutWebMain');
    }
  })
})
observer4.observe(document.querySelector('.aboutMainWeb'));
