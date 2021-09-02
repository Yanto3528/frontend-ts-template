import { css } from 'styled-components'

export interface ISpacing {
  m?: string
  mt?: string
  mb?: string
  mr?: string
  ml?: string
  p?: string
  pt?: string
  pb?: string
  pr?: string
  pl?: string
}

export const Spacing = css<ISpacing>`
  margin: ${({ m }) => m};
  margin-top: ${({ mt }) => mt};
  margin-bottom: ${({ mb }) => mb};
  margin-right: ${({ mr }) => mr};
  margin-left: ${({ ml }) => ml};
  padding: ${({ p }) => p};
  padding-top: ${({ pt }) => pt};
  padding-bottom: ${({ pb }) => pb};
  padding-right: ${({ pr }) => pr};
  padding-left: ${({ pl }) => pl};
`
