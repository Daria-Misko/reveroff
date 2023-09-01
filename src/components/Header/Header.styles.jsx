import { styled } from 'styled-components';

const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const NavLink = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: white;
`;

const NavList = styled.ul`
  display: flex;
  gap: 80px;
  flex-direction: row;
`;

export { NavLink, NavList, Navigation };
