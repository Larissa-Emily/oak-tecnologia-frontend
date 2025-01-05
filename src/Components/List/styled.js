import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 75vh;
  justify-content: center;
  align-items: center;
`;

export const Listing = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px 0;

  h1 {
    color: #303840;
    font-weight: 600;
  }
`;
