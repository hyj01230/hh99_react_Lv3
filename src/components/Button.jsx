import React from 'react'
import { styled } from 'styled-components'
import { VscChevronRight, VscBellDot } from "react-icons/vsc";

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
  
  display: flex;
  justify-content: center;
  align-items: center;
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
  justify-content: center;
  align-items: center;
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
`

// 📍구현 예정
// 클릭할 때 버튼 색상 변경

const Button = () => {
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