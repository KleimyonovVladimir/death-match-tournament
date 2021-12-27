import { IProps } from './type'

import './style.scss'

const RatingStatus = ({ status }: IProps) => {
  return <div className={`rating-status rating-status_${status.toLowerCase()}`}>{status}</div>
}

export default RatingStatus
