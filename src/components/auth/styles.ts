import styled from 'styled-components'
import { Card } from '@/ui-components'

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

export const AuthCardWrapper = styled(Card)`
  width: 500px;
  max-width: 100%;
  height: auto;
  margin-top: 150px;
`

export const ContentWrapper = styled.div`
  padding: 20px;
`

export const HeaderWrapper = styled.div`
  text-align: center;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.gray};
  p {
    font-size: 1.4rem;
  }
`

export const Title = styled.h4`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 10px;
`

export const AuthFooter = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray};
  font-size: 1.4rem;
  p {
    margin-right: 5px;
  }
`
