import { localStorageKeys } from 'constants/localStorage'
import { initialMatches } from 'mocks/matches'
import { IMatch } from 'types/matches'

export const getMatches = (): Promise<IMatch[]> => {
  if (!localStorage.getItem(localStorageKeys.matches)) {
    localStorage.setItem(localStorageKeys.matches, JSON.stringify(initialMatches))
  }

  return new Promise(resolve => {
    const matches: IMatch[] = JSON.parse(localStorage.getItem(localStorageKeys.matches) || '[]')

    setTimeout(() => resolve(matches), 800)
  })
}
