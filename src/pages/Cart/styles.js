import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-align: center;
  height: auto;
  padding: 40px;
`;

export const ContainerCart = styled.div`
  border-radius: 10px;
  padding: 20px;
  background: #fff;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
`;

export const Total = styled.div`
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 200px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  h4 {
    font-size: 20px;
  }

  p {
    font-size: 16px;
    font-weight: 600;
  }
`;
