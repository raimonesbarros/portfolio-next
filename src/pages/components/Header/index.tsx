import { FC, useEffect } from "react";
import { Link, animateScroll, observer, useRouter, useState } from "~/modules";
import { useStores } from "~/utils";
import { List, X } from "~/utils/assets";
import { links } from "./nav-links";
import {
  BtnMenu,
  HeaderContainer,
  HeaderContent,
  Icon,
  LinkTo,
  Logo,
  Navbar,
  Socials,
} from "./styles";

const Header: FC = () => {
  const navigate = useRouter();
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [themeIcon, setThemeIcon] = useState<Mode>();
  const {
    themeStore: { mode, setTheme },
  } = useStores();

  const navigateToPage = (local: string) => {
    setMenuIsOpen(false);
    navigate.push(local);
    animateScroll.scrollToTop();
  };

  const navigateTo = (local: string) => {
    setMenuIsOpen(false);
    navigate.push(local);
  };

  useEffect(() => {
    setThemeIcon(mode);
  }, [mode]);

  return (
    <HeaderContainer $state={menuIsOpen} onClick={() => setMenuIsOpen(false)}>
      <HeaderContent onClick={(e) => e.stopPropagation()}>
        <Logo
          alt="as letras R, S, e B cercadas pelos simbolos de menor que e barra maior que"
          handleClick={() => navigateToPage("/")}
        />
        <Navbar $state={menuIsOpen}>
          {links.map(({ href, to, content, label }) => {
            return (
              <Link
                key={label}
                href={href}
                to={to}
                smooth
                offset={-76}
                duration={500}
                onClick={() => navigateTo(`${href}`)}
                aria-label={label}
                tabIndex={0}
              >
                {content}
              </Link>
            );
          })}
          <Socials onClick={() => setMenuIsOpen(false)}>
            <LinkTo
              href="https://www.linkedin.com/in/raimones-barros/"
              target="_blank"
              rel="noreferrer"
              aria-label="Ir para perfil de Raimones no Linkedin"
            >
              <Icon
                src="https://icongr.am/devicon/linkedin-plain.svg?size=26&color=45c7af"
                alt="ícone do linkedin"
                title="Perfil no Linkedin"
              />
            </LinkTo>
            <LinkTo
              href="https://github.com/raimonesbarros"
              target="_blank"
              rel="noreferrer"
              aria-label="Ir para perfil de Raimones no Github"
            >
              <Icon
                src="https://icongr.am/fontawesome/github.svg?size=26&color=45c7af"
                alt="ícone do github"
                title="Perfil no Github"
              />
            </LinkTo>
            {themeIcon === "light" ? (
              <Icon
                src="https://icongr.am/feather/moon.svg?size=30&color=333333"
                alt="ícone de lua"
                title="Modo escuro"
                onClick={setTheme}
              />
            ) : (
              <Icon
                src="https://icongr.am/feather/sun.svg?size=30&color=e4e4d5"
                alt="ícone de sol"
                title="Modo claro"
                onClick={setTheme}
              />
            )}
          </Socials>
        </Navbar>
        <BtnMenu aria-label="Menu">
          {menuIsOpen ? (
            <X size={50} weight="bold" onClick={() => setMenuIsOpen(false)} />
          ) : (
            <List size={50} weight="bold" onClick={() => setMenuIsOpen(true)} />
          )}
        </BtnMenu>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default observer(Header);
