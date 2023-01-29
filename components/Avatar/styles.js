import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme, size }) => css`
		position: relative;
		overflow: hidden;
		border-radius: 50%;
		border: 0.2rem solid ${theme.colors.white};
		width: calc(${theme.spacings[size]} * 2);
		height: calc(${theme.spacings[size]} * 2);
  `}
`