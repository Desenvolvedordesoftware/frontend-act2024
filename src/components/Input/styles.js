import styled from "styled-components";

export const InputCustomizado = styled.input`
  color: #000;
  font-size: 16px;
  background-color: transparent;
  border: 2px solid #02b3d4;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 15px 20px ;
  width: 100%;
  margin: 5px;
  background-color: rgba(255, 255, 255, 30);

   input::placeholder{
    color: #fff;
    font-size: 12px;
    opacity: 0.7;
   }
`;