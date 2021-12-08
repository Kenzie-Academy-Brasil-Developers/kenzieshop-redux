import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 30px 10px 30px;
  border-bottom: 2px solid #808080;
`;

export const LogoHeader = styled.div`
  display: flex;
  align-items: center;
  color: #0000cd;

  img {
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 150px;
    margin-right: 5px;
  }
`;

export const Menu = styled.div`
  display: flex;

  a {
    display: flex;
    align-items: center;
    cursor: pointer;

    p {
      margin-left: 5px;
    }
  }

  a + a {
    margin-left: 20px;
  }
`;
