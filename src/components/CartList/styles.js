import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #808080;
  border-radius: 10px;
  display: flex;
  padding: 10px;
  margin-bottom: 5px;

  img {
    display: block;
    width: 80px;
    height: 80px;
  }
`;

export const Text = styled.div`
  margin-left: 10px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 700;
`;
