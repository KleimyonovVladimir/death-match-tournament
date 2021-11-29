import { NavLink } from 'react-router-dom';
import { IMenuLink } from './types';
import './style.scss';

const MenuLink = ({ icon, title, link }: IMenuLink) => {
  return (
    <li className="navigation__item">
      <NavLink to={link} className="navigation__link">
        <img src={icon} alt={title} className="navigation__icon" />
        {title}
      </NavLink>
    </li>
  );
};

export default MenuLink;
