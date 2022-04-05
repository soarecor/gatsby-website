import React, {useState} from "react"
import styled from "styled-components"
import { StyledLink, devices } from "./base"
import { navItems } from "../content/content"


const Aside = styled.aside`
  display: none;
  grid-template: 1fr;
  /* border: 10px solid red; */
  justify-content: space-between;
  background: var(--sidebarBg);
  padding: 2rem;
  color: var(--fontSecondary);
  gap: 3rem;
  h1 {
    align-self: end;
  }
  &.showSidebarOnMobile {
    display: grid;
    transition: all 0.2s ease;
  }
  @media ${devices.tablet} {
    display: grid;
    grid-template-rows: 40% 20% 1fr;
    justify-content: center;
    gap: 1rem;
    height: inherit;
    .logolink {
    align-self: center;
    }
  }
`

const Nav = styled.nav`
  display: flex;
  flex-flow: column nowrap;
`

const LogoLink = styled(StyledLink)`
  display: none;
  transition: all 0.1s ease 0s;
  text-transform: uppercase;
  font-size: 0.8rem;
  color: var(--fontPrimary);
  --wght: "wght" 683;
  --casl: "CASL" 0;
  --slnt: "slnt" -4;
  &:hover {
    color: var(--fontSecondary);
    text-decoration: none;
    --casl: "CASL" 0;
    --slnt: "slnt" 0;
    --wght: "wght" 550;
  }
  @media ${devices.tablet} {
      display: block;
  }
`

const MobileLogoLink = styled(StyledLink)`
transition: all 0.1s ease 0s;
text-transform: uppercase;
font-size: 1.3rem;
color: var(--fontPrimary);
--wght: "wght" 683;
--casl: "CASL" 0;
--slnt: "slnt" -4;
&:hover {
  color: var(--fontSecondary);
  text-decoration: none;
  --casl: "CASL" 0;
  --slnt: "slnt" 0;
  --wght: "wght" 550;
}
`

const NavLink = styled(StyledLink)`
  margin-bottom: 0.5rem;
  &:hover,
  &:focus,
  &.isActive {
    color: var(--fontPrimary);
  }
  &.isCreate {
    @media ${devices.mobileS} {
      display: none;
    }
    @media ${devices.laptop} {
      display: block;
    }
  }
`

const HamburgerMenu = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
font-size: 1rem;
padding: 1rem;
background-color: var(--sidebarBg);
max-height: 4rem;
@media ${devices.tablet} {
  display: none;
}
`
const Button = styled.button`
  height: 100%;
  padding: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: 1px solid var(--fontSecondary);
  border-radius: 3px;
  color: var(--fontSecondary);
  --casl: "CASL" 0;
  --wght: "wght" 400;
  &:hover {
    color: var(--fontPrimary);
    --slnt: "slnt" -15;
    --wght: "wght" 800;
    & .helpText {
      text-decoration: none;
    }
  }
  &:focus {
    outline: 3px solid var(--other);
  }
`

const Sidebar = ({ siteTitle }) => {
  const [showSidebarOnMobile, setShowSidebarOnMobile] = useState(false)
  const isBrowser = () => typeof window !== "undefined"
  const pathName =
    typeof window !== "undefined" ? isBrowser() && window.location.pathname : "/"
  const mobilePath = pathName === "/" ? "MENU" : pathName.replace(/\//g, '');
  const isCurrentRoute = routeName => routeName === pathName && "isActive "
  const isCreate = (routeName) => routeName === 'create' && " isCreate"

return (
    <>
    <HamburgerMenu> 
      <h1>
        <MobileLogoLink to="/">{siteTitle}</MobileLogoLink>
      </h1>
      <Button onClick={() => setShowSidebarOnMobile(!showSidebarOnMobile)}> {mobilePath} </Button>
    </HamburgerMenu>
    <Aside className={showSidebarOnMobile && "showSidebarOnMobile"}>
        <LogoLink className="logolink" to="/"><h1>{siteTitle}</h1></LogoLink>
        <Nav>
          {navItems.map((navItem, index) => (
            <NavLink
              key={index}
              className={isCurrentRoute(navItem.path) + isCreate(navItem.label)} 
              to={navItem.path}
            >
              {navItem.label}
            </NavLink>
          ))}
          </Nav>
    </Aside>
    </>
)
}

export default Sidebar