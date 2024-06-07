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

function clickfunctionMenu(){
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



