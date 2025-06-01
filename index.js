var typed = new Typed(".auto-typed", {
    strings: [
        "Passionate Web Developer",   "python Developer",
        "Full Stack Developer", "Machine Learning Enthusiast",],
    typeSpeed: 150,
    backSpeed: 100,
    loop: true,
}
)

var tablinks = document.querySelectorAll(".tab-links");
var tabcontents = document.querySelectorAll(".tab-contents");
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link"); 
    document.getElementById(tabname).classList.add("active-tab");
}


// ------------------SKILLS-------------------
document.querySelectorAll('.circular-skill').forEach(skill => {
  const percent = skill.getAttribute('data-percent');
  const canvas = document.createElement('canvas');
  canvas.width = 100;
  canvas.height = 100;
  skill.appendChild(canvas);

  const ctx = canvas.getContext('2d');

  // Background circle
  ctx.strokeStyle = '#2e3c52';
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.arc(50, 50, 40, 0, Math.PI * 2);
  ctx.stroke();

  // Foreground circle
  ctx.strokeStyle = '#00e0ff';
  ctx.beginPath();
  ctx.arc(50, 50, 40, -Math.PI / 2, (Math.PI * 2 * percent) / 100 - Math.PI / 2);
  ctx.stroke();
});
 var menu=document.querySelector("#sidemenu");
var closemenu=()=>{
   menu.style.right="-200px";
    
}
var openmenu=()=>{
menu.style.right="0";

}
// ------------------CONTACT FORM-------------------
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwNiijkk5p1wooiY-Vb5Ty1qWIaU-f4ewhyMmSO6GtIOXXOaXP_UFzyF4vG_3cO08IX/exec'
  const form = document.forms['submit-to-google-sheet']
const msg= document.querySelector("#msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{
        msg.innerHTML="Message sent successfully";
        setTimeout(function(){
          msg.innerHTML="";
        },5000);
        form.reset();
        console.log('Success!', response)
      })
      .catch(error => console.error('Error!', error.message))
  })

// ------------------READ MORE-------------------
    document.querySelectorAll(".read-more").forEach(button => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const moreText = this.previousElementSibling.querySelector(".more-text");
      if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        this.textContent = "Show less";
      } else {
        moreText.style.display = "none";
        this.textContent = "Learn more";
      }
    });
  });