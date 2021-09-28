import styled from "styled-components"

export const Container = styled.div`
    background-color: #313131;
    display: flex;
    width: 100%;
    height: 100vh;
    flex-direction: column;

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
    position: fixed;
    top: 250px;
    animation: TitleTransition 1s cubic-bezier(0, 0.1, 0.12, 0.99) 0s 1 normal forwards running ;
    animation-delay: 2s;

    @keyframes TitleTransition {
        from {
            top: 250px;
        }
        to {
            top: 500px;
        }
    }

`

export const JobTransition = styled.div`
    background-color: #313131;
    width: 1025px;
    z-index: 9;
    height: 250px;
    position: fixed;
    top: 500px;
    animation: JobTransition 2s cubic-bezier(0, 0.1, 0.12, 0.99) 0s 1 normal forwards running ;
    animation-delay: 4s;

    @keyframes JobTransition {
        from {
            top: 500px;
        }
        to {
            top: 250px;
        }
    }

`

export const Title = styled.div`
    display: flex;
    width: 100%;
    height: 90vh;
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
    animation-delay: 3s;

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
    font-size: 60px;
    letter-spacing: 20px;
    color: white;
`

export const Social = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    opacity: 0;
    animation: Social 1s ;
    animation-fill-mode: forwards;
    animation-delay: 6s;


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