let menuHidden = true;
    
function toggleMenu() {
  let menuDiv = document.getElementById("menuDiv");

// se il menu è chiuso si apre
  if (menuHidden) {
    menuDiv.classList.remove("menuHidden");
    menuDiv.classList.add("menuOpen");
    menuHidden = false;
// se il menù è aperto si chiude
  } else {
    menuDiv.classList.remove("menuOpen");
    menuDiv.classList.add("menuHidden");
    menuHidden = true;
  }
}

var limitFunc = function(){
  if (window.innerWidth<588){
     /*your functions for big screen*/
     document.getElementById("logo2").style.display = "block";
     document.getElementById("logo").style.display = "none";
  }

  else{
    document.getElementById("logo").style.display = "block";
    document.getElementById("logo2").style.display = "none";
  }
};

window.addEventListener("resize", limitFunc);
window.addEventListener("onload", limitFunc);


// pagina home
let frontHidden = true;

function toggleFront() {
  let frontDiv = document.getElementById("frontDiv");
  var iframe1 = document.getElementById("myIframe1");
  
  if (frontHidden && navigator.userAgent.match(/(iPhone|iPod|iPad)/i)) { 
    document.getElementById("logo").style.display = "block";
    frontDiv.classList.remove("frontHidden");
    frontDiv.classList.add("frontOpen");
    frontHidden = false;
    iframe1.style.height = iframe1.contentWindow.document.body.scrollHeight + 'px';

    aboutDiv.classList.remove("aboutOpen");
    aboutDiv.classList.add("aboutHidden");
    aboutHidden = true;

    rankDiv.classList.remove("rankOpen");
    rankDiv.classList.add("rankHidden");
    rankHidden = true;

    shopDiv.classList.remove("shopOpen");
    shopDiv.classList.add("shopHidden");
    shopHidden = true;
    
    menuDiv.classList.remove("menuOpen");
    menuDiv.classList.add("menuHidden");
    menuHidden = true;
  } else if (frontHidden){
    document.getElementById("logo").style.display = "block";
    frontDiv.classList.remove("frontHidden");
    frontDiv.classList.add("frontOpen");
    frontHidden = false;

    aboutDiv.classList.remove("aboutOpen");
    aboutDiv.classList.add("aboutHidden");
    aboutHidden = true;

    rankDiv.classList.remove("rankOpen");
    rankDiv.classList.add("rankHidden");
    rankHidden = true;

    shopDiv.classList.remove("shopOpen");
    shopDiv.classList.add("shopHidden");
    shopHidden = true;
    
    menuDiv.classList.remove("menuOpen");
    menuDiv.classList.add("menuHidden");
    menuHidden = true;
  }
  
  else {
    frontDiv.classList.remove("frontOpen");
    frontDiv.classList.add("frontHidden");
    frontHidden = true;
  }
}


// pagina about
let aboutHidden = true;
    
function toggleAbout() {
  let aboutDiv = document.getElementById("aboutDiv");
  var iframe2 = document.getElementById("myIframe2");
  
  if (aboutHidden && navigator.userAgent.match(/(iPhone|iPod|iPad)/i)) {
    document.getElementById("logo").style.display = "none";
    frontDiv.classList.remove("frontOpen");
    frontDiv.classList.add("frontHidden");
    frontHidden = true;

    aboutDiv.classList.remove("aboutHidden");
    aboutDiv.classList.add("aboutOpen");
    aboutHidden = false;
    iframe2.style.height = iframe2.contentWindow.document.body.scrollHeight + 'px';

    rankDiv.classList.remove("rankOpen");
    rankDiv.classList.add("rankHidden");
    rankHidden = true;

    shopDiv.classList.remove("shopOpen");
    shopDiv.classList.add("shopHidden");
    shopHidden = true;

    menuDiv.classList.remove("menuOpen");
    menuDiv.classList.add("menuHidden");
    menuHidden = true;
  } else if (aboutHidden){
    document.getElementById("logo").style.display = "none";
    frontDiv.classList.remove("frontOpen");
    frontDiv.classList.add("frontHidden");
    frontHidden = true;

    aboutDiv.classList.remove("aboutHidden");
    aboutDiv.classList.add("aboutOpen");
    aboutHidden = false;

    rankDiv.classList.remove("rankOpen");
    rankDiv.classList.add("rankHidden");
    rankHidden = true;

    shopDiv.classList.remove("shopOpen");
    shopDiv.classList.add("shopHidden");
    shopHidden = true;

    menuDiv.classList.remove("menuOpen");
    menuDiv.classList.add("menuHidden");
    menuHidden = true;
  } else {
    aboutDiv.classList.remove("aboutOpen");
    aboutDiv.classList.add("aboutHidden");
    aboutHidden = true;
  }
}

// pagina rankings
let rankHidden = true;
    
function toggleRank() {
  let rankDiv = document.getElementById("rankDiv");
  var iframe3 = document.getElementById("myIframe3");

  if (rankHidden && navigator.userAgent.match(/(iPhone|iPod|iPad)/i)) {
    document.getElementById("logo").style.display = "none";
    frontDiv.classList.remove("frontOpen");
    frontDiv.classList.add("frontHidden");
    frontHidden = true;

    aboutDiv.classList.remove("aboutOpen");
    aboutDiv.classList.add("aboutHidden");
    aboutHidden = true;

    rankDiv.classList.remove("rankHidden");
    rankDiv.classList.add("rankOpen");
    rankHidden = false;
    iframe3.style.height = iframe3.contentWindow.document.body.scrollHeight + 'px';
    
    shopDiv.classList.remove("shopOpen");
    shopDiv.classList.add("shopHidden");
    shopHidden = true;

    menuDiv.classList.remove("menuOpen");
    menuDiv.classList.add("menuHidden");
    menuHidden = true;
  } else if(rankHidden){
    document.getElementById("logo").style.display = "none";
    frontDiv.classList.remove("frontOpen");
    frontDiv.classList.add("frontHidden");
    frontHidden = true;

    aboutDiv.classList.remove("aboutOpen");
    aboutDiv.classList.add("aboutHidden");
    aboutHidden = true;

    rankDiv.classList.remove("rankHidden");
    rankDiv.classList.add("rankOpen");
    rankHidden = false;
    
    shopDiv.classList.remove("shopOpen");
    shopDiv.classList.add("shopHidden");
    shopHidden = true;

    menuDiv.classList.remove("menuOpen");
    menuDiv.classList.add("menuHidden");
    menuHidden = true;
  }
  else {
    rankDiv.classList.remove("rankOpen");
    rankDiv.classList.add("rankHidden");
    rankHidden = true;
  }
}

// pagina shop
let shopHidden = true;
    
function toggleShop() {
  let shopDiv = document.getElementById("shopDiv");
  var iframe4 = document.getElementById("myIframe4");

  if (shopHidden && navigator.userAgent.match(/(iPhone|iPod|iPad)/i)) {
    document.getElementById("logo").style.display = "none";
    frontDiv.classList.remove("frontOpen");
    frontDiv.classList.add("frontHidden");
    frontHidden = true;

    aboutDiv.classList.remove("aboutOpen");
    aboutDiv.classList.add("aboutHidden");
    aboutHidden = true;

    rankDiv.classList.remove("rankOpen");
    rankDiv.classList.add("rankHidden");
    rankHidden = true;

    shopDiv.classList.remove("shopHidden");
    shopDiv.classList.add("shopOpen");
    shopHidden = false;
    iframe4.style.height = iframe4.contentWindow.document.body.scrollHeight + 'px';

    menuDiv.classList.remove("menuOpen");
    menuDiv.classList.add("menuHidden");
    menuHidden = true;
  } else if(shopHidden){
    document.getElementById("logo").style.display = "none";
    frontDiv.classList.remove("frontOpen");
    frontDiv.classList.add("frontHidden");
    frontHidden = true;

    aboutDiv.classList.remove("aboutOpen");
    aboutDiv.classList.add("aboutHidden");
    aboutHidden = true;

    rankDiv.classList.remove("rankOpen");
    rankDiv.classList.add("rankHidden");
    rankHidden = true;

    shopDiv.classList.remove("shopHidden");
    shopDiv.classList.add("shopOpen");
    shopHidden = false;

    menuDiv.classList.remove("menuOpen");
    menuDiv.classList.add("menuHidden");
    menuHidden = true;
  }
  else {
    shopDiv.classList.remove("shopOpen");
    shopDiv.classList.add("shopHidden");
    shopHidden = true;
  }
}


