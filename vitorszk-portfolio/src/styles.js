import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    flex-direction: column;

    section {
        margin-top: 100vh;
        height: 100vh;
        width: 100%;
    }

    h1 {
        position: absolute;
        top: 130vh;
        left: 10vh;
        font-size: 13em;
        font-family: 'Rubik', sans-serif;
        color: #292929;
    }

    blockquote {
        color: white;
        position: absolute;
        height: 50%;
        top: 180vh;
        right: 10vh;
        font-size: 2em;
        font-family: 'Montserrat', sans-serif;
    }

`

export const H1 = styled.h1`
        position: absolute;
        top: 130vh;
        left: 10vh;
        font-size: 13em;
        font-family: 'Rubik', sans-serif;
        color: #292929;
`

export const FadeBlock = styled.div`
    background-color: white;
    position: fixed;
    z-index: 10;
    top: 0;
    width: 100%;
    height: 100vh;
    animation: FadeBlock 2s ;
    animation-fill-mode: forwards;
    opacity: 0;


    @keyframes FadeBlock {
        from {
            opacity: 1
        }
        to {
            opacity: 0
        }
    }
`

export const TitleTransition = styled.div`
    background-color: #313131;
    width: 1025px;
    z-index: 7;
    height: 250px;
    position: absolute;
    top: 25.5vh;
    animation: TitleTransition 2s cubic-bezier(0, 0.1, 0.12, 0.99) 0s 1 normal forwards running ;
    animation-delay: 500ms;

    @keyframes TitleTransition {
        from {
            top: 25.5vh;
        }
        to {
            top: 51.1vh;
        }
}
`

export const JobTransition = styled.div`
    background-color: #313131;
    width: 1025px;
    z-index: 9;
    height: 250px;
    position: absolute;
    top: 48.6vh;
    animation: JobTransition 2s cubic-bezier(0, 0.1, 0.12, 0.99) 0s 1 normal forwards running ;
    animation-delay: 2s;

    @keyframes JobTransition {
        from {
            top: 48.6vh;
        }
        to {
            top: 25.5vh;
        }

    }

`

export const Title = styled.div`
    display: flex;
    width: 100%;
    height: 90vh;
    margin-top: 25vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const Name = styled.div`
    display: flex;
    z-index: 5;
    font-family: 'Rock Salt', cursive;
    font-size: 120px;
    color: white;
    letter-spacing: 5px;
    animation: Name 2s cubic-bezier(0, 0.1, 0.12, 0.99) 0s 1 normal forwards running ;
    animation-delay: 1s;

    @keyframes Name {
        from {
            z-index: 5;
        }
        to {
            z-index: 10;
        }
    }

`

export const Job = styled.div`
    display: flex;
    z-index: 8;
    font-family: 'Gemunu Libre', sans-serif;
    font-size: 35px;
    opacity: 0;
    letter-spacing: 20px;
    color: white;
    animation: Job 2s cubic-bezier(0, 0.1, 0.12, 0.99) 0s 1 normal forwards running ;
    animation-delay: 2s;

    @keyframes Job {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
        30% {
            opacity: 0;
        }
        100% {
            opacity: 1
        }

    }
`

export const Social = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 35vh;
    z-index: 1000;
    opacity: 0;
    animation: Social 1s ;
    animation-fill-mode: forwards;
    animation-delay: 3500ms;


@keyframes Social {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
`

export const Img = styled.img`
    width: 40px;
    height: 40px;
    margin: 0 50px;
    transition: 300ms;
    animation: Img 2s ease-in-out infinite alternate;

    @keyframes Img {
        from {
            opacity: 0.4;
            filter: brightness(0.7);
  }
        to {
            opacity: 1;
            filter: brightness(2);
  }
}

    &:hover {
        cursor: pointer;
        transform: scale(1.4);
    }
`

export const KnowledgeContainer = styled.div`
    position: absolute;
    margin-top: 100vh;
    width: 100%;
    z-index: 10;
`
export const FRONTEND = styled.div`
        color: white;
        position: absolute;
        height: 50vh;
        top: 180vh;
        left: 30vh;
        font-size: 2em;
        font-family: 'Montserrat', sans-serif;
`

export const BACKEND = styled.div`
        color: white;
        position: absolute;
        height: 50vh;
        top: 180vh;
        right: 35vh;
        font-size: 2em;
        font-family: 'Montserrat', sans-serif;
`