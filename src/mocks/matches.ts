import { IMatch } from 'types/matches'
import { guid } from 'helpers/guid'

export const initialMatches: IMatch[] = [
  {
    id: guid(),
    creator: 'Vladimir',
    logoUrl:
      'https://papik.pro/uploads/posts/2021-11/thumbs/1636169307_39-papik-pro-p-logotip-komandi-foto-39.png',
    date: 'Sep 01 at 09:00 PM',
    title: 'CS:GO Eleague Premier 2021',
    rate: 'Novice',
    map: 'Inferno',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
    players: [],
    maxPlayers: 24,
  },
  {
    id: guid(),
    creator: 'Gribnik',
    logoUrl: 'https://ice-team.3dn.ru/bez_imeni-1.png',
    date: 'Nov 21 at 08:00 PM',
    title: 'Exterme League Cups',
    rate: 'Amateur',
    map: 'Dust',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
    players: [],
    maxPlayers: 8,
  },
]
