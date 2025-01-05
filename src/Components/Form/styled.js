import styled from "styled-components";

export const Container = styled.div`
  width: 800px;
  background-color: white;
  padding: 26px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  h3 {
    margin-bottom: 20px;
    font-weight: 600;
    padding: 12px 0;
    border-bottom: 1px solid #ddd;
    color: #303840;
  }

  input {
    width: 100%;
    padding: 16px;
    border-radius: 8px;
    border: 1px solid #ddd;
    margin: 10px 0px;
  }

  select {
    padding: 16px;
    border-radius: 8px;
    margin: 10px 0px;
    border: 1px solid #ddd;
  }

  .buttons {
    padding: 20px 0px;
    button {
      margin-right: 10px;
      padding: 12px 30px;
      border-radius: 8px;
      border: none;
      background-color: #303840;
      color: white;
      cursor: pointer;
      &:hover {
        background-color: #262d32;
      }
      &:disabled {
        background-color: #ddd;
        cursor: not-allowed;
      }
    }
    .submit {
      background-color: #42c27c;
    }
  }
`;
