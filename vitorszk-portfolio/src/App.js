import React from "react"
import { Container, Title, Name, Job, FadeBlock, Social, Img, TitleTransition, JobTransition } from "./styles"
import GIT from "./assets/GIT.png"
import IN from "./assets/IN.png"
import INSTA from "./assets/INSTA.png"
import OUT from "./assets/OUT.png"

const App = () => {

  const handleClickGIT = () => {
    window.open('https://github.com/vitorszk', '_blank');
  }

  const handleClickLINKEDIN = () => {
    window.open('https://www.linkedin.com/in/vitorszk/', '_blank');
  }

  const handleClickINSTAGRAM = () => {
    window.open('https://www.instagram.com/thatsamuray/', '_blank');
  }

  const handleClickOUTLOOK = () => {
    window.open('mailto:vitor.szk@outlook.com?subject=Subject&body=Body%20goes%20here');
  }

  return (
    <Container>
      <Title>
        <FadeBlock />
        <TitleTransition />
        <JobTransition />
        <Name>Vitor Suzuki</Name>
        <Job>Full Stack Developer</Job>
      </Title>
      <Social className="social">
        <Img onClick={() => handleClickGIT()} id="GitHub" src={GIT} alt="Vitor-GitHub"></Img>
        <Img onClick={() => handleClickLINKEDIN()} id="LinkedIn" src={IN} alt="Vitor-LinkedIn"></Img>
        <Img onClick={() => handleClickINSTAGRAM()} id="Instagram" src={INSTA} alt="Vitor-Instagram"></Img>
        <Img onClick={() => handleClickOUTLOOK()} id="Outlook" src={OUT} alt="Vitor-Outlook"></Img>
      </Social>
    </Container>
  );


}

export default App;
