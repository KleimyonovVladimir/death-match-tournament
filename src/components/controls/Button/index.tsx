import { IButton } from './types';
import './style.scss';

const Button = ({ text }: IButton) => {
  return <button className="button button_primary header__create-button">{text}</button>;
};

export default Button;
