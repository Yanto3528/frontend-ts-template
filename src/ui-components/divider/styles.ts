import styled from 'styled-components'

import { DividerProps } from './index'

export const DividerWrapper = styled.div<DividerProps>`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.lightgray2};
  margin: ${({ m }) => m || '10px 0'};
`
