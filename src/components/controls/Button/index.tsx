import { IButton } from './types';
import './style.scss';

const Button = ({ text }: IButton) => {
  return <button className="button button_primary">{text}</button>;
};

export default Button;
