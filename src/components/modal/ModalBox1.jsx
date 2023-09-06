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

const ModalBoxDiv1 = styled.div`
  background-color: white;
  width: 500px;
  height: 300px;
  border-radius: 15px;
`

const ModalBoxP1 = styled.p`
  padding: 25px 25px;
`

const ModalBoxBtnDiv1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
`
const MadalBoxBtnL1 = styled.button`
  background-color: orange;
  border: none;
  border-radius: 10px;
  width: 130px;
  height: 50px;
  margin-left: auto;
  margin-right: 10px;
  cursor: pointer;

  &:active {
    background-color: darkorange;
  }
`

const MadalBoxBtnR1 = styled.button`
  background-color: green;
  border: none;
  border-radius: 10px;
  width: 130px;
  height: 50px;
  margin-right: 10px;
  cursor: pointer;

  &:active {
    background-color: darkgreen;
  }
`

const ModalBox1 = ({setModalOpen1}) => {

  const closeModal1 = () => {
    setModalOpen1(false)
  }

  return (
    <ModalWrap>
      <ModalBoxDiv1>
        <ModalBoxP1>닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.</ModalBoxP1>
        <ModalBoxBtnDiv1>
          <MadalBoxBtnL1 onClick={closeModal1}>닫기</MadalBoxBtnL1>
          <MadalBoxBtnR1>확인</MadalBoxBtnR1>
        </ModalBoxBtnDiv1>
      </ModalBoxDiv1>
    </ModalWrap>
  )
}

export default ModalBox1