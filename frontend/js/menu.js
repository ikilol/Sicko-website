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
  if (window.innerWidth<588 || !aboutHidden){
     /*your functions for big screen*/
     document.getElementById("logo").style.display = "none";
  }

  else{
    document.getElementById("logo2").style.display = "none";
  }
};

window.addEventListener("resize", limitFunc);
window.addEventListener("onload", limitFunc);


// pagina home
let frontHidden = true;
    
function toggleFront() {
  let frontDiv = document.getElementById("frontDiv");
  
// se il menu è chiuso si apre
  if (frontHidden) { 
    document.getElementById("logo2").style.display = "block";
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

    profileDiv.classList.remove("profileOpen");
    profileDiv.classList.add("profileHidden");
    profileHidden = true;
    
    menuDiv.classList.remove("menuOpen");
    menuDiv.classList.add("menuHidden");
    menuHidden = true;
// se il menù è aperto si chiude
  } else {
    frontDiv.classList.remove("frontOpen");
    frontDiv.classList.add("frontHidden");
    frontHidden = true;
  }
}


// pagina about
let aboutHidden = true;
    
function toggleAbout() {
  let aboutDiv = document.getElementById("aboutDiv");
  

// se il menu è chiuso si apre
  if (aboutHidden) {
    document.getElementById("logo2").style.display = "none";
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

    profileDiv.classList.remove("profileOpen");
    profileDiv.classList.add("profileHidden");
    profileHidden = true;

    menuDiv.classList.remove("menuOpen");
    menuDiv.classList.add("menuHidden");
    menuHidden = true;
// se il menù è aperto si chiude
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

// se il menu è chiuso si apre
  if (rankHidden) {
    document.getElementById("logo2").style.display = "none";
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

    profileDiv.classList.remove("profileOpen");
    profileDiv.classList.add("profileHidden");
    profileHidden = true;

    menuDiv.classList.remove("menuOpen");
    menuDiv.classList.add("menuHidden");
    menuHidden = true;
// se il menù è aperto si chiude
  } else {
    rankDiv.classList.remove("rankOpen");
    rankDiv.classList.add("rankHidden");
    rankHidden = true;
  }
}

// pagina shop
let shopHidden = true;
    
function toggleShop() {
  let shopDiv = document.getElementById("shopDiv");

// se il menu è chiuso si apre
  if (shopHidden) {
    document.getElementById("logo2").style.display = "none";
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

    profileDiv.classList.remove("profileOpen");
    profileDiv.classList.add("profileHidden");
    profileHidden = true;

    menuDiv.classList.remove("menuOpen");
    menuDiv.classList.add("menuHidden");
    menuHidden = true;
// se il menù è aperto si chiude
  } else {
    shopDiv.classList.remove("shopOpen");
    shopDiv.classList.add("shopHidden");
    shopHidden = true;
  }
}

// pagina personale
let profileHidden = true;
    
function toggleProfile() {
  let profileDiv = document.getElementById("profileDiv");

// se il menu è chiuso si apre
  if (profileHidden) {
    document.getElementById("logo2").style.display = "none";
    frontDiv.classList.remove("frontOpen");
    frontDiv.classList.add("frontHidden");
    frontHidden = true;

    aboutDiv.classList.remove("aboutOpen");
    aboutDiv.classList.add("aboutHidden");
    aboutHidden = true;

    rankDiv.classList.remove("rankOpen");
    rankDiv.classList.add("rankHidden");
    rankHidden = true;

    shopDiv.classList.remove("shopOpen");
    shopDiv.classList.add("shopHidden");
    shopHidden = true;

    profileDiv.classList.remove("profileHidden");
    profileDiv.classList.add("profileOpen");
    profileHidden = false;

    menuDiv.classList.remove("menuOpen");
    menuDiv.classList.add("menuHidden");
    menuHidden = true;
// se il menù è aperto si chiude
  } else {
    profileDiv.classList.remove("profileOpen");
    profileDiv.classList.add("profileHidden");
    profileHidden = true;
  }
}

