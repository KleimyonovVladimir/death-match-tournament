export interface IProps {
  className?: string
  id: string
  label: string
  type?: string
  placeholder: string
  htmlFor?: string
  isTextarea?: boolean
  value?: string | number
  required?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}
