const matches = [
  {
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
    logoUrl: "./img/matches/logo-1.png",
    date: "Oct 01 at 9:00 PM",
    title: "CS:GO Eleague Premier",
    rate: "Amateur",
    map: "Dust",
    description: "It is a t",
    players: [1, 2, 1, 1, 0, 1,],
    maxPlayers: 8
  }
]

const generateMatchHtml = (match) => {
  const { logoUrl, date, title, rate, map, description, players, maxPlayers } = match

  return `
  <li class="match">
    <div class="match__data divider">
      ${logoUrl ? `<div class="match__logo-wrap"><img src="${logoUrl}" alt="${title}"></div>` : ''}
      <div class="match__info">
        <span class="match__date">${date}</span>
        <h3 class="match__title"><a href="match-details.html">${title}</a></h3>
        <div class="rating-status ${rate.toLowerCase()}">${rate}</div>
        <div class="match__map">Map: <span>${map}</span></div>
      </div>
    </div>
    <div class="match__description">${description}</div>
    <div class="match__footer">
      <div class="match__players">${(players || []).length}/${maxPlayers} Signed</div>
      <a href="match-details.html" class="match__details-arrow">
        <img src="./img/arrow-right.png" alt="Arrow Right">
      </a>
    </div>
  </li>`
}

const matchList = document.getElementById('matches__list')

if (matchList) {
  matches.forEach((match) => {
    const htmlMatch = generateMatchHtml(match)

    matchList.insertAdjacentHTML('beforeend', htmlMatch)
  })
}

const onMatchCreate = (event) => {
  event.preventDefault();

  const { value: logoUrl } = document.getElementById('logoUrl')
  const { value: title } = document.getElementById('title')
  const { value: map } = document.getElementById('map')
  const { value: description } = document.getElementById('description')
  const { value: maxPlayers } = document.getElementById('maxPlayers')

  const match = {
    logoUrl,
    date: "Sep 01 at 09:00 PM",
    title,
    rate: "Novice",
    map,
    description,
    players: [0, 12, 3, 0],
    maxPlayers
  }
  console.log("🚀 ~ onMatchCreate ~ match", match)
}


// 1. Получить все поля
// 2. Создать объект match, в котором буду все новые поля + поля по умолчанию
// 3. Вывести в консоль новый объект
// 4. Положить новый элемент в массив matches (spread) 
// 5*. Обернуть перебор цикла 50-56 в функцию