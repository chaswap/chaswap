import React from 'react'
import styled from 'styled-components'
import TranslatedText from '../TranslatedText'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledAbsoluteLink href="https://chaswap.finance">
        <TranslatedText translationId={2}>Home</TranslatedText>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://chastable.com/">
        <TranslatedText translationId={4}>Chastable</TranslatedText>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://cha.farm/">Chafarms</StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://chaswap.com/#/swap" className="active">
        <TranslatedText translationId={8}>Chaswap</TranslatedText>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://chaswap.info/">Analytics</StyledAbsoluteLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  font-size: 20px;
  line-height: 45px;
  font-weight: 500;
  @media (max-width: 600px) {
    display: none;
  }
`

const StyledAbsoluteLink = styled.a`
  color: #12aab5;
  padding-left: 10px;
  padding-right: 10px;
  text-decoration: none;
  &:hover {
    color: #452a7a;
  }
  &.active {
    color: #452a7a;
  }
  @media (max-width: 400px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`

export default Nav
