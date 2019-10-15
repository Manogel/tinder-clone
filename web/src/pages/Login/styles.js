import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;

  input {
    margin-top: 20px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 4px;
    height: 48px;
    padding: 0 20px;
    color: #666;
  }

  input::placeholder{
    color: #999;
  }

  button{
    margin-top: 10px;
    border: 0;
    height: 48px;
    font-size: 16px;
    background: #DF4723;
    border-radius: 4px;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
  }

`;

export const Logo = styled.img`
  
`;