import { IAvatar } from './type';
import './style.scss';

const Avatar = ({ avatarUrl }: IAvatar) => {
  return <img src={avatarUrl} alt="Avatar" className="profile__image" />;
};

export default Avatar;
