import { IAvatar } from './type';
import './style.scss';

const Avatar = ({ url, className }: IAvatar) => {
  return <img src={url} alt="Avatar" className={className} />;
};

export default Avatar;
