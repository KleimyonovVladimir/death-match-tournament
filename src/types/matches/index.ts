import { TUserStatus } from 'types/status'
import { IUser } from 'types/users'

export interface IMatchBase {
  map: string
  logoUrl: string
  title: string
  description: string
  maxPlayers: number
}

export interface IMatch extends IMatchBase {
  id: string
  date: string
  rate: TUserStatus
  players: IUser[]
  creator?: string
}
