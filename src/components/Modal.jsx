import React from 'react'
import { styled } from 'styled-components'

const ModalDiv = styled.div`
  display: flex;
`

const ModaBtn1 = styled.button`
  width: 100px;
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

const ModaBtn2 = styled.button`
  width: 180px;
  height: 50px;
  margin: 5px 5px;
  border-radius: 5px;
  border: 3px solid green;
  background-color: white;
  font-weight: 700;
  cursor: pointer;

  &:active {
    background-color: #e3e3e3;
  }
`

// 📍구현 예정
// 모달1 : 클릭하면 세부 페이지 나오기, 버튼 클릭하면 화면 닫기
// 모달2 : 클릭하면 세부 페이지 나오기, 버튼 및 외부 영역 클릭하면 화면 닫기

const Modal = () => {
  return (
    <div>
      <h1>Modal</h1>
      <ModalDiv>
        <ModaBtn1>open modal</ModaBtn1>
        <ModaBtn2>open modal</ModaBtn2>
      </ModalDiv>
    </div>
  )
}

export default Modal