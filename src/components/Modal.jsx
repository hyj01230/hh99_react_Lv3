import React, { useState } from 'react'
import { styled } from 'styled-components'

const Modal = () => {

  // 모달창 상태관리
  const [modalOpen1, setModalOpen1] = useState(false)
  const [modalOpen2, setModalOpen2] = useState(false)

  // 모달창 열기 참고 : https://curryyou.tistory.com/493
  // 모달창 열기
  const showModal1 = () => { setModalOpen1(true) }
  const showModal2 = () => { setModalOpen2(true) }

  const closeModal1 = () => { setModalOpen1(false) }
  const closeModal2 = () => { setModalOpen2(false) }

  return (
    <div>
      <h1>Modal</h1>
      <ModalDiv>
        <ModaBtn1 onClick={showModal1}>open modal</ModaBtn1>
        {/* && : 논리곱 연산자 = 둘 다 트루일때만 트루 반환
        트루 = ModalBox1에 프롭스 내리고 출력하기 */}
        {modalOpen1 && (
          <ModalWrap>
            <ModalBoxDiv1>
              <ModalBoxP1>닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.</ModalBoxP1>
              <ModalBoxBtnDiv1>
                <MadalBoxBtnL1 onClick={closeModal1}>닫기</MadalBoxBtnL1>
                <MadalBoxBtnR1>확인</MadalBoxBtnR1>
              </ModalBoxBtnDiv1>
            </ModalBoxDiv1>
          </ModalWrap>
        )}
        <ModaBtn2 onClick={showModal2}>open modal</ModaBtn2>
        {modalOpen2 && (
          <ModalWrap onClick={closeModal2}>
            {/* stopPropagation() : 캡처 Event 및 버블링 단계에서 현재 이벤트가 추가로 전파되는 것을 방지 */}
            <ModalBoxDiv2 onClick={(evet) => evet.stopPropagation()}>
              <ModalBoxBtn2 onClick={closeModal2}>X</ModalBoxBtn2>
              <ModalBoxP2>닫기 버튼 1개가 있고,<br />외부 영역을 누르면 모달이 닫혀요.</ModalBoxP2>
            </ModalBoxDiv2>
          </ModalWrap>
        )}
      </ModalDiv>
    </div>
  )
}

export default Modal


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
  padding-top: 110px;
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