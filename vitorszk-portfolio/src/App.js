import React, { useEffect } from "react"
import { Container, Title, Name, Job, FadeBlock, Social, Img, TitleTransition, JobTransition, KnowledgeContainer, H1, FRONTEND, BACKEND, EducationContainer } from "./styles"
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
        <h1 data-aos="fade-right" data-aos-duration="1500">ABOUT ME</h1>
        <blockquote
          data-aos="fade-left"
          data-aos-duration="1500">
          Full-Stack Web Developer and music lover!
          <br /> Looking for opportunities to grow, as a person and professional.
          <br /> Passionate for learning!
          <br />
          <br />
        </blockquote>
      </section>
      <KnowledgeContainer>
        <H1 data-aos="fade-right" data-aos-duration="1500">KNOWLEDGE</H1>
        <FRONTEND
          data-aos="fade-right"
          data-aos-duration="1500"
          data-aos-delay="1000">
          <h2>Front-End</h2>
          Development of responsive
          <br />web applications using
          <br />HTML, CSS, JAVASCRIPT,
          <br />REACT, STYLED COMPONENTS
          <br />AND UNITY TESTS WITH JEST.
        </FRONTEND>
        <BACKEND
          data-aos="fade-left"
          data-aos-duration="1500"
          data-aos-delay="1500"
        >
          <h2>Back-End</h2>
          Development of APIs,
          <br />communicating
          <br />with Front-end applications
          <br />and utilizing Clean Code principles,
          <br />NODEJS, TYPESCRIPT and MYSQL.
        </BACKEND>
      </KnowledgeContainer>
      <EducationContainer>
        <H1>EDUCATION</H1>
        <h2>Web Full Stack - LABENU</h2>
        <div>
          1000 hours Certificate of experience, during 6 months and a daily routine of 8 hours approximately. Besides the group projects, workshops and all the theoric and technical classes, 
          the soft skills are highly praised. 
        </div>
        <li>
          <ul>
            
          </ul>
        </li>
      </EducationContainer>

    </Container>
  );


}

export default App;
