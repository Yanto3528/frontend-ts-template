import styled from 'styled-components'

import { ISpacing, Spacing } from '@/styled/spacing'

export const Wrapper = styled.div<ISpacing>`
  background-color: white;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.boxShadow.primary};
  ${Spacing};
`
