import styled from 'styled-components'

import { Spacing } from '@/styled/spacing'

export const Wrapper = styled.div.attrs(() => ({
  className: 'search-input-wrapper',
}))`
  position: relative;
  ${Spacing};
`

export const SearchIconContainer = styled.div.attrs(() => ({
  className: 'search-icon-container',
}))`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 100%;
  border-top-right-radius: ${({ theme }) => theme.radius.md};
  border-bottom-right-radius: ${({ theme }) => theme.radius.md};
  background-color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`
