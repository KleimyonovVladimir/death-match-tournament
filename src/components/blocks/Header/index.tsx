import { Link } from 'react-router-dom'

import RatingStatus from 'components/blocks/RatingStatus'
import MenuLink from 'components/blocks/MenuLink'
import Avatar from 'components/blocks/Avatar'
import avatarImage from 'assets/avatars/avatar1.png'
import profileIcon from 'assets/profile.png'
import earthIcon from 'assets/earth.png'
import usersIcon from 'assets/users.png'
import mainLogo from 'assets/logo.png'
import starIcon from 'assets/star.png'

import './style.scss'

const Header = () => {
  const menuLinkClasses = {
    li: 'header__navigation-item',
    link: 'header__navigation-link',
    image: 'header__navigation-icon',
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <Link to="/" className="header__logo logo">
            <img src={mainLogo} alt="Logo" />
          </Link>
          <nav className="header__navigation">
            <ul className="header__navigation-list">
              <MenuLink icon={earthIcon} title="All matches" link="/" classes={menuLinkClasses} />
              <MenuLink
                icon={starIcon}
                title="My matches"
                link="/my-matches"
                classes={menuLinkClasses}
              />
              <MenuLink icon={usersIcon} title="Users" link="/users" classes={menuLinkClasses} />
              <MenuLink
                icon={profileIcon}
                title="Profile"
                link="/profile"
                classes={menuLinkClasses}
              />
            </ul>
          </nav>
          <div className="header__profile">
            <RatingStatus status="Organizer" />
            <Avatar url={avatarImage} className="header__profile-image" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
