// Typing Effect
const words = ["Full Stack Developer",];
let i=0,j=0,del=false;

function type(){
  let current = words[i];

  if(!del){
    document.getElementById("typing").textContent = current.substring(0,j++);
    if(j > current.length){
      del=true;
      setTimeout(type,1000);
      return;
    }
  } else {
    document.getElementById("typing").textContent = current.substring(0,j--);
    if(j===0){
      del=false;
      i=(i+1)%words.length;
    }
  }
  setTimeout(type, del?50:100);
}
type();

// Form
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Message Sent 🚀");
});