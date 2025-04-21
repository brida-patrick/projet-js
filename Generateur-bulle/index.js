let compt = 0;
const h2tt = document.querySelector("h2");

function GeneraBull() {
  const bulle = document.createElement("span");
  bulle.classList.add("bull");
  document.body.appendChild(bulle);
  let siez = Math.random() * 100 + 150 + "px";
  let siezT = Math.random() * 100 + 50 + "%";
  let siezL = Math.random() * 100 + "%";

  bulle.style.width = siez;
  bulle.style.height = siez;

  bulle.style.top = siezT;
  bulle.style.left = siezL;
  bulle.addEventListener("click", () => {
    compt++;
    h2tt.textContent = compt;

    bulle.remove();
  });
  setTimeout(() => {
    bulle.remove();
  }, 7000);
}

setInterval(GeneraBull, 3000);
