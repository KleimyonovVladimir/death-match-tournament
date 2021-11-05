const overlay = document.getElementById("modal-overlay");
const create = document.getElementById("create-match");

create.onclick = () => overlay.style.display = "block";

document.onclick = (event) => {
  if (event.target == overlay) {
    overlay.style.display = "none";
  }
}

const cancel = () => overlay.style.display = "none";
