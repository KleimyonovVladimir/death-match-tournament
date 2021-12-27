import { IProps } from './type'

const Avatar = ({ url, className }: IProps) => {
  return <img src={url} alt="Avatar" className={className} />
}

export default Avatar
