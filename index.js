const draw=document.querySelector(".etch");
const size=document.querySelector("#size");
const bl=document.querySelector("#black");
const rb=document.querySelector("#rb");
const main=document.querySelector("#main");
const reset=document.querySelector("#reset");
let taille=16;
let hoverEnabed=true;
const cli=document.querySelector("#cli");
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
function attachhover(){
  rb.addEventListener("click",()=>{
    draw.querySelectorAll(".square").forEach(squa => {
      squa.addEventListener("mouseover",(e)=>{
        if (hoverEnabed){
          e.target.style.backgroundColor=getRandomColor();
        }
         
        });
    });
  });
  bl.addEventListener("click", ()=>{
    draw.querySelectorAll(".square").forEach(squa => {
      squa.addEventListener("mouseover",(e)=>{
        if (hoverEnabed){
          e.target.style.backgroundColor="black";
        }
       });
    });
  });
  draw.addEventListener("click", ()=>{
   hoverEnabed=!hoverEnabed; 
   if(hoverEnabed){
    cli.innerHTML="Click anywhere to stop drawing";
   }
   else{
    cli.innerHTML="Click an other time to continue drawing";
   }
   
  });
}
 
function show_grid(taille){
let nbsquares=taille**2;
for (let i = 0; i < (nbsquares);i++) {
    const square = document.createElement('div');
    square.classList.add("square");
    draw.appendChild(square);
} 
attachhover();
}
function resetGrid(){
   show_grid(16);
    const size=document.querySelector("#size");
    size.addEventListener("click", ()=>{
   let newgridt=prompt("give a number < 100");
   if (newgridt>100){
    alert(`Please select value of 100 or less`);
   }
   else{
    draw.innerHTML='';
    draw.style.gridTemplateColumns = `repeat(${newgridt}, 1fr)`;
    draw.style.gridTemplateRows = `repeat(${newgridt}, 1fr)`;
    show_grid(newgridt);
   attachhover();
   }
  });
}
reset.addEventListener("click",()=>{
  draw.innerHTML='';
  draw.style.gridTemplateColumns = `repeat(${16}, 1fr)`;
  draw.style.gridTemplateRows = `repeat(${16}, 1fr)`;
  show_grid(16);
  attachhover();
  
 });

resetGrid();

    



