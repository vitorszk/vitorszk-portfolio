import React, { useEffect } from "react"
import { Container, Title, Name, Job, FadeBlock, Social, Img, TitleTransition, JobTransition } from "./styles"
import GIT from "./assets/GIT.png"
import IN from "./assets/IN.png"
import INSTA from "./assets/INSTA.png"
import OUT from "./assets/OUT.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {

  useEffect(() => {
    AOS.init({})
  }, [])

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
        <Job>Full-Stack Web Developer</Job>
      </Title>
      <Social className="social">
        <Img onClick={() => handleClickGIT()} id="GitHub" src={GIT} alt="Vitor-GitHub"></Img>
        <Img onClick={() => handleClickLINKEDIN()} id="LinkedIn" src={IN} alt="Vitor-LinkedIn"></Img>
        <Img onClick={() => handleClickINSTAGRAM()} id="Instagram" src={INSTA} alt="Vitor-Instagram"></Img>
        <Img onClick={() => handleClickOUTLOOK()} id="Outlook" src={OUT} alt="Vitor-Outlook"></Img>
      </Social>
      <section>
        <h1 data-aos="fade-right" data-aos-duration="2000">ABOUT ME</h1>
        <blockquote
          data-aos="fade-left"
          data-aos-duration="2000">
          Full-Stack Web Developer and music lover!
          <br /> Looking for opportunities to grow, as a person and professional.
          <br /> Passionate for learning!
        </blockquote>
      </section>
    </Container>
  );


}

export default App;
