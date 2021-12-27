import { NavLink } from 'react-router-dom'

import { IProps } from './types'

const MenuLink = ({ icon, title, link }: IProps) => {
  return (
    <li className="header__navigation-item">
      <NavLink to={link} className="header__navigation-link">
        <img src={icon} alt={title} className="header__navigation-icon" />
        {title}
      </NavLink>
    </li>
  )
}

export default MenuLink
