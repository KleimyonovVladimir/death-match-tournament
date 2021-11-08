// 1. Получить id из ссылки
// 2. Сделать динамический вывод данных о матче, получив его по id из LS
// Array.find
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());


const matchesForMatchDetails = JSON.parse(localStorage.getItem(LS_MATCHES_KEY))

const generateMatchDetailsHtml = (match) => {
  const { logoUrl, creator, date, title, rate, map, description, players, maxPlayers } = match

  return `
    <div class="match-sidebar__data divider">

    ${logoUrl ? `<div class="match-sidebar__logo-wrap"><img src="${logoUrl}" alt="${title}"></div>` : ''} 
      <div class="match-sidebar__info">
        <h1 class="match-sidebar__title">${title}</h1>
        <div class="rating-status ${rate.toLowerCase()}">${rate}</div>
      </div>
      <div class="match-sidebar__description">
        <h4 class="match-sidebar__description-title">How does it work?</h4>
        ${description}
      </div>
    </div>
    <ul class="match-sidebar__details">
      <li>Map: <span>${map}</span></li>
      <li>Players:<span>${players.length || 0}/${maxPlayers} Signed</span></li>
      <li>Date: <span>${date}</span></li>
      <li>Creator: <span>${creator}</span></li>
    </ul>
    <div class="match-sidebar__buttons">
      <button class="button outlined">
        Edit
      </button>
      <a href="#" onclick = "onDeleteMatch()" class="match-sidebar__delete-button">
        <img src="./img/delete-icon.png" alt="Delete">
        Delete Match
      </a>
    </div>`
}

const renderMatchDetails = () => {
  const matchSidebar = document.getElementById('match-sidebar')

  if (matchSidebar) {
    const matchDetails = matchesForMatchDetails.find((item) => item.id === params.id)
    if (!matchDetails) {
      matchSidebar.innerHTML = "Not found the match"
      return
    }
    const htmlMatch = generateMatchDetailsHtml(matchDetails)

    matchSidebar.innerHTML = htmlMatch
  }
}

renderMatchDetails()

// DELETE MATCH -----------------------

const onDeleteMatch = () => {
  if (window.confirm("Do you really want to delete match?")) {
    const matches = JSON.parse(localStorage.getItem(LS_MATCHES_KEY))

    const copyMatches = [...matches]
    const matchIndex = copyMatches.findIndex(({ id }) => id === params.id);

    copyMatches.splice(matchIndex, 1);

    localStorage.setItem(LS_MATCHES_KEY, JSON.stringify(copyMatches))
    parent.location = 'index.html';
  }
}