import React from 'react'
import { Link } from 'react-router-dom'

import { AuthCardWrapper, AuthFooter, ContentWrapper, HeaderWrapper, Title, Wrapper } from './styles'

interface HeaderProps {
  title?: string
  subtitle?: string
}

interface FooterProps {
  description: string
  link: string
  linkText: string
}

interface AuthComposition {
  Header: React.FC<HeaderProps>
  Card: React.FC
  Footer: React.FC<FooterProps>
}

export const Auth: React.FC & AuthComposition = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

const AuthCard: React.FC = ({ children }) => {
  return (
    <AuthCardWrapper>
      <ContentWrapper>{children}</ContentWrapper>
    </AuthCardWrapper>
  )
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <HeaderWrapper>
      {title && <Title>{title}</Title>}
      {subtitle && <p>{subtitle}</p>}
    </HeaderWrapper>
  )
}

const Footer: React.FC<FooterProps> = ({ description, link, linkText }) => {
  return (
    <AuthFooter>
      <p>{description}</p> <Link to={link}>{linkText}</Link>
    </AuthFooter>
  )
}

Header.defaultProps = {
  title: '',
  subtitle: '',
}

Auth.Card = AuthCard
Auth.Header = Header
Auth.Footer = Footer
