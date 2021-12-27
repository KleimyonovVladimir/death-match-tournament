import { TUserStatus } from 'types/status'

export interface IUser {
  id: string
  name: string
  avatar: string
  rate: TUserStatus
  country: string
  lastVisited: number | null
  playedHours: number
  deletionRequest: boolean
}
