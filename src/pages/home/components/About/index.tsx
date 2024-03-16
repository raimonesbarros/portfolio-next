import { FC } from "react";
import { handleCvDownload } from "~/infra";
import { Subtitle } from "~/pages/components";
import { FilePdf, me } from "~/utils";
import {
  AboutContainer,
  AboutContent,
  AboutSection,
  BgImage,
  Button,
  Strong,
  Text,
} from "./styles";

const About: FC = () => (
  <AboutSection id="about">
    <AboutContainer>
      <Subtitle bold="Sobre mim" normal="um pouco" reverse />
      <BgImage src={me} alt="imagem de fundo: Foto de Raimones" />
      <AboutContent>
        <Text>
          Eu sou o <Strong>Raimones</Strong>, tenho{" "}
          <Strong>{new Date().getFullYear() - 1995} anos</Strong> de idade. Sou{" "}
          <Strong>Desenvolvedor front-end</Strong> há{" "}
          <Strong>{new Date().getFullYear() - 2021} anos</Strong> me
          especializando em <Strong>ReactJs</Strong> e{" "}
          <Strong>Typescript</Strong>.
          <br />
          <br />
          Anteriormente <Strong>atuei</Strong> no <Strong>comércio</Strong> por
          cerca de <Strong>10 anos</Strong>. E por ser um{" "}
          <Strong>entusiasta de tecnologia</Strong>, optei pela{" "}
          <Strong>transição de carreira</Strong>.
          <br />
          <br />
          Desde 2023, <Strong>faço parte</Strong> do time de desenvolvedores da{" "}
          <Strong> Kothe S.A</Strong> e também <Strong>contribuo</Strong>{" "}
          significativamente na <Strong>InnovFlow</Strong>, uma{" "}
          <Strong>startup</Strong> do ecossistema <Strong>CerradoTech</Strong>.
          Onde tenho tido a oportunidade de colaborar em{" "}
          <Strong>projetos visionários</Strong>.
          <br />
          <Button onClick={handleCvDownload}>
            <FilePdf size={25} />
            CURRICULUM
          </Button>
        </Text>
      </AboutContent>
    </AboutContainer>
  </AboutSection>
);

export default About;
