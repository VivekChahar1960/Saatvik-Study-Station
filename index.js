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
// window.onclick = function(event) {
//   if (!event.target.matches('.btn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-options");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('showDropdown')) {
//         openDropdown.classList.remove('showDropdown');
//       }
//     }
//   }
// }

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


function menuscrolled(){
  
}
window.addEventListener('scroll', function(){
  const x=document.querySelector('#links');
  if(document.documentElement.scrollTop > 190){
    x.classList.add("stickynavbar");
  }else{
    x.classList.remove("stickynavbar");
  }
});


function feedbackclicked(){
  var x=document.getElementById("feebackform");
  var y=document.getElementById("stickyFeedback")
  var z=document.getElementById("header");
  var w=document.getElementById("slideshow-container");
  var u=document.getElementById("chooseUs");
  var t=document.getElementById("Aboutus");
  var s=document.getElementById("Aboutweb");
  var r=document.getElementById("Query");
  var p=document.getElementById("container");
  var q=document.getElementById("footer");

  if (x.className === "feebackform") {
    x.style.top="30%";
    y.style.visibility="hidden";
    z.style.filter="blur(4px)";
    w.style.filter="blur(4px)";
    u.style.filter="blur(4px)";
    t.style.filter="blur(4px)";
    s.style.filter="blur(4px)";
    r.style.filter="blur(4px)";
    p.style.filter="blur(4px)";
    q.style.filter="blur(4px)";

  } else {
    x.className = "feebackform";
  }
}

function emojiclicked1(){
  var s=document.getElementById("emojiangry");
  var y=document.getElementById("howrate");
  var z=document.getElementById("rateusclicked");
  var a=document.getElementById("emojinormal");
  var b=document.getElementById("emojihappy");
  var c=document.getElementById("emojiveryhappy");
  var d=document.getElementById("emojisad");
  s.style.opacity="1";
  y.style.display="none";
  z.style.display="flex";
  a.style.display="none";
  b.style.display="none";
  c.style.display="none";
  d.style.display="none";
}
function emojiclicked2(){
  var s=document.getElementById("emojisad");
  var y=document.getElementById("howrate");
  var z=document.getElementById("rateusclicked");
  var a=document.getElementById("emojinormal");
  var b=document.getElementById("emojihappy");
  var c=document.getElementById("emojiveryhappy");
  var d=document.getElementById("emojiangry");
  s.style.opacity="1";
  y.style.display="none";
  z.style.display="flex";
  a.style.display="none";
  b.style.display="none";
  c.style.display="none";
  d.style.display="none";
}
function emojiclicked3(){
  var s=document.getElementById("emojinormal");
  var y=document.getElementById("howrate");
  var z=document.getElementById("rateusclicked");
  var a=document.getElementById("emojiangry");
  var b=document.getElementById("emojihappy");
  var c=document.getElementById("emojiveryhappy");
  var d=document.getElementById("emojisad");
  s.style.opacity="1";
  y.style.display="none";
  z.style.display="flex";
  a.style.display="none";
  b.style.display="none";
  c.style.display="none";
  d.style.display="none";
}
function emojiclicked4(){
  var s=document.getElementById("emojihappy");
  var y=document.getElementById("howrate");
  var z=document.getElementById("rateusclicked");
  var a=document.getElementById("emojinormal");
  var b=document.getElementById("emojiangry");
  var c=document.getElementById("emojiveryhappy");
  var d=document.getElementById("emojisad");
  s.style.opacity="1";
  y.style.display="none";
  z.style.display="flex";
  a.style.display="none";
  b.style.display="none";
  c.style.display="none";
  d.style.display="none";
}
function emojiclicked5(){
  var s=document.getElementById("emojiveryhappy");
  var y=document.getElementById("howrate");
  var z=document.getElementById("rateusclicked");
  var a=document.getElementById("emojinormal");
  var b=document.getElementById("emojihappy");
  var c=document.getElementById("emojiangry");
  var d=document.getElementById("emojisad");
  s.style.opacity="1";
  y.style.display="none";
  z.style.display="flex";
  a.style.display="none";
  b.style.display="none";
  c.style.display="none";
  d.style.display="none";
}

function feedbackclose(){
  var a=document.getElementById("emojiangry");
  var b=document.getElementById("emojisad");
  var c=document.getElementById("emojinormal");
  var d=document.getElementById("emojihappy");
  var e=document.getElementById("emojiveryhappy");
  var y=document.getElementById("feebackform");
  var x=document.getElementById("stickyFeedback")
  var z=document.getElementById("header");
  var w=document.getElementById("slideshow-container");
  var u=document.getElementById("chooseUs");
  var t=document.getElementById("Aboutus");
  var s=document.getElementById("Aboutweb");
  var r=document.getElementById("Query");
  var p=document.getElementById("container");
  var q=document.getElementById("footer");
  var j=document.getElementById("howrate");
  var k=document.getElementById("rateusclicked");
  var l=document.getElementById("emojitext");
  y.style.top="-70%";
  x.style.visibility="visible";
  z.style.filter="none";
  w.style.filter="none";
  u.style.filter="none";
  t.style.filter="none";
  s.style.filter="none";
  r.style.filter="none";
  p.style.filter="none";
  q.style.filter="none";
  a.style.display="flex";
  a.style.opacity="0.5";
  a.addEventListener('mouseover' ,()=>{
    a.style.opacity="1";
  })
  a.addEventListener('mouseout',()=>{
    a.style.opacity="0.5";
  })


  b.style.display="flex";
  b.style.opacity="0.5";
  b.addEventListener('mouseover' ,()=>{
    b.style.opacity="1";
  })
  b.addEventListener('mouseout',()=>{
    b.style.opacity="0.5";
  })


  c.style.display="flex";
  c.style.opacity="0.5";
  c.addEventListener('mouseover' ,()=>{
    c.style.opacity="1";
  })
  c.addEventListener('mouseout',()=>{
    c.style.opacity="0.5";
  })

  d.style.display="flex";
  d.style.opacity="0.5";
  d.addEventListener('mouseover' ,()=>{
    d.style.opacity="1";
  })
  d.addEventListener('mouseout',()=>{
    d.style.opacity="0.5";
  })

  e.style.display="flex";
  e.style.opacity="0.5";
  e.addEventListener('mouseover' ,()=>{
    e.style.opacity="1";
  })
  e.addEventListener('mouseout',()=>{
    e.style.opacity="0.5";
  })

  y.style.top="-70%";
  x.style.visibility="visible";
  z.style.filter="none";
  w.style.filter="none";
  u.style.filter="none";
  t.style.filter="none";
  s.style.filter="none";
  r.style.filter="none";
  p.style.filter="none";
  q.style.filter="none";
  j.style.display="flex";
  k.style.display="none";
  l.style.display="flex";
  location.reload();
}

function submitbtn(){
  var a=document.getElementById("emojiangry");
  var b=document.getElementById("emojisad");
  var c=document.getElementById("emojinormal");
  var d=document.getElementById("emojihappy");
  var e=document.getElementById("emojiveryhappy");
  var y=document.getElementById("feebackform");
  var x=document.getElementById("stickyFeedback")
  var z=document.getElementById("header");
  var w=document.getElementById("slideshow-container");
  var u=document.getElementById("chooseUs");
  var t=document.getElementById("Aboutus");
  var s=document.getElementById("Aboutweb");
  var r=document.getElementById("Query");
  var p=document.getElementById("container");
  var q=document.getElementById("footer");
  var j=document.getElementById("howrate");
  var k=document.getElementById("rateusclicked");
  var l=document.getElementById("emojitext");
  y.style.top="-70%";
  x.style.visibility="visible";
  z.style.filter="none";
  w.style.filter="none";
  u.style.filter="none";
  t.style.filter="none";
  s.style.filter="none";
  r.style.filter="none";
  p.style.filter="none";
  q.style.filter="none";
  a.style.display="flex";
  a.style.opacity="0.5";
  a.addEventListener('mouseover' ,()=>{
    a.style.opacity="1";
  })
  a.addEventListener('mouseout',()=>{
    a.style.opacity="0.5";
  })


  b.style.display="flex";
  b.style.opacity="0.5";
  b.addEventListener('mouseover' ,()=>{
    b.style.opacity="1";
  })
  b.addEventListener('mouseout',()=>{
    b.style.opacity="0.5";
  })


  c.style.display="flex";
  c.style.opacity="0.5";
  c.addEventListener('mouseover' ,()=>{
    c.style.opacity="1";
  })
  c.addEventListener('mouseout',()=>{
    c.style.opacity="0.5";
  })

  d.style.display="flex";
  d.style.opacity="0.5";
  d.addEventListener('mouseover' ,()=>{
    d.style.opacity="1";
  })
  d.addEventListener('mouseout',()=>{
    d.style.opacity="0.5";
  })

  e.style.display="flex";
  e.style.opacity="0.5";
  e.addEventListener('mouseover' ,()=>{
    e.style.opacity="1";
  })
  e.addEventListener('mouseout',()=>{
    e.style.opacity="0.5";
  })

  y.style.top="-70%";
  x.style.visibility="visible";
  z.style.filter="none";
  w.style.filter="none";
  u.style.filter="none";
  t.style.filter="none";
  s.style.filter="none";
  r.style.filter="none";
  p.style.filter="none";
  q.style.filter="none";
  j.style.display="flex";
  k.style.display="none";
  l.style.display="flex";
  location.reload();
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
