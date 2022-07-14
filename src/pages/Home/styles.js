import styled from "styled-components";

export const HomeWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 34px;
  width: 100%;
`;

export const Header = styled.header`
  width: 50%;
  margin: 84px 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 60px;
    height: 60px;
    border-radius: 30px;
    margin-left: 7px;
  }

  div {
    display: flex;
    align-items: center;
  }
`;

export const Input = styled.input`
  width: 50%;
  height: 40px;
  border-radius: 10px;
  margin-bottom: 30px;
  padding: 10px;
  border: ${(props) => props.borderColor || "#ff006e"} solid 1px;
`;

export const Button = styled.button`
  width: 50%;
  height: 40px;
  border-radius: 10px;
  margin-bottom: 30px;
  padding: 10px;

  background-color: ${(props) => props.bgColor || "#ff006e"};
  border: none;
  color: white;
  font-weight: bolder;
  font-size: 18px;
  margin-bottom: 40px;
  border: none;
`;
