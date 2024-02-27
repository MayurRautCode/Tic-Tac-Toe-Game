let box = document.querySelectorAll(".box");
let new1 = document.querySelector(".new");
let reset = document.querySelector(".reset");
let hide = document.querySelector(".hide");
let text = document.querySelector(".aa");
let count = 0;
let turno = true;
const win = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

box.forEach((box) => {
    box.addEventListener("click", () => {
        if(turno == true){
         box.innerText= "x"
         box.style.color = "#EFF6E0";
         turno=false;
        }else{
         box.innerText= "o"
         box.style.color = "#EFF6E0";
         turno=true;
        } 
        box.disabled=true;
        count++;
        draw();
        checkwiner();

     })
});

const draw = () => {
  if(count == "9"){
    hide.classList.remove("hide");
    text.innerText ="OPPs! Match is Draw";
  };
};

const checkwiner = () => {
  for(let partten of win){

   let val1 = box[partten[0]].innerText;
   let val2 = box[partten[1]].innerText;
   let val3 = box[partten[2]].innerText;

   if(val1 != "" && val2 != "" && val3 != "" ){
     if(val1 ===  val2  && val2 === val3){
      disbox();
       winnerfun(val1);
   }
  }
}; 
};

const winnerfun = (val1) =>{
  hide.classList.remove("hide");
  text.innerText ="Congratulations, Winner is " + val1;

}

const disbox = () => {
for(val of box){
val.disabled=true;
} };


reset.addEventListener("click",  () => {
  hide.classList.add("hide");
  turno = true;
  fl();
  count= 0;
  });

new1.addEventListener("click",  () => {
  hide.classList.add("hide");
  turno = true;
  fl();
  count= 0;
});


const fl = () => {
  for(val of box){
    val.disabled=false;
    val.innerText = "";
    }};