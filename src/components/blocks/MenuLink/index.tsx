import { NavLink } from 'react-router-dom'

import { IProps } from './types'

const MenuLink = ({ icon, title, link, classes }: IProps) => {
  return (
    <li className={classes?.li}>
      <NavLink to={link} className={classes?.link}>
        <img src={icon} alt={title} className={classes?.image} />
        {title}
      </NavLink>
    </li>
  )
}

export default MenuLink
