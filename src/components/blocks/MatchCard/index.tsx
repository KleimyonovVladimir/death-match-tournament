import RatingStatus from 'components/blocks/RatingStatus'

import { IProps } from './type'

import './style.scss'

const MatchCard = ({ match }: IProps) => {
  const { logoUrl, date, title, rate, map, description, players, maxPlayers } = match

  return (
    <li className="match">
      <div className="match__data divider">
        <div className="match__logo-wrap">
          <img src={logoUrl} alt={title} />
        </div>
        <div className="match__info">
          <span className="match__date">{date}</span>
          <h3 className="match__title">{title}</h3>
          <RatingStatus status={rate} />
          <div className="match__map">
            Map: <span>{map}</span>
          </div>
        </div>
      </div>
      <div className="match__description">{description}</div>
      <div className="match__footer">
        <div className="match__players">
          {players.length}/{maxPlayers} Signed
        </div>
      </div>
    </li>
  )
}

export default MatchCard
