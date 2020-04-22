import styled from "styled-components"

const SplashContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 100;
  background: rgb(255, 255, 255);
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: center;

  .init-loading--loading-text {
    font-size: 25px;
    color: black;
    font-family: Luminari, Arial, sans-serif;
    animation: fadeIn ease 3s;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .init-loading--hide {
    animation: fadeOut ease 1s;
  }
  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`

export default () => {
  return (
    <SplashContainer>
      <div className={"init-loading--loading-text"}>Indian Shack</div>
    </SplashContainer>
  )
}
