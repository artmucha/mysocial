import styled, { css } from 'styled-components'
import Link from 'next/link'

export const Wrapper = styled(Link)`
  ${({ theme, color }) => css`
    color: ${theme.colors[color]};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
  `}
`