import { useEffect, useState } from 'react'

import { getMatches } from 'api/matches/getMatches'
import MatchCard from 'components/blocks/MatchCard'
import { Loader } from 'components/blocks/Loader'
import { IMatch } from 'types/matches'

import './style.scss'

const AllMatches = () => {
  const [matches, setMatches] = useState<IMatch[]>([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    getMatches()
      .then(result => setMatches(result))
      .catch(error => console.log(error))
      .finally(() => setLoading(false))
  }, [])

  return isLoading ? (
    <Loader />
  ) : (
    <div className="matches">
      <ul className="matches__list">
        {matches.map(match => (
          <MatchCard match={match} key={match.id} />
        ))}
      </ul>
    </div>
  )
}
export default AllMatches
