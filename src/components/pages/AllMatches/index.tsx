import { useEffect, useState } from 'react'

import { useModalState } from 'hooks/useModalState'
import { getMatches } from 'api/matches/getMatches'
import CreateMatchModal from 'components/blocks/CreateMatchModal'
import MatchCard from 'components/blocks/MatchCard'
import { Loader } from 'components/blocks/Loader'
import Button from 'components/controls/Button'
import { IMatch } from 'types/matches'

import './style.scss'

const AllMatches = () => {
  const [matches, setMatches] = useState<IMatch[]>([])
  const [isLoading, setLoading] = useState(true)

  const { isOpen, onOpen, onClose } = useModalState()

  useEffect(() => {
    getMatches()
      .then(result => setMatches(result))
      .catch(error => console.log(error))
      .finally(() => setLoading(false))
  }, [])

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <div className="header__actions">
        <Button text="Create" type="button" onClick={onOpen} />
      </div>
      <div className="matches">
        <ul className="matches__list">
          {matches.map(match => (
            <MatchCard match={match} key={match.id} />
          ))}
        </ul>
      </div>
      <CreateMatchModal
        title="Create new Match"
        open={isOpen}
        onClose={onClose}
        setMatches={setMatches}
      />
    </>
  )
}
export default AllMatches
