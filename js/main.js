const theButton = document.querySelector(".button");

theButton.addEventListener("click", () => {
  theButton.classList.add("button-loading");

  theButton.disabled = true;

  const addLoadingTimeOutId = setTimeout(() => {
    theButton.classList.remove("button-loading");
    clearTimeout(addLoadingTimeOutId)
    theButton.disabled = false;
  }, 3000)
})
