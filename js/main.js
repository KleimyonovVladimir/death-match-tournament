const LS_MATCHES_KEY = 'LocalStorage/Matches'
const LS_USERS_KEY = 'LocalStorage/Users'

// HELPERS -------------------------------

// generates random id
const guid = () => {
  const s4 = () =>
    Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
  // return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
  return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`
}

// MODAL ---------------------------------

const createOverlay = document.getElementById('create-overlay')
const createUserOverlay = document.getElementById('create-user-overlay')
const editOverlay = document.getElementById('edit-overlay')
const createMatch = document.getElementById('create-match')
const createUser = document.getElementById('create-user')

createMatch &&
  (createMatch.onclick = () => {
    createOverlay.style.display = 'block'
  })
createUser &&
  (createUser.onclick = () => {
    createUserOverlay.style.display = 'block'
  })

const cancelCreateUserModal = () => {
  createUserOverlay.style.display = 'none'
  clearUsersInputs()
}
const cancelCreateMatchModal = () => {
  createOverlay.style.display = 'none'
  clearMatchInputs()
}

const cancelEditMatchModal = () => {
  editOverlay.style.display = 'none'
  clearMatchInputs()
}

// CLEAR INPUTS --------------------------

const clearMatchInputs = () => {
  document.getElementById('logoUrl').value = ''
  document.getElementById('title').value = ''
  document.getElementById('map').value = ''
  document.getElementById('description').value = ''
  document.getElementById('maxPlayers').value = ''
}

const clearUsersInputs = () => {
  document.getElementById('playerName').value = ''
  document.getElementById('playerAvatar').value = ''
  document.getElementById('rate').value = ''
  document.getElementById('country').value = ''
}

// INITIAL SETTINGS ----------------------

const initialMatches = [
  {
    id: guid(),
    creator: 'Vladimir',
    logoUrl: './img/matches/logo-1.png',
    date: 'Sep 01 at 09:00 PM',
    title: 'CS:GO Eleague Premier 2021',
    rate: 'Novice',
    map: 'Inferno',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
    players: [0, 12, 3, 0],
    maxPlayers: 24,
  },
  {
    id: guid(),
    creator: 'Gribnik',
    logoUrl: './img/matches/logo-2.png',
    date: 'Oct 01 at 9:00 PM',
    title: 'CS:GO Eleague Premier',
    rate: 'Amateur',
    map: 'Dust',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
    players: [1, 2, 1, 1, 0, 1],
    maxPlayers: 8,
  },
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

const onCreateMatch = (event) => {
  event.preventDefault()

  const { value: logoUrl } = document.getElementById('logoUrl')
  const { value: title } = document.getElementById('title')
  const { value: map } = document.getElementById('map')
  const { value: description } = document.getElementById('description')
  const { value: maxPlayers } = document.getElementById('maxPlayers')

  const match = {
    id: guid(),
    creator: 'Gribhik',
    logoUrl,
    date: 'Sep 01 at 09:00 PM',
    title,
    rate: 'Novice',
    map,
    description,
    players: [],
    maxPlayers,
  }

  const oldMatches = JSON.parse(localStorage.getItem(LS_MATCHES_KEY))
  const newMatches = [match, ...oldMatches]

  localStorage.setItem(LS_MATCHES_KEY, JSON.stringify(newMatches))

  renderMatches(newMatches)

  cancelCreateMatchModal()
}

// MATCH-DETAILS

const urlSearchParams = new URLSearchParams(window.location.search)
const params = Object.fromEntries(urlSearchParams.entries())

const generateMatchDetailsHtml = (match) => {
  const { logoUrl, creator, date, title, rate, map, description, players, maxPlayers } = match

  return `
    <div class="match-sidebar__data divider">
    ${
      logoUrl
        ? `<div class="match-sidebar__logo-wrap"><img src="${logoUrl}" alt="${title}"></div>`
        : ''
    } 
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
      <button onclick="onEditMatch()" class="button outlined">
        Edit
      </button>
      <a href="#" onclick = "onDeleteMatch(event)" class="match-sidebar__delete-button delete-button">
        <img src="./img/delete-icon.png" alt="Delete">
        Delete Match
      </a>
    </div>`
}

const renderMatchDetails = () => {
  const matchSidebar = document.getElementById('match-sidebar')

  if (matchSidebar) {
    const matchesForMatchDetails = JSON.parse(localStorage.getItem(LS_MATCHES_KEY))
    const matchDetails = matchesForMatchDetails.find((item) => item.id === params.id)

    if (!matchDetails) {
      matchSidebar.innerHTML = 'Not found the match'
      return
    }

    const htmlMatch = generateMatchDetailsHtml(matchDetails)
    matchSidebar.innerHTML = htmlMatch
  }
}

renderMatchDetails()

// DELETE MATCH -----------------------

const onDeleteMatch = (event) => {
  event.preventDefault()
  if (window.confirm('Do you really want to delete match?')) {
    const matches = JSON.parse(localStorage.getItem(LS_MATCHES_KEY))

    const copyMatches = [...matches]
    const matchIndex = copyMatches.findIndex(({ id }) => id === params.id)

    copyMatches.splice(matchIndex, 1)

    localStorage.setItem(LS_MATCHES_KEY, JSON.stringify(copyMatches))
    parent.location = 'index.html'
  }
}

// EDIT MATCH -----------------------

const onEditMatch = () => {
  editOverlay.style.display = 'block'

  const matches = JSON.parse(localStorage.getItem(LS_MATCHES_KEY))

  const match = matches.find((item) => item.id === params.id)

  const { logoUrl, title, map, description, maxPlayers } = match

  document.getElementById('logoUrl').value = logoUrl
  document.getElementById('title').value = title
  document.getElementById('map').value = map
  document.getElementById('description').value = description
  document.getElementById('maxPlayers').value = maxPlayers
}

const onEditConfirm = (event) => {
  event.preventDefault()

  const matches = JSON.parse(localStorage.getItem(LS_MATCHES_KEY))

  const match = matches.find((item) => item.id === params.id)

  const { value: logoUrl } = document.getElementById('logoUrl')
  const { value: title } = document.getElementById('title')
  const { value: map } = document.getElementById('map')
  const { value: description } = document.getElementById('description')
  const { value: maxPlayers } = document.getElementById('maxPlayers')

  const editMatch = {
    ...match,
    logoUrl,
    title,
    map,
    description,
    maxPlayers,
  }

  const updatedMatches = matches.map((match) => (match.id === params.id ? editMatch : match))

  localStorage.setItem(LS_MATCHES_KEY, JSON.stringify(updatedMatches))

  renderMatchDetails()
  cancelEditMatchModal()
}
//USERS MODAL

const initialUsers = [
  {
    id: guid(),
    playerName: 'Roanokay',
    playerAvatar: './img/users/user-1.png',
    rate: 'Amateur',
    country: 'Latvia',
    lastVisited: null,
    playedHours: 327,
    deletionRequest: true,
  },
  {
    id: guid(),
    playerName: '*Narrow_Victory*',
    playerAvatar: './img/users/user-2.png',
    rate: 'Expert',
    country: 'Poland',
    lastVisited: 3,
    playedHours: 9999,
    deletionRequest: false,
  },
]

if (!JSON.parse(localStorage.getItem(LS_USERS_KEY))) {
  localStorage.setItem(LS_USERS_KEY, JSON.stringify(initialUsers))
}

const localUsers = JSON.parse(localStorage.getItem(LS_USERS_KEY))

// RENDER USERS ----------------------

const generateUserHtml = (user, index) => {
  const { id, playerName, playerAvatar, rate, country, lastVisited, playedHours, deletionRequest } =
    user

  return `<tr class="users__table-row">
  <td>${index + 1}</td>
  <td>
    <div class="users__nickname">
      <div class="users__avatar">
        <img src="${playerAvatar}" alt="${playerName}">
      </div>
      ${playerName}
    </div>
  </td>
  <td>
    <span class="rating-status ${rate.toLowerCase()}">
      ${rate}
    </span>
  </td>
  <td>${country}</td>
  <td>
      <span class="users__status ${!lastVisited ? 'online' : ''}">
      ${lastVisited ? `${lastVisited} h` : 'Online'}</span>
  </td> 
  <td>${playedHours} h</td>
  <td>
  ${
    deletionRequest
      ? `<a href="#" data-userId='${id}' onclick='onDeleteUser(event)' class="delete-button">
    <img src="./img/delete-icon.png" alt="Delete">
    Delete User
  </a>`
      : ''
  }
  </td>
  </tr>`
}

const renderUsers = (users) => {
  const usersList = document.getElementById('users__table')
  const tableBody = usersList.querySelector('tbody')

  if (tableBody) {
    tableBody.innerHTML = ''

    users.forEach((user, index) => {
      const htmlUser = generateUserHtml(user, index)

      tableBody.innerHTML += htmlUser
    })
  }
}
renderUsers(localUsers)

// ADD MATCH ----------------------

const onCreateUser = (event) => {
  event.preventDefault()

  const { value: playerName } = document.getElementById('playerName')
  const { value: playerAvatar } = document.getElementById('playerAvatar')
  const { value: rate } = document.getElementById('rate')
  const { value: country } = document.getElementById('country')

  const user = {
    id: guid(),
    playerName,
    playerAvatar,
    rate,
    country,
    lastVisited: Math.floor(Math.random() * 777),
    playedHours: Math.floor(Math.random() * 777),
    deletionRequest: false,
  }

  const oldUsers = JSON.parse(localStorage.getItem(LS_USERS_KEY))
  const newUsers = [...oldUsers, user]

  localStorage.setItem(LS_USERS_KEY, JSON.stringify(newUsers))

  renderUsers(newUsers)

  cancelCreateUserModal()
}

// DELETE USER -----------------------

const onDeleteUser = (event) => {
  event.preventDefault()

  if (window.confirm('Do you really want to delete this player?')) {
    const users = JSON.parse(localStorage.getItem(LS_USERS_KEY))

    const copyUsers = [...users]

    const userIndex = copyUsers.findIndex(({ id }) => id === event.target.dataset.userid)

    copyUsers.splice(userIndex, 1)
    console.log('🚀 ~ onDeleteUser ~ userIndex', userIndex)

    localStorage.setItem(LS_USERS_KEY, JSON.stringify(copyUsers))

    renderUsers(copyUsers)
  }
}
