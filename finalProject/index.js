let progressBar = document.querySelector(".bar-html");
let progressBarCss = document.querySelector(".bar-css")
let progressBarJs = document.querySelector(".barJs");
let progressAngular = document.querySelector(".barAngular")
let htmlprocent = document.querySelector(".procentaj-html");
let cssprocent = document.querySelector(".procentaj-css");
let jsprocent = document.querySelector(".procentajJs");
let angprocent = document.querySelector(".procentajAngular")


let htmlidx = 0;
let cssidx = 0;
let jsidx = 0;
let angularidx = 0;


function htmlProgress() {
  progressBar.style.width = htmlidx + "%";
  htmlprocent.innerText = htmlidx + "%";
  htmlidx++;
  if (htmlidx < 80) {
    setTimeout(htmlProgress, 20);
  }
};

function cssProgres() {
  progressBarCss.style.width = cssidx + "%";
  cssprocent.innerText = cssidx + "%"
  cssidx++;
  if (cssidx < 75) {
    setTimeout(cssProgres, 24);
  }
};

function jsProcent() {
  progressBarJs.style.width = jsidx + "%";
  jsprocent.innerText = jsidx + "%";
  jsidx++;
  if (jsidx++ < 62) {
    setTimeout(jsProcent, 40);
  }
}
function angularProcent(){
  progressAngular.style.width = jsidx + "%";
  angprocent.innerText = angularidx + "%";
  angularidx++;
  if (angularidx++ < 39 ){
    setTimeout(angularProcent, 30);
  }
}

htmlProgress();
cssProgres();
jsProcent();
angularProcent();


// color change 


const html = document.querySelector('html')
const check = document.querySelector('#checkbox')

check.addEventListener('change', function(){
  html.classList.toggle('dark')
});

// collasible button
let collBtn = document.getElementsByClassName("collapseButton");
let collTxt = document.getElementsByClassName("collapseText");

for (let i = 0; i < collBtn.length; i++) {
  collBtn[i].addEventListener("click", function () {
    if (collTxt[i].style.display === "none") {
      collTxt[i].style.display = "block";
      collBtn[i].innerHTML = "-";
    } else {
      collTxt[i].style.display = "none";
      collBtn[i].innerHTML = "+";
    }
  })
};

if (window.matchMedia("(max-width: 900px)").matches) {
  for (var i = 0; i < collTxt.length; i++) {
    collTxt[i].style.display = "none";
  }
};

// Auto tipe

const instance = new Typewriter('#autoType', {
  strings: ['Vlad Craciun', 'Front End Developer'],
  autoStart: true,
  loop: true,

});



