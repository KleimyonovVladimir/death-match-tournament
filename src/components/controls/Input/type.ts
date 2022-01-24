export interface IProps {
  className?: string
  id: string
  label: string
  type?: string
  placeholder: string
  isTextarea?: boolean
  value?: string | number
  required?: boolean
  name: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}
