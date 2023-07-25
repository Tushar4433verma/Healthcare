// burger mmenu 
let burger=document.querySelector('#burger-menu');
let Navbar=document.querySelector('ul');
burger.onclick=()=>{
 
  burger.classList.toggle('fa-times');
  Navbar.classList.toggle('active');
}

//animations
const txt=document.querySelector('.second-txt');
function loadTime()
{
  setTimeout(()=>{
    txt.textContent="Stay Healthy..";
  },0);
  setTimeout(()=>{
    txt.textContent="remain calm..";
  },8000);
  setTimeout(()=>{
    txt.textContent="eat well ..";
  },4000);
}

loadTime();
setInterval(loadTime,12000);


//counter

// let counter=document.querySelector(".counter");
// let text=document.querySelector("p.txt");

// let cnt=1;

// setInterval(()=>{
//   if(cnt<120)
//   {
//     cnt++;
//     counter.innerHTML=cnt;
//   }
// },1);

// setTimeout(()=>{
//   text.innerHTML="Doctors At Work";
// },800);

