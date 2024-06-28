var SetaDireita = document.getElementById("seta-direita");
var motaJog = document.getElementById("mota-jog");
var motaHonda = document.getElementById("mota-honda");
var SetaEsquerda = document.getElementById("seta-esquerda");
var logo2 = document.getElementById("logo-dnc");
var titulo_menu_central = document.getElementById("titulo-menu-central");
var titulo_menu_central2 = document.getElementById("titulo-menu-central2");

function Direita() {
  SetaDireita.style.display = "flex";
  SetaEsquerda.style.display = "flex";
  motaHonda.style.display = "flex";
  motaJog.style.display = "none";
  titulo_menu_central.style.display = "none";
  titulo_menu_central2.style.display = "flex";
  titulo_menu_central2.style.marginLeft = "93px";
}
function Esquerda() {
  SetaEsquerda.style.display = "flex";
  SetaDireita.style.display = "flex";
  motaJog.style.display = "flex";
  motaHonda.style.display = "none";
  titulo_menu_central.style.display = "flex";
  titulo_menu_central2.style.display = "none";
  titulo_menu_central.style.marginLeft = "38px";
}
