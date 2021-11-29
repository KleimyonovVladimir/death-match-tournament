import { IMenuLink } from './types';
import { Link } from 'react-router-dom';
import './style.scss';

const MenuLink = ({ imgLink, title, link }: IMenuLink) => {
  return (
    <li className="navigation__item">
      <Link to={link} className=" navigation__link">
        <img src={imgLink} alt="Earth" className="navigation__icon" />
        {title}
      </Link>
    </li>
  );
};

export default MenuLink;
