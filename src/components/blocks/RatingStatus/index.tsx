import { IRatingStatus } from './type';
import './style.scss';

const RatingStatus = ({ status }: IRatingStatus) => {
  return <div className={`rating-status ${status.toLowerCase()} profile__role`}>{status}</div>;
};

export default RatingStatus;
