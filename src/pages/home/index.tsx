import { FC, useEffect } from "react";
import { NextSeo, observer } from "~/modules";
import { JsonLd, SEOMain, useStores } from "~/utils";
import { BackToTop, Footer, Header } from "../components";
import { About, Contact, Showcase, Skills } from "./components";
import Projects from "./components/projects";
import { HomeContainer } from "./styles";

const Home: FC = () => {
  const {
    firestoreProvider: {
      fetchClientProvider,
      currentProjectId,
      changeCurrentProject,
      projectsData,
    },
  } = useStores();

  useEffect(() => {
    fetchClientProvider();
  }, []);

  return (
    <HomeContainer>
      <JsonLd />
      <NextSeo {...SEOMain} />
      <Header />
      <Showcase />
      <Skills />
      {projectsData[0] && (
        <Projects
          projectsData={projectsData}
          changeCurrentProject={changeCurrentProject}
          currentProjectId={currentProjectId}
        />
      )}
      <About />
      <Contact />
      <Footer />
      <BackToTop />
    </HomeContainer>
  );
};

export default observer(Home);
