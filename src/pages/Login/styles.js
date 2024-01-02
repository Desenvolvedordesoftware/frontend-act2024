import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  min-width: 100vw;
  background-color: #383838;
  font-family: 'Inter', sans-serif;
`
export const Img = styled.img`
  display: flex;
  height: 100%;
  min-width: 100%;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
`

export const ImgLogo = styled.img`
  display: flex;
  justify-content: center;
  width: 150px;
  height: 75px;
  padding: 5px;
  border-radius: 3px;
`

export const From = styled.form`
  display: flex;
  position: absolute;
  padding: 1rem;
  margin-right: 5px;
  margin-left: 5px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(6, 47, 79, 0.5);
  border-radius: 5px;
  height: 100vh;
  width: 100vw;
  max-width: 500px;
  max-height: 100%;
  gap: 10px;

  h1 {
    color: white;
    font-size: 20px;
  }

  p {
    color: white;
    font-size: 16px;
    font-weight: lighter;
  }

  a {
    color: white;
    font-size: 14px; 
    text-decoration: none;
    font-weight: lighter;
  }
`