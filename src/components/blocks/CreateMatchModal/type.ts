import { IMatch } from 'types/matches'

export interface IProps {
  title: string
  open: boolean
  setMatches: (value: React.SetStateAction<IMatch[]>) => void
  onClose: () => void
}
