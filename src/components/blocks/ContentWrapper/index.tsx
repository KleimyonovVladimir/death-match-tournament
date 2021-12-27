import { IProps } from './type'

const ContentWrapper = ({ children }: IProps) => {
  return (
    <div className="content">
      <div className="container">{children}</div>
    </div>
  )
}
export default ContentWrapper
