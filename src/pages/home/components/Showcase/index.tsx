import { FC, useEffect, useState } from "react";
import { observer } from "~/modules";
import { MainTitle } from "~/pages/styles";
import { useScroll, useStores } from "~/utils";
import { dummy } from "~/utils/assets";
import {
  BgImage,
  ShowcaseContainer,
  ShowcaseDescription,
  ShowcaseSection,
  Strong,
  Text,
  ToDown,
} from "./styles";

const Showcase: FC = () => {
  const [theme, setTheme] = useState<Mode>();
  const { scrollY } = useScroll();
  const {
    themeStore: { mode },
  } = useStores();

  useEffect(() => {
    setTheme(mode);
  }, [mode]);

  return (
    <ShowcaseSection id="showcase">
      <MainTitle>Portfólio de desenvolvedor front-end</MainTitle>
      <ShowcaseContainer $light={theme === "light"} $top={scrollY < 100}>
        <BgImage
          src={dummy}
          alt="Imagem de fundo: homem sentado de frente para uma tela de computador"
          priority
        />
        <ShowcaseDescription>
          <Text>Meu nome é</Text>
          <Text>
            <Strong>Raimones,</Strong>
          </Text>
          <Text>eu sou</Text>
          <Text>
            <Strong>Desenvolvedor</Strong>
          </Text>
          <Text>e esse é meu portfólio</Text>
          <Text>
            <Strong>Front-end.</Strong>
          </Text>
        </ShowcaseDescription>
        <ToDown />
      </ShowcaseContainer>
    </ShowcaseSection>
  );
};

export default observer(Showcase);
