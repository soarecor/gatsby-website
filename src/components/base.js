import styled from "styled-components"
import { Link } from "gatsby"

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
}

export const devices = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
}

export const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  margin: 1rem 0.5rem;
  color: var(--fontPrimary);
  max-width: 1440px;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 0.5rem;

  @media ${devices.tablet} {
    padding: 2rem;
  }

  @media ${devices.laptop} {
    grid-template-columns: 30% 1fr;
    margin: 0;
  }

  .padded-bottom {
    margin-bottom: 2rem;
  }
`

export const SingleColumnMain = styled(Main)`
  margin: 0;
  margin: 1rem 0.5rem;
  @media ${devices.laptop} {
    grid-template-columns: 1fr;
    margin: 0;
  }
`

export const SingleColumn = styled.div`
  display:flex;
  flex-direction: column;
`

export const LinkButton = styled.span`
  &:hover {
    color: var(--other);
    border-color: var(--fontPrimary);
  }
`

export const StyledLink = styled(Link)`
  color: var(--fontSecondary);
  --slnt: "slnt" 0;
  --wght: "wght" 400;
  --mono: "MONO" 1;
  padding-top: 3px;
  text-transform: lowercase;
  transition: all 0.1s ease 0s;
  width: max-content;

  &:hover,
  &:focus,
  &.isActive {
    --wght: "wght" 500;
    --slnt: "slnt" -6;
    --casl: "CASL" 0;
    text-decoration: none;
  }

  &:focus {
    outline: 3px solid var(--other);
  }
`

export const StyledA = styled.a`
  color: var(--fontSecondary);
  --mono: "MONO" 1;
  --slnt: "slnt" 0;
  --wght: "wght" 400;
  transition: all 0.1s ease 0s;

  &:hover,
  &:focus,
  &.isActive {
    --wght: "wght" 800;
    --slnt: "slnt" -15;
    --casl: "CASL" 1;
    text-decoration: none;
  }

  &:focus {
    outline: 3px solid var(--other);
  }
`

export const NavSectionHeading = styled.p`
  color: var(--fontPrimary);
  margin-bottom: 0.5rem;
  font-size: 2rem;
  line-height: 2rem;
  --wght: "wght" 900;
  --mono: "MONO" 0;
  --casl: "CASL" 0.5;
`
