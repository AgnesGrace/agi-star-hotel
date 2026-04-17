import { NavLink } from "react-router";
import styled from "styled-components";
import { IoMdHome } from "react-icons/io";
import { MdBedroomParent, MdAccountCircle } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { FaBookmark, FaUsers } from "react-icons/fa";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-200);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-primary-600);
  }
`;

export default function MainNav() {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/dashboard">
            {" "}
            <IoMdHome />
            <span>Home</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/rooms">
            <MdBedroomParent />
            <span>Rooms</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/users">
            <FaUsers />
            <span>Users</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/bookings">
            <FaBookmark />
            <span>Bookings</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/account">
            <MdAccountCircle />
            <span>Account</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/settings">
            <IoIosSettings />
            <span>Settings</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}
