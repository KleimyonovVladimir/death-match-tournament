import { IProps } from 'components/blocks/CreateMatchModal/type'
import { localStorageKeys } from 'constants/localStorage'
import { IMatchBase } from 'types/matches'
import Button from 'components/controls/Button'
import Input from 'components/controls/Input'
import { guid } from 'helpers/guid'
import { useState } from 'react'

import './style.scss'

const initialMatch = {
  logoUrl: '',
  title: '',
  map: '',
  description: '',
  maxPlayers: 0,
}

const CreateMatchModal = ({ title, open, onClose, setMatches }: IProps) => {
  const [match, setMatch] = useState<IMatchBase>(initialMatch)

  const handleField = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = event.target

    setMatch(prevState => {
      return {
        ...prevState,
        [id]: value,
      }
    })
  }

  const handleApply = (event: React.SyntheticEvent) => {
    event.preventDefault()

    const newMatch = {
      ...match,
      id: guid(),
      creator: 'Gribnik',
      date: 'Sep 01 at 09:00 PM',
      rate: 'Novice',
      players: [],
      maxPlayers: Number(match.maxPlayers),
    }

    const oldMatches = JSON.parse(localStorage.getItem(localStorageKeys.matches) || '[]')
    const newMatches = [newMatch, ...oldMatches]

    localStorage.setItem(localStorageKeys.matches, JSON.stringify(newMatches))

    setMatches(newMatches)

    onClose()
  }

  return (
    <div id="create-overlay" className={open ? 'overlay open' : 'overlay'}>
      <div className="modal">
        <div className="modal__title">{title}</div>
        <span className="modal__cross" onClick={onClose}>
          &times;
        </span>
        <form onSubmit={handleApply}>
          <div className="modal__match-form">
            <Input
              id="title"
              label="Match name:"
              type="text"
              placeholder="Enter the match name"
              onChange={handleField}
              value={match.title}
              required
            />
            <Input
              id="map"
              label="Map:"
              type="text"
              placeholder="Enter the map name"
              onChange={handleField}
              value={match.map}
            />
            <Input
              id="logoUrl"
              label="Match logo:"
              type="text"
              placeholder="Upload the match logo"
              onChange={handleField}
              value={match.logoUrl}
            />
            <Input
              id="maxPlayers"
              label="Number of players:"
              type="number"
              placeholder="Enter the number of players"
              onChange={handleField}
              value={match.maxPlayers}
            />
            <Input
              className="description"
              id="description"
              label="Description:"
              placeholder="Enter the description of the match"
              isTextarea
              onChange={handleField}
              value={match.description}
            />
          </div>
          <div className="modal__buttons">
            <Button text="Cancel" type="button" isCancel onClick={onClose} />
            <Button text="Create" type="submit" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateMatchModal
