import { TUserStatus } from 'types/status'
import { IUser } from 'types/users'

export interface IMatch {
  id: string
  creator?: string
  logoUrl: string
  date: string
  title: string
  rate: TUserStatus
  map: string
  description: string
  players: IUser[]
  maxPlayers: number
}
