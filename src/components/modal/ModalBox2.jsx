import React from 'react'
import { styled } from 'styled-components'

const ModalWrap = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  // 화면에 가득차게
  width: 100%;
  height: 100%;
  // 최상단 위치
  z-index: 999;
  // 중앙배치
  position: absolute;
  top: 0;
  left: 0;
  // 내용물 중앙으로
  display: flex; // 수직 중앙 정렬을 위해 flex 사용
  justify-content: center; // 수평 중앙 정렬
  align-items: center; // 수직 중앙 정렬
`

const ModalBoxDiv2 = styled.div`
  background-color: orange;
  width: 300px;
  height: 200px;
  border-radius: 15px;
  // 겹치기 - 부모요소 위치 설정
  position :relative;
`

const ModalBoxBtn2 = styled.button`
  background-color: white;
  border: none;
  border-radius: 50px;
  width: 45px;
  height: 45px;
  margin: 10px 10px;
  right: 10px;
  // 겹치기 - 자녀요소 위치 설정
  position: absolute;
  cursor: pointer;

  &:hover {
    border: 1px solid black;
  }
`

const ModalBoxP2 = styled.p`
  padding: 17px 20px;
`

const ModalBox2 = ({setModalOpen2}) => {

  const closeModal2 = () => {
    setModalOpen2(false)
  }

  return (
    <ModalWrap onClick={closeModal2}>
      <ModalBoxDiv2>
        <ModalBoxBtn2 onClick={closeModal2}>X</ModalBoxBtn2>
        <ModalBoxP2>닫기 버튼 1개가 있고,<br />외부 영역을 누르면 모달이 닫혀요.</ModalBoxP2>
      </ModalBoxDiv2>
    </ModalWrap>
  )
}

export default ModalBox2