import { IProps } from './types'

import './style.scss'

const Button = ({ text }: IProps) => {
  return <button className="button button_primary">{text}</button>
}

export default Button
