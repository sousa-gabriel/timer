import { HeaderContainer, HeaderIcons } from "./styles";
import logo from "../../assets/logo-ignite.svg";
import { Scroll, Timer } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <HeaderIcons>
        <NavLink to="/" title="timer">
          <Timer size={24} />
        </NavLink>

        <NavLink to="/history" title="history">
          <Scroll size={24} />
        </NavLink>
      </HeaderIcons>
    </HeaderContainer>
  );
}
