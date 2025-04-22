// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours
const nav = document.getElementById("navbar");

const image = document.getElementById("imgImprovise");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");
let playnone = true;

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 50) {
    nav.style.height = "45px";
  } else {
    nav.style.height = "90px";
  }

  let nivScroll =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;
  if (nivScroll > 0.45) {
    image.style.opacity = 1;
    image.style.transform = "none";
  }
  if (nivScroll > 0.85 && playnone) {
    popup.style.opacity = 1;
    popup.style.transform = "none";
    playnone = false;
  }
});

closeBtn.addEventListener("click", () => {
  popup.style.transform = "translateX(800px)";
});
