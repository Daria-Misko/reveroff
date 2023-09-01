import { NavLink, NavList, Navigation } from './Header.styles';

export const Header = () => {
  return (
    <Navigation>
      <NavList>
        <NavLink>Головна</NavLink>
        <NavLink>Майстри</NavLink>
        <NavLink>Ціна</NavLink>
      </NavList>
      <NavLink>REVEROFF</NavLink>
      <NavList>
        <NavLink>Відгуки</NavLink>
        <NavLink>Контакти</NavLink>
        <NavLink>Про нас</NavLink>
      </NavList>
    </Navigation>
  );
};
