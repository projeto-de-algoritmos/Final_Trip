import styled from "styled-components";

export const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgb(20, 21, 49, 0.4);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 70%;
  height: 90%;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
  
  h1 {
    display: inline-block;
    text-align: center;
    margin-top: 10px;
  }
`;

export const TitleCloseBtn = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    background-color: transparent;
    border: none;
    font-size: 25px;
    cursor: pointer;
  }
`;

export const Body = styled.div`
  display: flex;
  height: 80%;
  width: 80%;
  flex-direction: column;
  align-self: center;
  font-size: 1.3rem;
  text-align: center;
  overflow: auto;
`;

export const Footer = styled.div`
  flex: 20%;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 150px;
    height: 45px;
    margin: 10px;
    border: none;
    background-color: dodgerBlue;
    color: white;
    border-radius: 8px;
    font-size: 20px;
    cursor: pointer;
  }
`;

export const SliderContainer = styled.div`
  width: 80%;
  align-self: center;
`;