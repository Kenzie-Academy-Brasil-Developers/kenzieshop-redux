import styled from "styled-components";

export const Container = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px;
  background: #fff;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: 1px solid #808080;
`;

export const Image = styled.div`
  width: 100%;
  height: 320px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    display: block;
    width: 220px;
    height: 100%;
    max-height: 3310px;
  }
`;

export const Text = styled.div`
  text-align: left;
  padding: 10px;
  height: 155px;

  h5 {
    font-size: 16px;
  }

  span {
    color: #363636;
  }
`;

export const Paragraph = styled.p`
  margin: 5px 0px;

  font-size: ${(props) => (props.priceSchema ? "20px" : "14px")};
  font-weight: ${(props) => (props.priceSchema ? "700" : "normal")};
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
  margin: 10px 0px;

  button {
    padding: 16px;
    background: #0000cd;
    border: none;
    border-radius: 10px;
    color: #fff;
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
  }
`;
