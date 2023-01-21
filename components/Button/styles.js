import styled, { css } from 'styled-components'
import { darken } from 'polished'

const wrapperModifiers = {
  fullWidth: () => css`
    width: 100%;
  `,
  withIcon: (theme) => css`
    svg {
      width: 1.5rem;
      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,
  outline: (theme) => css`
    background: none;
    color: ${theme.colors.primary};
    border: 0.2rem solid ${theme.colors.primary};
    &:hover {
      color: ${theme.colors.white};
      background: ${theme.colors.primary};
    }
  `,
  secondary: (theme) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.primary};
    border: 0.2rem solid ${theme.colors.white};
    &:hover {
      color: ${theme.colors.white};
      background: ${theme.colors.primary};
    }
  `,
  minimal: (theme) => css`
    background: none;
    color: ${theme.colors.primary};
    &:hover {
      color: ${darken(0.1, theme.colors.primary)};
    }
  `,
  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
      filter: saturate(30%);
    }
  `
}

export const Wrapper = styled.button`
  ${({ theme, fullWidth, hasIcon, outline, minimal, disabled, secondary }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 4.8rem;
    border: 0;
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    font-family: ${theme.font.family};
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
    text-decoration: none;
    cursor: pointer;
    
    &:hover {
      background: ${minimal
      ? 'none'
      : `${darken(0.1, theme.colors.primary)}`};
    }
    ${!!fullWidth && wrapperModifiers.fullWidth()};
    ${!!hasIcon && wrapperModifiers.withIcon(theme)};
    ${!!outline && wrapperModifiers.outline(theme)};
    ${!!minimal && wrapperModifiers.minimal(theme)};
    ${!!secondary && wrapperModifiers.secondary(theme)};
    ${disabled && wrapperModifiers.disabled()};
  `}
`