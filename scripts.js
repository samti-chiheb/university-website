const navLinks = document.getElementById('navLinks');
const barsMenu = document.querySelector(".fa-bars");
//  toggle menu
function showMenu(){
  navLinks.style.right = "0px"; 
}

function hideMenu(){
  navLinks.style.right = "-400px";
}

function changeColor(element, newColor){
  element.style.color = newColor;
}

function vh(percent) {
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  return (percent * h) / 100;
}

// change bars menu color
window.addEventListener('scroll', ()=>{
  let y = window.scrollY;
  console.log(y);
  console.log(vh(50));
  if (y>= vh(30)) {
    changeColor(barsMenu, "#000000");
  }else{
    changeColor(barsMenu, "#fff");
  }
})
