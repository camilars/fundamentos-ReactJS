import styled from "styled-components";

export const CardWrapper = styled.div`
  height: 100px;
  width: 50%;
  background-color: ${(props) => props.bgColor || "#735b72"};
  color: #fff;
  border-radius: 10px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;

  strong {
    font-size: 18px;
  }
`;
