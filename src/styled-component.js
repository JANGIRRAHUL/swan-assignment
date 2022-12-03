import styled from "styled-components";

export const FormElement = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 500px;
  background-color: #ffffff;
  padding: 60px;
  border-radius: 10px;
  box-shadow: 2px 2px 5px black;
  margin: 20px;
  @media (max-width: 768px) {
    padding: 40px;
    max-width: 500px;
    width: 100%;
  }
  @media (max-width: 540px) {
    padding: 20px;
    width: 100%;
  }
`;
export const HeadingElement = styled.h1`
  color: #000000;
  margin-bottom: 32px;
  @media (max-width: 768px) {
    margin-bottom: 20px;
    font-size: 25px;
  }
  @media (max-width: 540px) {
    margin-bottom: 10px;
    font-size: 20px;
  }
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  @media (max-width: 768px) {
    /* gap: 15px; */
  }
  @media (max-width: 540px) {
    gap: 15px;
  }
`;
export const InputElement = styled.input`
  position: relative;
  color: black;
  outline: none;
  height: 30px;
  padding: 2px 8px;
  border: 1px solid black;
  border-radius: 6px;
  width: 100%;
  box-sizing: border-box;
  @media (max-width: 768px) {
    /* height: 25px;
    border-radius: 4px; */
  }
  @media (max-width: 540px) {
    /* height: 20px; */
    /* border-radius: 2px; */
    /* font-size: 10px; */
  }
`;
export const AddressElement = styled.input`
  color: black;
  outline: none;
  max-width: 228px;
  width: 100%;
  height: 30px;
  padding: 2px 8px;
  border: 1px solid black;
  border-radius: 6px;
  @media (max-width: 768px) {
    /* height: 25px;
    border-radius: 4px; */
  }
  @media (max-width: 615px) {
    width: 100%;
    max-width: 100%;
    /* height: 20px;
    border-radius: 2px; */
  }
`;
export const LabelElement = styled.label`
  color: #000000;
  @media (max-width: 540px) {
    font-size: 10px;
  }
`;
export const SelectElement = styled.select`
  color: black;
  outline: none;
  height: 34px;
  padding: 2px 8px;
  border: 1px solid black;
  border-radius: 6px;
  width: 100%;
  @media (max-width: 768px) {
    /* height: 25px;
    border-radius: 4px; */
  }
  @media (max-width: 540px) {
    /* width: 100%;
    max-width: 100%;
    border-radius: 2px; */
    /* height: 35px; */
  }
`;
export const OptionElement = styled.option`
  color: black;
`;
export const BtnElement = styled.button`
  color: black;
  width: fit-content;
  padding: 8px 16px;
  cursor: pointer;
  margin-top: 30px;
  color: #2a7fba;
  border-radius: 8px;
  font-weight: 800;
  outline: none;
  border: 1px solid;
  transition: ease-in-out;
  transition-duration: 150ms;
`;
export const ErrElement = styled.p`
  color: red;
  margin-top: -6px;
  font-size: 12px;
  left: 8px;
  top: 38px;
  position: absolute;
  @media (max-width: 768px) {
    /* top: 30px; */
    /* font-size: 10px; */
  }
  @media (max-width: 540px) {
    /* top: 28px; */
    font-size: 10px;
  }
`;
