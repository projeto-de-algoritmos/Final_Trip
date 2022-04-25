import styled from "styled-components";

export const Container = styled.div`
  h2{
    margin: 13px;
  }
`;

export const PointContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: black;
    font-weight: 400;
  }
`;

export const Image = styled.img`
  width: 50%;
  border-radius: 15px;
  margin-right: 10px;
`;

export const Separator = styled.div`
  width: 100%;
  height: 2px;
  background-color: darkGrey;
  margin-top: 13px;
`