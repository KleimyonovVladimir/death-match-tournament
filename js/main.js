const LS_MATCHES_KEY = 'LocalStorage/Matches'

// HELPERS -------------------------------

//generates random id
const guid = () => {
  const s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

// MODAL ---------------------------------

const overlay = document.getElementById("modal-overlay");
const create = document.getElementById("create-match");

create.onclick = () => overlay.style.display = "block";

const cancel = () => {
  overlay.style.display = "none";
  clearMatchInputs()
}

document.onclick = (event) => {
  if (event.target == overlay) {
    cancel()
  }
}


// INITIAL SETTINGS ----------------------

const initialMatches = [
  {
    id: guid(),
    creator: "Vladimir",
    logoUrl: "./img/matches/logo-1.png",
    date: "Sep 01 at 09:00 PM",
    title: "CS:GO Eleague Premier 2021",
    rate: "Novice",
    map: "Inferno",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
    players: [0, 12, 3, 0],
    maxPlayers: 24
  },
  {
    id: guid(),
    creator: "Gribnik",
    logoUrl: "./img/matches/logo-2.png",
    date: "Oct 01 at 9:00 PM",
    title: "CS:GO Eleague Premier",
    rate: "Amateur",
    map: "Dust",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
    players: [1, 2, 1, 1, 0, 1],
    maxPlayers: 8
  }
]

if (!JSON.parse(localStorage.getItem(LS_MATCHES_KEY))) {
  localStorage.setItem(LS_MATCHES_KEY, JSON.stringify(initialMatches))
}

const localMatches = JSON.parse(localStorage.getItem(LS_MATCHES_KEY))

// RENDER MATCHES ----------------------

const generateMatchHtml = (match) => {
  const { id, logoUrl, date, title, rate, map, description, players, maxPlayers } = match

  return `
  <li class="match">
    <div class="match__data divider">
      ${logoUrl ? `<div class="match__logo-wrap"><img src="${logoUrl}" alt="${title}"></div>` : ''}
      <div class="match__info">
        <span class="match__date">${date}</span>
        <h3 class="match__title"><a href="match-details.html?id=${id}">${title}</a></h3>
        <div class="rating-status ${rate.toLowerCase()}">${rate}</div>
        <div class="match__map">Map: <span>${map}</span></div>
      </div>
    </div>
    <div class="match__description">${description}</div>
    <div class="match__footer">
      <div class="match__players">${(players || []).length}/${maxPlayers} Signed</div>
      <a href="match-details.html?id=${id}" class="match__details-arrow">
        <img src="./img/arrow-right.png" alt="Arrow Right">
      </a>
    </div>
  </li>`
}

const renderMatches = (matches) => {
  const matchList = document.getElementById('matches__list')

  if (matchList) {
    matchList.innerHTML = ''
    matches.forEach((match) => {
      const htmlMatch = generateMatchHtml(match)

      matchList.innerHTML += htmlMatch
    })
  }

}
renderMatches(localMatches)

// ADD MATCH ----------------------

const clearMatchInputs = () => {
  document.getElementById('logoUrl').value = '';
  document.getElementById('title').value = '';
  document.getElementById('map').value = '';
  document.getElementById('description').value = '';
  document.getElementById('maxPlayers').value = '';
}

const onCreateMatch = (event) => {
  event.preventDefault();

  const { value: logoUrl } = document.getElementById('logoUrl')
  const { value: title } = document.getElementById('title')
  const { value: map } = document.getElementById('map')
  const { value: description } = document.getElementById('description')
  const { value: maxPlayers } = document.getElementById('maxPlayers')

  const match = {
    id: guid(),
    creator: "Gribhik",
    logoUrl,
    date: "Sep 01 at 09:00 PM",
    title,
    rate: "Novice",
    map,
    description,
    players: [],
    maxPlayers
  }

  const oldMatches = JSON.parse(localStorage.getItem(LS_MATCHES_KEY))
  const newMatches = [match, ...oldMatches]

  localStorage.setItem(LS_MATCHES_KEY, JSON.stringify(newMatches))

  renderMatches(newMatches)
  cancel()
  clearMatchInputs()
}
