import React from 'react'
import { styled } from 'styled-components'
import { VscChevronRight, VscBellDot } from "react-icons/vsc";

function Button() {
  return (
    <div>
      <h1>Button</h1>
      <ButtonDiv>
        <ButtonL1 onClick={() => {
          alert('버튼을 만들어보세요')
        }}>Large Primary Button &nbsp;<VscChevronRight style={{ fontSize: '13px' }} /></ButtonL1>
        <ButtonM1>Medium</ButtonM1>
        <ButtonS1>Small</ButtonS1>
      </ButtonDiv>
      <ButtonDiv>
        <ButtonL2 onClick={() => {
          prompt('어렵나요?')
        }}>Large Negative Button &nbsp;<VscBellDot style={{ fontSize: '16px' }} /></ButtonL2>
        <ButtonM2>Medium</ButtonM2>
        <ButtonS2>Small</ButtonS2>
      </ButtonDiv>
    </div>
  )
}

export default Button

const ButtonDiv = styled.div`
  display: flex;
`

const ButtonL1 = styled.button`
  width: 200px;
  height: 50px;
  margin: 5px 5px;
  border-radius: 5px;
  border: 3px solid green;
  background-color: white;
  font-weight: 700;
  cursor: pointer;
  
  // 내용물 정렬
  display: flex;
  flex-direction : row;
  justify-content: center;
  align-items: center;

  // &:active - ButtonL1이 활성화되면 {}를 적용시켜라!
  // & : ButtonL1을 지칭, 부모(상위) 선택자
  // 활성화 상태: onClick을 예로 들면 클릭해서 떼는 시점까지를 말함
  // 참고 : https://webclub.tistory.com/396
  &:active {
    background-color: #e3e3e3;
  }
`

const ButtonM1 = styled.button`
  width: 140px;
  height: 45px;
  margin: 5px 5px;
  border-radius: 5px;
  border: 3px solid green;
  background-color: green;
  color: white;
  cursor: pointer;

  &:active {
    background-color: darkgreen;
    border-color: darkgreen;
  }
`

const ButtonS1 = styled.button`
  width: 80px;
  height: 40px;
  margin: 5px 5px;
  border-radius: 5px;
  border: 3px solid green;
  background-color: green;
  color: white;
  cursor: pointer;

  &:active {
    background-color: darkgreen;
    border-color: darkgreen;
  }
`

const ButtonL2 = styled.button`
  width: 200px;
  height: 50px;
  margin: 5px 5px;
  border-radius: 5px;
  border: 3px solid Orange;
  background-color: white;
  font-weight: 700;
  cursor: pointer;

  display: flex;
  flex-direction : row;
  justify-content: center;
  align-items: center;

  &:active {
    background-color: #e3e3e3;
  }
`

const ButtonM2 = styled.button`
  width: 140px;
  height: 45px;
  margin: 5px 5px;
  border-radius: 5px;
  border: 3px solid Orange;
  background-color: Orange;
  color: white;
  cursor: pointer;

  &:active {
    background-color: darkorange;
    border-color: darkorange;
  }
`

const ButtonS2 = styled.button`
  width: 80px;
  height: 40px;
  margin: 5px 5px;
  border-radius: 5px;
  border: 3px solid Orange;
  background-color: Orange;
  color: white;
  cursor: pointer;

  &:active {
    background-color: darkorange;
    border-color: darkorange;
  }
`