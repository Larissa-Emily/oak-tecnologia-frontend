import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 30px 220px;
  z-index: 999;
  border-bottom: 1px solid rgba(58, 199, 124, 0.31);

  img {
    width: 150px;
  }
  ul {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
  }

  ul li {
    margin: 0 30px;
    font-size: 24px;
    color: #303840;
    font-weight:600;

    &:hover {
      color: #3ac77b;
    }
  }

`;
