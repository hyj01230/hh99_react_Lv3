import React from 'react'
import { styled } from 'styled-components'

const InputStyle = styled.input`
  width: 180px;
  height: 40px;
  border: 1px solid;
  border-radius: 5px;
  margin-right: 20px;
  padding: 0px 10px;
`

const InputBtn = styled.button`
  width: 80px;
  height: 35px;
  background-color: green;
  border: 1px solid green;
  border-radius: 5px;
  color: white;
  cursor: pointer;
`
// 📍구현 예정
// 가격 인풋에 콤마 찍기
// 화살표 없애기
// 미입력시 알림창 띄우고, 저장하면 alert로 입력값 띄우기

const Input = () => {
  return (
    <div>
      <h1>Input</h1>
      이름 <InputStyle type="text"/>
      가격 <InputStyle type="number"/>
      <InputBtn>저장</InputBtn>
    </div>
  )
}

export default Input