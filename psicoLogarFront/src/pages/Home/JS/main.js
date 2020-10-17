const modal = document.getElementById("modal_login");
const overlay = document.getElementById("modal_login_overlay");

function abrirModalLogin(){
  modal.style.display = "flex";
  overlay.style.display = "block";
}

function fecharModalLogin() {
    modal.style.display = "none";
    overlay.style.display = "none";
};
