// Créer un événément au scroll

// Cacher la navbar si l'utilisateur comment à descendre et la sortir quand il remonte

// Stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu

// Connaitre niveau de scroll (window.scrollY)

const nav = document.getElementById("navbar");

let lastscroll = window.addEventListener("scroll", (e) => {
  if (window.scrollY > lastscroll) {
    nav.style.top = "-80px";
  } else {
    nav.style.top = "0px";
  }
  lastscroll = window.scrollY;
});
