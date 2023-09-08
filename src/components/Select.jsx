import React, { useState } from 'react';
import { styled } from 'styled-components'
import { BiSolidDownArrow } from "react-icons/bi";

const Select = () => {

  const [selectDrop1, setSelectDrop1] = useState(false)
  const [selectDrop2, setSelectDrop2] = useState(false)

  const toggleDrop1 = () => {
    if (selectDrop1) {
      setSelectDrop1(false);
    } else {
      setSelectDrop1(true);
      setSelectDrop2(false);
    }
  };

  const toggleDrop2 = () => {
    if (selectDrop2) {
      setSelectDrop2(false);
    } else {
      setSelectDrop2(true);
      setSelectDrop1(false);
    }
  };

  const handleOutsideClick = () => {
    setSelectDrop1(false);
    setSelectDrop2(false);
  };

  const [barTitle1, setBarTitle1] = useState('리액트')
  const [barTitle2, setBarTitle2] = useState('리액트')

  const closeDrop1 = (name) => {
    setSelectDrop1(false);
    setBarTitle1(name);
  }

  const closeDrop2 = (name) => {
    setSelectDrop2(false);
    setBarTitle2(name);
  }

  return (
    <>
      <Slectwrap onClick={handleOutsideClick}>
        <h1>Select</h1>
        <div>
          <SelectDiv onClick={(evet) => evet.stopPropagation()}>
            <SelectBar onClick={toggleDrop1}>{barTitle1} <BiSolidDownArrow /></SelectBar>
            <SelectBar onClick={toggleDrop2}>{barTitle2} <BiSolidDownArrow /></SelectBar>
          </SelectDiv>
          <SelectDiv>
            {selectDrop1 && (
              <DropDiv1>
                <Li1 onClick={() => closeDrop1('리액트')}>리액트</Li1>
                <Li1 onClick={() => closeDrop1('자바')}>자바</Li1>
                <Li1 onClick={() => closeDrop1('스프링')}>스프링</Li1>
                <Li1 onClick={() => closeDrop1('리액트네이티브')}>리액트네이티브</Li1>
              </DropDiv1>
            )}
            {selectDrop2 && (
              <DropDiv2>
                <Li2 onClick={() => closeDrop2('리액트')}>리액트</Li2>
                <Li2 onClick={() => closeDrop2('자바')}>자바</Li2>
                <Li2 onClick={() => closeDrop2('스프링')}>스프링</Li2>
                <Li2 onClick={() => closeDrop2('리액트네이티브')}>리액트네이티브</Li2>
              </DropDiv2>
            )}
          </SelectDiv>
        </div>
      </Slectwrap>
    </>
  )
}

export default Select

const Slectwrap = styled.div`
  border: 2px solid lightgray;
  height: 220px;
  margin: 40px 5px 5px 5px;
  padding: 0px 3px;
  position: relative;
  overflow: hidden;
`

const SelectDiv = styled.div`
  display: flex;
`

const SelectBar = styled.div`
  border: 1px solid lightgray;
  border-radius: 10px;
  width: 250px;
  height: 50px;
  margin-right: 5px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  // padding값이 박스 크기(width, height)에 영향을 주지 않음
  box-sizing: border-box;
  padding: 0px 30px;
`

const DropDiv1 = styled.ul`
  background-color: white;
  border: 1px solid #e8e8e8;
  width: 250px;
  border-radius: 15px;
  padding-left: 0; // 들여쓰기 제거
  margin-right: 5px;
  left: 17px; // 위치조정
  top: 646px;
  // position:fixed(부모 오버플로를 무시하게 함)
  position: fixed;
`

const DropDiv2 = styled.ul`
  background-color: white;
  border: 1px solid #e8e8e8;
  width: 250px;
  border-radius: 15px;
  padding-left: 0; // 들여쓰기 제거
  margin-right: 5px;
  left: 258px; // 위치조정
  top: 125px;
  position: absolute;
  `

const Li1 = styled.li`
	list-style: none;
  height: 30px;
  padding: 10px 10px;
  border-radius: 15px;
  background-color: white;

	&:hover {
    background-color: #e8e8e8;
  }
`

const Li2 = styled.li`
	list-style: none;
  height: 30px;
  padding: 10px 10px;
  border-radius: 15px;
  background-color: white;

	&:hover {
    background-color: #e8e8e8;
  }
`