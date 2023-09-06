import React, { useState } from 'react'
import { styled } from 'styled-components'
import ModalBox1 from './ModalBox1'
import ModalBox2 from './ModalBox2'

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
  border: 3px solid orange;
  background-color: white;
  font-weight: 700;
  cursor: pointer;

  &:active {
    background-color: #e3e3e3;
  }
`

// 📍구현 예정
// 모달2 : 외부 영역 클릭하면 화면 닫기

const Modal = () => {

  // 모달창 상태관리
  const [modalOpen1, setModalOpen1] = useState(false)
  const [modalOpen2, setModalOpen2] = useState(false)

  // 모달창 열기 참고 : https://curryyou.tistory.com/493
  // 모달창 열기
  const showModal1 = () => { setModalOpen1(true) }
  const showModal2 = () => { setModalOpen2(true) }

  return (
    <div>
      <h1>Modal</h1>
      <ModalDiv>
        <ModaBtn1 onClick={showModal1}>open modal</ModaBtn1>
        {/* && : 논리곱 연산자 = 둘 다 트루일때만 트루 반환
        트루 = ModalBox1에 프롭스 내리고 출력하기 */}
        {modalOpen1 && <ModalBox1 setModalOpen1={setModalOpen1} />}
        <ModaBtn2 onClick={showModal2}>open modal</ModaBtn2>
        {modalOpen2 && <ModalBox2 setModalOpen2={setModalOpen2} />}
      </ModalDiv>
    </div>
  )
}

export default Modal