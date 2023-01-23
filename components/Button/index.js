import { forwardRef } from 'react'
import * as S from './styles'

const Button = (
  {
    children,
    icon,
    fullWidth = false,
    outline = false,
    minimal = false,
    background = 'primary',
    color = 'white',
    ...props
  },
  ref
) => (
  <S.Wrapper
    fullWidth={fullWidth}
    hasIcon={!!icon}
    outline={outline}
    minimal={minimal}
    background={background}
    color={color}
    ref={ref}
    {...props}
  >
    {icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default forwardRef(Button)