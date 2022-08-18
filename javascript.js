const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .container ul li");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id"); }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};
document.addEventListener('DOMContentLoaded',()=>{
    let count1=new ClientPlus('#num1', 50, 2000) 
    let count2=new ClientPlus('#num2', 300, 2000) 
    // object, max number, duration(ms)
 
  })
  
  class ClientPlus{
    constructor(selectPlus, maxNum, duration){ 
                // object, max number, duration(ms)
      this.clientNum=document.querySelector(selectPlus)
                
      this.maxNum=maxNum
                  
      this.time=duration/maxNum
              
      this.timer=setInterval(()=>{this.clientPlus()}, this.time)
              
    }
    clientPlus(){
      this.clientNum.innerHTML++;
      if(this.clientNum.innerHTML>=this.maxNum){
         clearInterval(this.timer)
      }
     }
  }